-- scrip that prepares a MYSQl database
CREATE SCHEMA IF NOT EXISTS Mending_minds_db;
CREATE USER IF NOT EXISTS 'MendingMinds_dev'@'localhost' IDENTIFIED BY 'Mending_minds';
GRANT ALL ON Mending_minds_db.* TO 'MendingMinds_dev'@'localhost';
GRANT SELECT ON performance_schema.* TO 'MendingMinds_dev'@'localhost';