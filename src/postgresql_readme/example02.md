# CASE Expression

- here we study use of case expressions

```sql
ecommerce=# select fname, salary, CASE
ecommerce-# when salary>=60000 then 'high'
ecommerce-# when salary>=45000 then 'mid'
ecommerce-# else 'low'
ecommerce-# END as salary_cat
ecommerce-# from employees;
 fname  | salary | salary_cat
--------+--------+------------
 Raj    |  50000 | mid
 Priya  |  45000 | mid
 Arjun  |  55000 | mid
 Suman  |  60000 | high
 Kavita |  47000 | mid
 Amit   |  52000 | mid
 Neha   |  48000 | mid
 Rahul  |  53000 | mid
 Anjali |  61000 | high
 Rabin  | 120000 | high
 Anjal  | 500000 | high
(11 rows)

--lets calculate 10% bonus
ecommerce=# select emp_id,fname,CASE
ecommerce-# when salary>0 then ROUND(salary*0.1)
ecommerce-# end as Bonus
ecommerce-# from employees;
 emp_id | fname  | bonus
--------+--------+-------
      1 | Raj    |  5000
      2 | Priya  |  4500
      3 | Arjun  |  5500
      4 | Suman  |  6000
      5 | Kavita |  4700
      6 | Amit   |  5200
      7 | Neha   |  4800
      8 | Rahul  |  5300
      9 | Anjali |  6100
     11 | Rabin  | 12000
     10 | Anjal  | 50000
(11 rows)

--group by salary category
ecommerce=# select case
ecommerce-# when salary>80000 then 'high'
ecommerce-# when salary between 55000 and 80000 then 'mid'
ecommerce-# else 'low'
ecommerce-# end as sal_cat, COUNT(emp_id) from employees
ecommerce-# GROUP BY sal_cat;
 sal_cat | count
---------+-------
 high    |     2
 low     |     6
 mid     |     3
(3 rows)


```

---

# Relationship and its types:

- 1:1 (one to one)
- 1:many (one to many)
- many-many

## foreign key

- if we are using primary key of any table on another table it's a foreign key. it is used to make relationship.

---

# one to one relationship

lets create a new database for this example
Connect to PostgreSQL using psql
Open your terminal or command prompt and connect to the PostgreSQL server as a superuser (typically postgres):

```shell
psql -U postgres
```

Enter the password if prompted.

Create the database
Once connected, execute the CREATE DATABASE command followed by the desired database name:

```shell
CREATE DATABASE your_database_name; #i created a store_db
```

Replace your_database_name with the actual name (e.g., sales_db). Ensure the name is unique.

```sql
ecommerce=# create database store_db;
CREATE DATABASE
ecommerce=# \c store_db
You are now connected to database "store_db" as user "postgres".
store_db=#

store_db=# CREATE TABLE customers(
   cust_id SERIAL PRIMARY KEY,
   cust_name VARCHAR(100) NOT NULL
   );
CREATE TABLE

store_db=# CREATE TABLE orders(
   ord_id SERIAL PRIMARY KEY,
   ord_date DATE NOT NULL,
   price NUMERIC NOT NULL,
   cust_id INTEGER NOT NULL,
   FOREIGN KEY(cust_id) REFERENCES
   customers(cust_id)
   );
CREATE TABLE
store_db=#
store_db=# INSERT INTO customers(cust_name) VALUES('Anjal'),
store_db-# ('Diwash'),
store_db-# ('Sugam'),
store_db-# ('Rabin'),
store_db-# ('Jenish'),
store_db-# ('Suraj'),
store_db-# ('Sheela'),
store_db-# ('Ichcha');
INSERT 0 8

--i forgot to give ord_date a defaut value, setting default value again:--
store_db=# ALTER TABLE orders
store_db-# ALTER COLUMN ord_date
store_db-# SET DEFAULT CURRENT_DATE;
ALTER TABLE

--lets store data on orders now
store_db=# insert into orders
store_db-# (price, cust_id)
store_db-# values
store_db-# (399.99,1),(500,5),(100,2),(125,1),(599,4),(450,3);
INSERT 0 6

store_db=# select * from customers;
 cust_id | cust_name
---------+-----------
       1 | Anjal
       2 | Diwash
       3 | Sugam
       4 | Rabin
       5 | Jenish
       6 | Suraj
       7 | Sheela
       8 | Ichcha
(8 rows)


store_db=# select * from orders;
 ord_id |  ord_date  | price  | cust_id
--------+------------+--------+---------
      1 | 2026-01-17 | 399.99 |       1
      2 | 2026-01-17 |    500 |       5
      3 | 2026-01-17 |    100 |       2
      4 | 2026-01-17 |    125 |       1
      5 | 2026-01-17 |    599 |       4
      6 | 2026-01-17 |    450 |       3
(6 rows)

```

