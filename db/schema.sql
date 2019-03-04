DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id INT
    AUTO_INCREMENT NOT NULL,

    burger_name VARCHAR
    (100) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT FALSE,
    createdAT TIMESTAMP NOT NULL,
    PRIMARY KEY
    (id)


        );

        
