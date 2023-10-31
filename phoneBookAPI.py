from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS

db_connection = mysql.connector.connect(
    host="127.0.0.1",
    port=3306,  
    user="root",
    password="admin",
    database="phone_contact"
)


app = Flask(__name__)
CORS(app)
app.debug = True  # Enable debug mode

@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    cursor = db_connection.cursor()
    cursor.execute("SELECT ContactID, ContactName, phoneNo FROM contact")
    results = cursor.fetchall()
    print(results)
    cursor.close()
    return jsonify(results)

@app.route('/api/contacts', methods=['POST'])
def add_contact():
    data = request.get_json()
    cursor = db_connection.cursor()
    cursor.execute("INSERT INTO contact (ContactName, phoneNo) VALUES (%s, %s)", (data['name'], data['phoneNumber']))
    db_connection.commit()
    cursor.close()
    return 'Contact added', 201

@app.route('/api/contacts/<int:id>', methods=['PUT'])
def update_contact(id):
    data = request.get_json()
    cursor = db_connection.cursor()
    cursor.execute("UPDATE contact SET ContactName = %s, phoneNo = %s WHERE ContactID = %s", (data['name'], data['phoneNumber'], id))
    db_connection.commit()
    cursor.close()
    return 'Contact updated', 200

@app.route('/api/contacts/<int:id>', methods=['DELETE'])
def delete_contact(id):
    cursor = db_connection.cursor()
    cursor.execute("DELETE FROM contact WHERE ContactID = %s", (id,))
    db_connection.commit()
    cursor.close()
    return 'Contact deleted', 200

if __name__ == '__main__':
    app.run()