DROP DATABASE IF EXISTS emsDataBase;

CREATE DATABASE emsDataBase;

USE emsDataBase;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,

PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department(id)

);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NOT NULL,

PRIMARY KEY (id),

FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (manager_id) REFERENCES role(id)
);


INSERT INTO department (name) VALUES ("HR"),("SALES"),("IT"),("Management");
INSERT INTO role (title, salary, department_id) VALUES ("Salesman", 100000, 2),("HR Manager", 90000, 4),("HR assistant", 75000, 1);
INSERT INTO role ( title, salary , department_id) VALUES("HR Coordinator", 40000, 1);
SELECT * FROM role LEFT JOIN department ON role.department_id = department.id;




select * from role