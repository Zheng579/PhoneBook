CREATE DATABASE phone_contact;

CREATE TABLE contact (
    ContactID BIGINT NOT NULL AUTO_INCREMENT,
    ContactName VARCHAR(255),
    phoneNo VARCHAR(45),
    PRIMARY KEY (`ContactID`)
);

//run the following mysql to create database and table
change database setting in phoneBookAPI.py
host the api using python phoneBookAPI.py

//run the front end, use the following command
cd phone-book-app
npm install
npm run start

now you will be able to use the system