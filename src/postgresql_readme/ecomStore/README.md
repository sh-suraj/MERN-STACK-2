# ecom store task:

- create a one-to-one and many-to-one and many-to-one relationship in a shopping store context using four tables:

  - customers
  - orders
  - products
  - order_items

- include a price column in the products table and display the relationship between customers and their orders along with the details of the products in each order.

```sql

institute=#
create database ecomStore;
\c ecomstore
You are now connected to database "ecomstore" as user "postgres".
ecomstore=#

`pgAdmin4 psql tool`

```

---

## step 1

- create all tables

```sql

--step 1--
CREATE TABLE customers(
cust_id SERIAL PRIMARY KEY,
cust_name VARCHAR(50) NOT NULL
);
CREATE TABLE orders(
ord_id SERIAL PRIMARY KEY,
ord_date DATE NOT NULL DEFAULT CURRENT_DATE,
cust_id INTEGER NOT NULL,
FOREIGN KEY(cust_id) REFERENCES customers(cust_id)
);

CREATE TABLE products(
p_id SERIAL PRIMARY KEY,
p_name VARCHAR(100) NOT NULL,
price NUMERIC NOT NULL
);
CREATE TABLE ord_items(
items_id SERIAL PRIMARY KEY,
ord_id INTEGER NOT NULL,
p_id INTEGER NOT NULL,
quantity NUMERIC NOT NULL,
FOREIGN KEY(ord_id) REFERENCES orders(ord_id),
FOREIGN KEY(p_id) REFERENCES products(p_id)
);

ecomstore=# \dt
            List of tables
 Schema |   Name    | Type  |  Owner
--------+-----------+-------+----------
 public | customers | table | postgres
 public | ord_items | table | postgres
 public | orders    | table | postgres
 public | products  | table | postgres
(4 rows)
```

---

## step 2 :

- insert data

```sql
INSERT INTO customers(cust_name)
VALUES
('Rabin'),
('Diwash'),
('Anjal'),
('Jenish');

INSERT INTO products(p_name, price)
VALUES
('Mouse',500),
('Keyboard', 1000),
('Laptop', 100000),
('Dcable', 500),
('Iphone 16', 55000);

INSERT INTO orders(ord_date, cust_id)
VALUES
('2082-08-22',1),
('2082-09-1', 2),
('2082-09-2', 3),
('2082-08-23', 4),
('2082-09-24', 2),
('2082-09-1', 3),
('2082-09-2', 1),
('2082-08-23', 4),
('2082-09-24', 2);

INSERT INTO ord_items (ord_id, p_id, quantity)
VALUES
(1,1,5),
(2,3,1),
(2,3,1),
(3,2,5),
(3,4,2),
(4,5,1),
(4,4,1),
(5,3,1),
(5,1,1);

```

---

## step 3

- lets apply join now and create billing

```sql
SELECT
c.cust_name as customer,
p.p_name as product,
oi.quantity,
o.ord_date as order_date,
p.price,
CASE
when o.ord_id=oi.ord_id then p.price*oi.quantity
END AS total
FROM ord_items oi
JOIN
 products p on oi.p_id = p.p_id

JOIN
orders o on o.Ord_id = oi.ord_id

JOIN
customers c on o.cust_id = c.cust_id;

--output--
  customer |  product  | quantity | order_date | price  | total
----------+-----------+----------+------------+--------+--------
 Rabin    | Mouse     |        5 | 2082-08-22 |    500 |   2500
 Diwash   | Laptop    |        1 | 2082-09-01 | 100000 | 100000
 Diwash   | Laptop    |        1 | 2082-09-01 | 100000 | 100000
 Anjal    | Keyboard  |        5 | 2082-09-02 |   1000 |   5000
 Anjal    | Dcable    |        2 | 2082-09-02 |    500 |   1000
 Jenish   | Iphone 16 |        1 | 2082-08-23 |  55000 |  55000
 Jenish   | Dcable    |        1 | 2082-08-23 |    500 |    500
 Diwash   | Laptop    |        1 | 2082-09-24 | 100000 | 100000
 Diwash   | Mouse     |        1 | 2082-09-24 |    500 |    500
(9 rows)
```

**_star this repo if you love my notes_**

- **author**: **_Suraj Raut(https://github.com/SRIT99)_**
