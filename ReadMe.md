# Phone Contact System
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

frontend: React.js<br />
backend: Node.js<br />
database: MySQL<br />

This project is a simple phone contact system that includes both a MySQL database for storing contact information and a front-end application for managing and displaying contacts.

## Setup

### Database Setup

Create the database and table by running the following SQL commands:

```sql
CREATE DATABASE phone_contact;

CREATE TABLE contact (
    ContactID BIGINT NOT NULL AUTO_INCREMENT,
    ContactName VARCHAR(255),
    phoneNo VARCHAR(45),
    PRIMARY KEY (`ContactID`)
);
```

### API Setup
1. Host the API using the following Python script:
    ```console
    python phoneBookAPI.py
    ```

### Front-end Setup
1. Open the front-end application directory:
    ```console
    cd phone-book-app
    ```

2. Install the required Node.js packages:
    ```console
    npm install
    ```

3. Start the front-end application:
    ```console
    npm run start
    ```


#### Now you will be able to use the **Phone Book System**.

### USAGE
Use the provided API and front-end to manage your phone book entries. You can add, edit, delete, and view entries through the front-end application.
