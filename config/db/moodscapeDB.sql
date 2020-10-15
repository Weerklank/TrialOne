DROP DATABASE IF EXISTS moodscape_db;

CREATE DATABASE moodscape_db;

USE moodscape_db;


CREATE TABLE login (
    user_id INTEGER AUTO_INCREMENT,
    user_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (user_id)
    );

CREATE TABLE reminders (
    reminder_id INTEGER AUTO_INCREMENT,
    date VARCHAR(10) NOT NULL,
    time VARCHAR(7) NOT NULL,
    reminder VARCHAR(100) NOT NULL,
    description VARCHAR(2000),
    on_off BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (reminder_id)
);

CREATE TABLE journal (       
    journal_id INTEGER AUTO_INCREMENT,
    date VARCHAR(10) NOT NULL,
    content VARCHAR(4000), 
    mood VARCHAR(30),
    PRIMARY KEY (journal_id)
);