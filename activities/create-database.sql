CREATE DATABASE seinfeld_db;

-- used if we want to revise the schema --
-- DROP TABLE people; --

USE seinfeld_db;

CREATE TABLE people (
  id int(10) AUTO_INCREMENT NOT NULL,
  name varchar(60) NOT NULL,
  coolness int(10),
  attitude varchar(10),
  PRIMARY KEY (id)
);

-- https://dev.mysql.com/doc/refman/5.7/en/load-data.html --
-- THIS IS THE STRUCTURE FOR THE SQL STATEMENTS --
-- HERE WORKING WITH FILE WITH HEADER ROW --
-- Actually used the GUI tool... but this close (I think)
LOAD DATA LOCAL INFILE
"/Users/poweruser/class-04-25/activities/seinfeld-data.csv"
INTO TABLE seinfeld_db.people
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id, name, coolness, attitude);

-- check the data
SELECT * FROM seinfeld_db.people;