---

## JOINS

- **JOIN** operation is used to combine rows from two or more tables based on a related column between them.

### Types of Join

- **Cross Join** - **_every row from one table is combined with every row from another table._**
  - **_syntax:_**

```sql
SELECT * FROM customers CROSS JOIN orders;
```

```sql
--cross join--
store_db=# select * from customers cross join orders;
 cust_id | cust_name | ord_id |  ord_date  | price  | cust_id
---------+-----------+--------+------------+--------+---------
       1 | Anjal     |      1 | 2026-01-17 | 399.99 |       1
       2 | Diwash    |      1 | 2026-01-17 | 399.99 |       1
       3 | Sugam     |      1 | 2026-01-17 | 399.99 |       1
       4 | Rabin     |      1 | 2026-01-17 | 399.99 |       1
       5 | Jenish    |      1 | 2026-01-17 | 399.99 |       1
       6 | Suraj     |      1 | 2026-01-17 | 399.99 |       1
       7 | Sheela    |      1 | 2026-01-17 | 399.99 |       1
       8 | Ichcha    |      1 | 2026-01-17 | 399.99 |       1
       1 | Anjal     |      2 | 2026-01-17 |    500 |       5
       2 | Diwash    |      2 | 2026-01-17 |    500 |       5
       3 | Sugam     |      2 | 2026-01-17 |    500 |       5
       4 | Rabin     |      2 | 2026-01-17 |    500 |       5
       5 | Jenish    |      2 | 2026-01-17 |    500 |       5
       6 | Suraj     |      2 | 2026-01-17 |    500 |       5
       7 | Sheela    |      2 | 2026-01-17 |    500 |       5
       8 | Ichcha    |      2 | 2026-01-17 |    500 |       5
       1 | Anjal     |      3 | 2026-01-17 |    100 |       2
       2 | Diwash    |      3 | 2026-01-17 |    100 |       2
       3 | Sugam     |      3 | 2026-01-17 |    100 |       2
       4 | Rabin     |      3 | 2026-01-17 |    100 |       2
       5 | Jenish    |      3 | 2026-01-17 |    100 |       2
       6 | Suraj     |      3 | 2026-01-17 |    100 |       2
       7 | Sheela    |      3 | 2026-01-17 |    100 |       2
       8 | Ichcha    |      3 | 2026-01-17 |    100 |       2
       1 | Anjal     |      4 | 2026-01-17 |    125 |       1
       2 | Diwash    |      4 | 2026-01-17 |    125 |       1
       3 | Sugam     |      4 | 2026-01-17 |    125 |       1
       4 | Rabin     |      4 | 2026-01-17 |    125 |       1
       5 | Jenish    |      4 | 2026-01-17 |    125 |       1
       6 | Suraj     |      4 | 2026-01-17 |    125 |       1
       7 | Sheela    |      4 | 2026-01-17 |    125 |       1
       8 | Ichcha    |      4 | 2026-01-17 |    125 |       1
       1 | Anjal     |      5 | 2026-01-17 |    599 |       4
       2 | Diwash    |      5 | 2026-01-17 |    599 |       4
       3 | Sugam     |      5 | 2026-01-17 |    599 |       4
       4 | Rabin     |      5 | 2026-01-17 |    599 |       4
       5 | Jenish    |      5 | 2026-01-17 |    599 |       4
       6 | Suraj     |      5 | 2026-01-17 |    599 |       4
       7 | Sheela    |      5 | 2026-01-17 |    599 |       4
       8 | Ichcha    |      5 | 2026-01-17 |    599 |       4
       1 | Anjal     |      6 | 2026-01-17 |    450 |       3
       2 | Diwash    |      6 | 2026-01-17 |    450 |       3
       3 | Sugam     |      6 | 2026-01-17 |    450 |       3
       4 | Rabin     |      6 | 2026-01-17 |    450 |       3
       5 | Jenish    |      6 | 2026-01-17 |    450 |       3
       6 | Suraj     |      6 | 2026-01-17 |    450 |       3
       7 | Sheela    |      6 | 2026-01-17 |    450 |       3
       8 | Ichcha    |      6 | 2026-01-17 |    450 |       3
(48 rows)

--not useful, you can notice by results---

```

