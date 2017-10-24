CREATE DATABASE bamazon;
USE bamazon;

DROP TABLE products;
CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR (100),
department_name VARCHAR (100),
price DECIMAL (10,4),
stock_quantity INTEGER (10),
PRIMARY KEY (item_id) 
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("telephone", "electronics", "100", "1000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("clown", "costume", "12", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shoes", "shoes", "10", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tree", "garden", "40", "300");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee", "food", "2", "30");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("table", "furniture", "500.23", "2");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chocolate", "food", "500.3", "1");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pants", "clothing", "20.32", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("makeup", "make-up", "400.00", "20");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chair", "furniture", "100", "20");