- **Inner Join** - **_Returns only the rows where there is a match between the specified columns in both the left(or first) and right(or second) tables._**
  - **_syntax:_**

```sql
    SELECT * FROM customers c
    INNER JOIN
    orders o
    ON c.cust_id=o.cust_id;
```

```sql
store_db=# select * from customers c
store_db-# inner join orders o
store_db-# on c.cust_id=o.cust_id;
 cust_id | cust_name | ord_id |  ord_date  | price  | cust_id
---------+-----------+--------+------------+--------+---------
       1 | Anjal     |      1 | 2026-01-17 | 399.99 |       1
       5 | Jenish    |      2 | 2026-01-17 |    500 |       5
       2 | Diwash    |      3 | 2026-01-17 |    100 |       2
       1 | Anjal     |      4 | 2026-01-17 |    125 |       1
       4 | Rabin     |      5 | 2026-01-17 |    599 |       4
       3 | Sugam     |      6 | 2026-01-17 |    450 |       3
(6 rows)

--it doesnot shows the users who didn't placed orders as it only shows column where match happens;

--lets group by customer name as it is showing double data of same customers,
store_db=# SELECT c.cust_name, COUNT(o.ord_id), SUM(o.price) FROM customers c
store_db-# inner join
store_db-# orders o
store_db-# on c.cust_id = o.cust_id
store_db-# GROUP BY cust_name;
 cust_name | count |  sum
-----------+-------+--------
 Rabin     |     1 |    599
 Jenish    |     1 |    500
 Anjal     |     2 | 524.99
 Sugam     |     1 |    450
 Diwash    |     1 |    100
(5 rows)
```

- **Left Join**:
  - **_Returns all rows from the left (or first) table and the matching rows from the right(or second) table._**
  - syntax:

```sql
    SELECT * FROM customers c
    LEFT JOIN
    orders o
    ON c.cust_id=o.cust_id;
```

```sql
store_db=# select * from customers
store_db-# c
store_db-# left join orders o
store_db-# on c.cust_id = o.cust_id;
 cust_id | cust_name | ord_id |  ord_date  | price  | cust_id
---------+-----------+--------+------------+--------+---------
       1 | Anjal     |      1 | 2026-01-17 | 399.99 |       1
       5 | Jenish    |      2 | 2026-01-17 |    500 |       5
       2 | Diwash    |      3 | 2026-01-17 |    100 |       2
       1 | Anjal     |      4 | 2026-01-17 |    125 |       1
       4 | Rabin     |      5 | 2026-01-17 |    599 |       4
       3 | Sugam     |      6 | 2026-01-17 |    450 |       3
       8 | Ichcha    |        |            |        |
       6 | Suraj     |        |            |        |
       7 | Sheela    |        |            |        |
(9 rows)

--grouping them by customer name:
store_db=# select c.cust_name, COUNT(o.ord_id) as no_of_orders, sum(o.price)
store_db-# from customers c
store_db-# left join orders o
store_db-# on c.cust_id= o.cust_id
store_db-# group by c.cust_name;
 cust_name | no_of_orders |  sum
-----------+--------------+--------
 Suraj     |            0 |
 Ichcha    |            0 |
 Rabin     |            1 |    599
 Jenish    |            1 |    500
 Sheela    |            0 |
 Anjal     |            2 | 524.99
 Sugam     |            1 |    450
 Diwash    |            1 |    100
(8 rows)

```

- **Right Join**:
  - **_same as left join but shows second table all data and first table matching data_**
  - syntax: <!-- same as left join just write right in place of left-->

```sql
select * from customers c
right join orders o
on c.cust_id = o.cust_id;

--output--
 cust_id | cust_name | ord_id |  ord_date  | price  | cust_id
---------+-----------+--------+------------+--------+---------
       1 | Anjal     |      1 | 2026-01-17 | 399.99 |       1
       5 | Jenish    |      2 | 2026-01-17 |    500 |       5
       2 | Diwash    |      3 | 2026-01-17 |    100 |       2
       1 | Anjal     |      4 | 2026-01-17 |    125 |       1
       4 | Rabin     |      5 | 2026-01-17 |    599 |       4
       3 | Sugam     |      6 | 2026-01-17 |    450 |       3
(6 rows)
```

---

# one to many relationship

- TASK: we have two table students and courses and we need to make many to many relationship.
  - to make many to many relationship we need to create a third table like student_course so data doesnot repeat.

lets create a new database to show this -> db name : institute;

<!-- i show this here as it is already shown above in one to one relationship section. -->

```sql
--step 1 lets create our 3 tables first--
institute=# CREATE TABLE students(
institute(# s_id SERIAL PRIMARY KEY,
institute(# name VARCHAR(100) NOT NULL);
CREATE TABLE
institute=# CREATE TABLE courses(
institute(# c_id SERIAL PRIMARY KEY,
institute(# name VARCHAR(100) NOT NULL,
institute(# fee NUMERIC NOT NULL DEFAULT 425000
institute(# );
CREATE TABLE
institute=# CREATE TABLE enrollment(
institute(# e_id SERIAL PRIMARY KEY,
institute(# s_id INT NOT NULL,
institute(# c_id INT NOT NULL,
institute(# en_date DATE NOT NULL DEFAULT CURRENT_DATE,
institute(# FOREIGN KEY(s_id) REFERENCES students(s_id),
institute(# FOREIGN KEY(c_id) REFERENCES courses(c_id) );
CREATE TABLE
--step 2--inserting data--
institute=#
insert into students (name) values('Diwash'),('Anjal'),('Jenish');
INSERT 0 3
institute=#
insert into courses(name, fee) values('CSIT',1000000),('NURSING', 1200000), ('MBBS', 700000);
INSERT 0 3
institute=#
INSERT INTO enrollment (s_id,c_id,en_date) values(1,1,'2021-12-06'), (2,2,'2022-06-22'),(3,3,'2023-08-18'); --enrollment data
INSERT 0 3
institute=#
insert into enrollment (s_id,c_id,en_date)
values (1,2,'2026-01-12'), (2,1,'2026-01-18'),(3,1,'2026-01-13');
--i created enrollment again to create many to many relationship
INSERT 0 3

--step 3-- lets do the db operations now--

institute=# select * from enrollment e join students s on e.s_id=s.s_id join courses c on c.c_id=e.c_id;
 e_id | s_id | c_id |  en_date   | s_id |  name  | c_id |  name   |   fee   ------+------+------+------------+------+--------+------+---------+---------    1 |    1 |    1 | 2021-12-06 |    1 | Diwash |    1 | CSIT    | 1000000
    2 |    2 |    2 | 2022-06-22 |    2 | Anjal  |    2 | NURSING | 1200000
    3 |    3 |    3 | 2023-08-18 |    3 | Jenish |    3 | MBBS    |  700000
    4 |    1 |    2 | 2026-01-12 |    1 | Diwash |    2 | NURSING | 1200000
    5 |    2 |    1 | 2026-01-18 |    2 | Anjal  |    1 | CSIT    | 1000000
    6 |    3 |    1 | 2026-01-13 |    3 | Jenish |    1 | CSIT    | 1000000
(6 rows)

--lets select what is important for us--
institute=# select s.name,c.name,c.fee from enrollment e join students s on e.s_id=s.s_id join courses c on c.c_id=e.c_id;
  name  |  name   |   fee
--------+---------+---------
 Diwash | CSIT    | 1000000
 Anjal  | NURSING | 1200000
 Jenish | MBBS    |  700000
 Diwash | NURSING | 1200000
 Anjal  | CSIT    | 1000000
 Jenish | CSIT    | 1000000
(6 rows)

```
