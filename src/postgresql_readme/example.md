# PostgreSQL Practice Examples (psql Output)

This file contains **raw PostgreSQL practice commands and outputs**
executed inside the `ecommerce` database using the `psql` terminal.

📌 These examples are intentionally kept **unfiltered** to reflect
real database interaction during learning.

---

## 🔗 Related Notes

- 📘 [Beginner SQL Notes](./postgresql-beginner-notes.md)
- 🎯 [Interview-Ready SQL Notes](./postgresql-interview-notes.md)

> 👉 If you are learning PostgreSQL, start with **Beginner Notes**  
> 👉 If you are revising for interviews, read **Interview Notes**  
> 👉 Use this file for **hands-on reference**

---

### creating a table on database ecommerce

```bash
psql (16.1)
Type "help" for help.
psql -U postgres -d ecommerce

```

```sql
ecommerce=# CREATE TABLE employees(
ecommerce(# emp_id SERIAL PRIMARY KEY,
ecommerce(# fname VARCHAR(50) NOT NULL,
ecommerce(# lname VARCHAR(50) NOT NULL,
ecommerce(# email VARCHAR(32) NOT NULL UNIQUE ,
ecommerce(# dept VARCHAR(16) NOT NULL DEFAULT  'Marketing',
ecommerce(# salary INT NOT NULL DEFAULT '30000',
ecommerce(# hire_date date NOT NULL DEFAULT  CURRENT_DATE);


----------------------------------------------------------------------------------------------------------------------------------------------

ecommerce=# INSERT INTO employees(fname, lname, email, dept, salary) VALUES('Raj', 'Sharma', 'raj.sharma@outlook.com', 'IT', '50000');

ecommerce=# INSERT INTO employees(fname, lname, email, dept, salary) VALUES('Priya', 'Singh', 'priya.singh@outlook.com', 'HR', '45000');

.
.
.
INSERT INTO employees(fname, lname, email, dept, salary) VALUES('Anjal', 'Luitel', 'anjal.luitel@outlook.com', 'General Manager', '500000');


ecommerce=# SELECT * FROM employees;
 emp_id | fname  | lname  |           email           |   dept    | salary | hire_date
--------+--------+--------+---------------------------+-----------+--------+------------
      1 | Raj    | Sharma | raj.sharma@outlook.com    | IT        |  50000 | 2026-01-16
      2 | Priya  | Singh  | priya.singh@outlook.com   | HR        |  45000 | 2026-01-16
      3 | Arjun  | Verma  | arjun.verma@gmail.com     | IT        |  55000 | 2026-01-16
      4 | Suman  | Patel  | Suman.patel@gmail.com     | Finance   |  60000 | 2026-01-16
      5 | Kavita | Rao    | kavita.rao@email.com      | HR        |  47000 | 2026-01-16
      6 | Amit   | Gupta  | amit.gupta@outlook.com    | Marketing |  52000 | 2026-01-16
      7 | Neha   | Desai  | neha.desai@outlook.com    | IT        |  48000 | 2026-01-16
      8 | Rahul  | Kumar  | rahul.kumar@outlook.com   | IT        |  53000 | 2026-01-16
      9 | Anjali | Meheta | anjali.meheta@outlook.com | Finance   |  61000 | 2026-01-16
     10 | Anjal  | Luitel | anjal.luitel@outlook.com  | Manager   | 500000 | 2026-01-16
```

---

### clauses:

- where
  eg: - select \* from employees where id=4;
- logical operators:

  - AND
  - OR
  - NOT

- IN and NOT IN
  - eg: select \* from employees where dept in IT; // selects all data of dept in it
  - eg: select \* from employees where dept not in IT; // selects all data of dept not in it
- selecting a column:
  - SELECT dept from employees; // selects all department even shows duplicates.
  - SELECT DISTINCT dept from employees; // selects all department without duplicates.

```sql
    SELECT * FROM employees
    WHERE dept='finance' AND dept='IT'
    ecommerce=# select * from employees where dept in('IT','HR');
 emp_id | fname  | lname  |          email           | dept | salary  | hire_date
--------+--------+--------+--------------------------+------+---------+------------
      1 | Raj    | Sharma | raj.sharma@outlook.com   | IT   |   50000 | 2026-01-16
      2 | Priya  | Singh  | priya.singh@outlook.com  | HR   |   45000 | 2026-01-16
      3 | Arjun  | Verma  | arjun.verma@gmail.com    | IT   |   55000 | 2026-01-16
      5 | Kavita | Rao    | kavita.rao@email.com     | HR   |   47000 | 2026-01-16
      7 | Neha   | Desai  | neha.desai@outlook.com   | IT   |   48000 | 2026-01-16
      8 | Rahul  | Kumar  | rahul.kumar@outlook.com  | IT   |   53000 | 2026-01-16
(6 rows)


ecommerce=# select * from employees where dept not in('IT','HR');
 emp_id | fname  | lname  |           email           |   dept    | salary | hire_date
--------+--------+--------+---------------------------+-----------+--------+------------
      4 | Suman  | Patel  | Suman.patel@gmail.com     | Finance   |  60000 | 2026-01-16
      6 | Amit   | Gupta  | amit.gupta@outlook.com    | Marketing |  52000 | 2026-01-16
      9 | Anjali | Meheta | anjali.meheta@outlook.com | Finance   |  61000 | 2026-01-16
     10 | Anjal  | Luitel | anjal.luitel@outlook.com  | Manager   | 500000 | 2026-01-16
     11 | Rabin  | Dahal  | rabin.dahal@outlook.com   | Manager   | 120000 | 2026-01-16
(5 rows)

ecommerce=# select * from employees WHERE salary BETWEEN 40000 AND 60000;
 emp_id | fname  | lname  |          email          |   dept    | salary | hire_date
--------+--------+--------+-------------------------+-----------+--------+------------
      1 | Raj    | Sharma | raj.sharma@outlook.com  | IT        |  50000 | 2026-01-16
      2 | Priya  | Singh  | priya.singh@outlook.com | HR        |  45000 | 2026-01-16
      3 | Arjun  | Verma  | arjun.verma@gmail.com   | IT        |  55000 | 2026-01-16
      4 | Suman  | Patel  | Suman.patel@gmail.com   | Finance   |  60000 | 2026-01-16
      5 | Kavita | Rao    | kavita.rao@email.com    | HR        |  47000 | 2026-01-16
      6 | Amit   | Gupta  | amit.gupta@outlook.com  | Marketing |  52000 | 2026-01-16
      7 | Neha   | Desai  | neha.desai@outlook.com  | IT        |  48000 | 2026-01-16
      8 | Rahul  | Kumar  | rahul.kumar@outlook.com | IT        |  53000 | 2026-01-16
(8 rows)

ecommerce=# select dept from employees
ecommerce-# ;
   dept
-----------
 IT
 HR
 IT
 Finance
 HR
 Marketing
 IT
 IT
 Finance
 Manager
 Manager
(11 rows)


ecommerce=# select distinct dept from employees;
   dept
-----------
 Marketing
 Finance
 Manager
 IT
 HR
(5 rows)
```

**_sorting the data_**

- **ORDER BY** - it is by default ascending if you want in descending order use DESC at last! eg:

```Sql
             SELECT * FROM employees ORDER BY fname DESC;
```

**CLAUSE: LIMIT**

```sql
    SELECT * FROM employees LIMIT 3;
```

**_ CLAUSE: LIKE _**

```sql
 --shows data starting from name A --
    SELECT * FROM employees WHERE fname LIKE 'A%';
    --shows data starting from name a --
    SELECT * FROM employees WHERE fname LIKE '%a'; --case sensitive and doesnot works if you do '%A' -

    --find the fnames which has i in between them--
    SELECT * FROM employees WHERE fname like '%i%';

    -- searching data having two characters in dept --
    SELECT * FROM employees WHERE dept like '__';--uses two underscores--

    -- fname starting with any character but having second character 'i' --
    SELECT * FROM employees WHERE fname like '_n%';
```

```sql
ecommerce=#  SELECT * FROM employees ORDER BY fname;
 emp_id | fname  | lname  |           email           |      dept       | salary  | hire_date
--------+--------+--------+---------------------------+-----------------+---------+------------
      6 | Amit   | Gupta  | amit.gupta@outlook.com    | Marketing       |   52000 | 2026-01-16
     10 | Anjal  | Luitel | anjal.luitel@outlook.com  | General Manager |  500000 | 2026-01-16
      9 | Anjali | Meheta | anjali.meheta@outlook.com | Finance         |   61000 | 2026-01-16
      3 | Arjun  | Verma  | arjun.verma@gmail.com     | IT              |   55000 | 2026-01-16
      5 | Kavita | Rao    | kavita.rao@email.com      | HR              |   47000 | 2026-01-16
      7 | Neha   | Desai  | neha.desai@outlook.com    | IT              |   48000 | 2026-01-16
      2 | Priya  | Singh  | priya.singh@outlook.com   | HR              |   45000 | 2026-01-16
     11 | Rabin  | Dahal  | rabin.dahal@outlook.com   | Manager         |  120000 | 2026-01-16
      8 | Rahul  | Kumar  | rahul.kumar@outlook.com   | IT              |   53000 | 2026-01-16
      1 | Raj    | Sharma | raj.sharma@outlook.com    | IT              |   50000 | 2026-01-16
      4 | Suman  | Patel  | Suman.patel@gmail.com     | Finance         |   60000 | 2026-01-16
(11 rows)



ecommerce=#  SELECT * FROM employees ORDER BY fname DESC;
 emp_id | fname  | lname  |           email           |      dept       | salary  | hire_date
--------+--------+--------+---------------------------+-----------------+---------+------------
      4 | Suman  | Patel  | Suman.patel@gmail.com     | Finance         |   60000 | 2026-01-16
      1 | Raj    | Sharma | raj.sharma@outlook.com    | IT              |   50000 | 2026-01-16
      8 | Rahul  | Kumar  | rahul.kumar@outlook.com   | IT              |   53000 | 2026-01-16
     11 | Rabin  | Dahal  | rabin.dahal@outlook.com   | Manager         |  120000 | 2026-01-16
      2 | Priya  | Singh  | priya.singh@outlook.com   | HR              |   45000 | 2026-01-16
      7 | Neha   | Desai  | neha.desai@outlook.com    | IT              |   48000 | 2026-01-16
      5 | Kavita | Rao    | kavita.rao@email.com      | HR              |   47000 | 2026-01-16
      3 | Arjun  | Verma  | arjun.verma@gmail.com     | IT              |   55000 | 2026-01-16
      9 | Anjali | Meheta | anjali.meheta@outlook.com | Finance         |   61000 | 2026-01-16
     10 | Anjal  | Luitel | anjal.luitel@outlook.com  | General Manager |  500000 | 2026-01-16
      6 | Amit   | Gupta  | amit.gupta@outlook.com    | Marketing       |   52000 | 2026-01-16
(11 rows)


ecommerce=# SELECT * FROM employees LIMIT 3;
 emp_id | fname | lname  |          email          | dept | salary | hire_date
--------+-------+--------+-------------------------+------+--------+------------
      1 | Raj   | Sharma | raj.sharma@outlook.com  | IT   |  50000 | 2026-01-16
      2 | Priya | Singh  | priya.singh@outlook.com | HR   |  45000 | 2026-01-16
      3 | Arjun | Verma  | arjun.verma@gmail.com   | IT   |  55000 | 2026-01-16
(3 rows)


ecommerce=# SELECT * FROM employees WHERE fname like 'A%';
 emp_id | fname  | lname  |           email           |      dept       | salary | hire_date
--------+--------+--------+---------------------------+-----------------+--------+------------
      3 | Arjun  | Verma  | arjun.verma@gmail.com     | IT              |  55000 | 2026-01-16
      6 | Amit   | Gupta  | amit.gupta@outlook.com    | Marketing       |  52000 | 2026-01-16
      9 | Anjali | Meheta | anjali.meheta@outlook.com | Finance         |  61000 | 2026-01-16
     10 | Anjal  | Luitel | anjal.luitel@outlook.com  | General Manager | 500000 | 2026-01-16
(4 rows)

 SELECT * FROM employees WHERE fname like '%a';
 emp_id | fname  | lname |          email          | dept | salary | hire_date
--------+--------+-------+-------------------------+------+--------+------------
      2 | Priya  | Singh | priya.singh@outlook.com | HR   |  45000 | 2026-01-16
      5 | Kavita | Rao   | kavita.rao@email.com    | HR   |  47000 | 2026-01-16
      7 | Neha   | Desai | neha.desai@outlook.com  | IT   |  48000 | 2026-01-16
(3 rows)


ecommerce=# SELECT * FROM employees WHERE fname like '%i%';
 emp_id | fname  | lname  |           email           |   dept    | salary | hire_date
--------+--------+--------+---------------------------+-----------+--------+------------
      2 | Priya  | Singh  | priya.singh@outlook.com   | HR        |  45000 | 2026-01-16
      5 | Kavita | Rao    | kavita.rao@email.com      | HR        |  47000 | 2026-01-16
      6 | Amit   | Gupta  | amit.gupta@outlook.com    | Marketing |  52000 | 2026-01-16
      9 | Anjali | Meheta | anjali.meheta@outlook.com | Finance   |  61000 | 2026-01-16
     11 | Rabin  | Dahal  | rabin.dahal@outlook.com   | Manager   | 120000 | 2026-01-16
(5 rows)

ecommerce=# SELECT * FROM employees WHERE dept like '__';
 emp_id | fname  | lname  |          email          | dept | salary | hire_date  --------+--------+--------+-------------------------+------+--------+------------      1 | Raj    | Sharma | raj.sharma@outlook.com  | IT   |  50000 | 2026-01-16
      2 | Priya  | Singh  | priya.singh@outlook.com | HR   |  45000 | 2026-01-16
      3 | Arjun  | Verma  | arjun.verma@gmail.com   | IT   |  55000 | 2026-01-16
      5 | Kavita | Rao    | kavita.rao@email.com    | HR   |  47000 | 2026-01-16
      7 | Neha   | Desai  | neha.desai@outlook.com  | IT   |  48000 | 2026-01-16
      8 | Rahul  | Kumar  | rahul.kumar@outlook.com | IT   |  53000 | 2026-01-16
(6 rows)

ecommerce=# SELECT * FROM employees WHERE fname like '_n%';
 emp_id | fname  | lname  |           email           |      dept       | salary | hire_date
--------+--------+--------+---------------------------+-----------------+--------+------------
      9 | Anjali | Meheta | anjali.meheta@outlook.com | Finance         |  61000 | 2026-01-16
     10 | Anjal  | Luitel | anjal.luitel@outlook.com  | General Manager | 500000 | 2026-01-16
(2 rows)

```

---

### Aggregate Functions - Count, Min, Max, Avg, etc.

```sql

--count--
ecommerce=# SELECT COUNT(emp_id) FROM employees;
 count
-------
    11
(1 row)

--sum--
ecommerce=# SELECT SUM(salary) FROM employees;
   sum
---------
 1091000
(1 row)

---average---
ecommerce=# SELECT AVG(salary) FROM employees;
        avg
--------------------
 99181.818181818182
(1 row)

---MINIMUM-------MAXIMUM---
ecommerce=# SELECT MIN(salary) FROM employees;
  min
-------
 45000
(1 row)


ecommerce=# SELECT MAX(salary) FROM employees;
  max
--------
 500000
(1 row)

```

---

### GROUP BY

```sql

ecommerce=# SELECT dept FROM employees GROUP BY dept;
      dept
-----------------
 Marketing
 Finance
 Manager
 General Manager
 IT
 HR
(6 rows)

ecommerce=# SELECT dept,COUNT(emp_id) FROM employees GROUP BY dept;
      dept       | count
-----------------+-------
 Marketing       |     1
 Finance         |     2
 Manager         |     1
 General Manager |     1
 IT              |     4
 HR              |     2
(6 rows)

ecommerce=# SELECT dept,SUM(salary) FROM employees GROUP BY dept;
      dept       |  sum
-----------------+--------
 Marketing       |  52000
 Finance         | 121000
 Manager         | 120000
 General Manager | 500000
 IT              | 206000
 HR              |  92000
(6 rows)
```

---

### String Operations:

- CONCAT, CONCAT_WS
- SUBSTR
- LEFT, RIGHT
- UPPER, LOWER
- TRIM, LTRIM, RTRIM
- REPLACE
- POSITION
- STRING_AGG

**_CONCAT , CONCAT_WS_**

```sql
ecommerce=# SELECT CONCAT(fname, lname) FROM employees;
    concat
--------------
 RajSharma
 PriyaSingh
 ArjunVerma
 SumanPatel
 KavitaRao
 AmitGupta
 NehaDesai
 RahulKumar
 AnjaliMeheta
 RabinDahal
 AnjalLuitel
(11 rows)

ecommerce=# SELECT emp_id, CONCAT(fname, lname) AS Fullname, dept FROM employees;
 emp_id |   fullname   |      dept
--------+--------------+-----------------
      1 | RajSharma    | IT
      2 | PriyaSingh   | HR
      3 | ArjunVerma   | IT
      4 | SumanPatel   | Finance
      5 | KavitaRao    | HR
      6 | AmitGupta    | Marketing
      7 | NehaDesai    | IT
      8 | RahulKumar   | IT
      9 | AnjaliMeheta | Finance
     11 | RabinDahal   | Manager
     10 | AnjalLuitel  | General Manager
(11 rows)



ecommerce=# SELECT emp_id, CONCAT_WS('-',fname, lname) AS Fullname, dept FROM employees;
 emp_id |   fullname    |      dept
--------+---------------+-----------------
      1 | Raj-Sharma    | IT
      2 | Priya-Singh   | HR
      3 | Arjun-Verma   | IT
      4 | Suman-Patel   | Finance
      5 | Kavita-Rao    | HR
      6 | Amit-Gupta    | Marketing
      7 | Neha-Desai    | IT
      8 | Rahul-Kumar   | IT
      9 | Anjali-Meheta | Finance
     11 | Rabin-Dahal   | Manager
     10 | Anjal-Luitel  | General Manager
(11 rows)


ecommerce=# SELECT emp_id, CONCAT_WS(' ',fname, lname) AS Fullname, dept FROM employees;
 emp_id |   fullname    |      dept
--------+---------------+-----------------
      1 | Raj Sharma    | IT
      2 | Priya Singh   | HR
      3 | Arjun Verma   | IT
      4 | Suman Patel   | Finance
      5 | Kavita Rao    | HR
      6 | Amit Gupta    | Marketing
      7 | Neha Desai    | IT
      8 | Rahul Kumar   | IT
      9 | Anjali Meheta | Finance
     11 | Rabin Dahal   | Manager
     10 | Anjal Luitel  | General Manager
(11 rows)

```

---

**_substr, replace_**

**Syntax: select substr(string/column_name, start_index, end_index);**

```sql
ecommerce=# SELECT SUBSTR(fname, 1,3) FROM employees;
 substr
--------
 Raj
 Pri
 Arj
 Sum
 Kav
 Ami
 Neh
 Rah
 Anj
 Rab
 Anj
(11 rows)


ecommerce=# SELECT REPLACE('hello world','hello','*uck');
  replace
------------
 *uck world
(1 row)

```

---

**_Reverse & Length_**

```sql
select REVERSE('hello');
 reverse
---------
 olleh
(1 row)

select LENGTH('hello');
 length
--------
      5
(1 row)

ecommerce=# select * from employees WHERE LENGTH(fname)>5;
 emp_id | fname  | lname  |           email           |  dept   | salary | hire_date
--------+--------+--------+---------------------------+---------+--------+------------
      5 | Kavita | Rao    | kavita.rao@email.com      | HR      |  47000 | 2026-01-16
      9 | Anjali | Meheta | anjali.meheta@outlook.com | Finance |  61000 | 2026-01-16
(2 rows)
```

---

**_upper and lower, left & right, trim and position_**

```sql
--UPPER PRINTS ALL THE CHARACTERS IN UPPER CASE--
ecommerce=# SELECT UPPER(fname) FROM employees LIMIT 3;
 upper
-------
 RAJ
 PRIYA
 ARJUN
(3 rows)

--LOWER PRINTS THE SELECTED COLUMN IN LOWER CASE--
ecommerce=# SELECT LOWER(fname) FROM employees LIMIT 3;
 lower
-------
 raj
 priya
 arjun
(3 rows)

--LEFT IS USED TO PRINT ANY NO. OF CHARACTERS FROM THE LEFT --
ecommerce=# SELECT LEFT(fname, 3) FROM employees LIMIT 3;
 left
------
 Raj
 Pri  --THE NAME WAS PRIYA--
 Arj  --THE NAME WAS ARJUN--
(3 rows)

--RIGHT IS USED TO PRINT ANY NO. OF CHARACTERS FROM THE RIGHT --
ecommerce=# SELECT RIGHT(fname, 3) FROM employees LIMIT 3;
 right
-------
 Raj
 iya  --THE NAME WAS PRIYA--
 jun  --THE NAME WAS ARJUN--
(3 rows)

--TRIM IS USED TO TRIM SPACE FROM LEFT AND RIGHT--
ecommerce=# SELECT LENGTH(TRIM('    ALRIGHT     '));
 length
--------
      7
(1 row)

--position: shows the position of substring inside the string.--
--task: select position ('om' in 'thomas');--
ecommerce=# select position ('om' in 'thomas');
 position
----------
        3
(1 row)
```

---

### Task1:

      - 1:Raj:sharma:IT

```sql
ecommerce=# select concat_ws(':',emp_id,fname,lname,dept)from employees where emp_id=1;
    concat_ws
-----------------
 1:Raj:Sharma:IT
(1 row)
```

### TASK2:

      - 1:Raj Sharma:IT:50000

```sql

ecommerce=# select concat_ws(':',emp_id,concat_ws(' ',fname,lname),dept,salary)from employees where emp_id=1;
       concat_ws
-----------------------
 1:Raj Sharma:IT:50000
(1 row)
```

### TASK 3:

      - 4:Suman:FINANCE

```sql
ecommerce=# select * from employees where fname='Suman';
 emp_id | fname | lname |         email         |  dept   | salary | hire_date
--------+-------+-------+-----------------------+---------+--------+------------
4 | Suman | Patel | Suman.patel@gmail.com | Finance |  60000 | 2026-01-16
(1 row)

ecommerce=# select concat_ws(':', fname, upper(dept)) from employees where emp_id=4;
   concat_ws
---------------
 Suman:FINANCE
(1 row)
```

### TASK 4:

      - I1 Raju
      - H2 Priya

```sql
ecommerce=# select concat(substr(dept,1,1),concat_ws(' ',emp_id,fname)) from employees limit 2;
  concat
----------
 I1 Raj
 H2 Priya
(2 rows)

```

### TASK 5: find all the employees having highest salary;

- we can do this using sub query:

```sql
--can be done for lowest too; it is better than using order by desc and last name--


SELECT * FROM employees
WHERE
salary = ( SELECT MAX(salary) from employees);

 emp_id | fname | lname  |          email           |      dept       | salary | hire_date
--------+-------+--------+--------------------------+-----------------+--------+------------
     10 | Anjal | Luitel | anjal.luitel@outlook.com | General Manager | 500000 | 2026-01-16
(1 row)
```

---

## Alter Queries

### Alter Table

**_syntax:_**

```sql
--add column--
ALTER TABLE <table-name>
ADD COLUMN <new-column-name> <data-type>;
-- delete column--
ALTER TABLE <table-name>
DROP COLUMN <column-name>;
--rename column--
ALTER TABLE <table-name>
RENAME COLUMN <column-name> to <new-name>;
```

## ------------Example -------------

```sql
ecommerce=# select * from userdata;
 id |   name    |  role
----+-----------+--------
  1 | sushant   | buyer
  2 | Ram       | seller
  3 | shyaam    | seller
  4 | hari      | admin
  6 | suarj     | admin
  5 | chhyosang | buyer
  7 | Diwash    | buyer

ecommerce=# ALTER TABLE userdata
ecommerce-# ADD COLUMN age INT;
ALTER TABLE
ecommerce=# select * from userdata limit 1;
 id |   name    |  role  | age
----+-----------+--------+-----
  1 | sushant   | buyer  |
(1 row)

--to delete column--
ecommerce=# alter table userdata Drop column age;
ALTER TABLE
ecommerce=# select * from userdata limit 1;
 id |   name    |  role
----+-----------+--------
  1 | sushant   | buyer
(1 row)

--rename column example--
alter table userdata ADD column age INT NOT NULL DEFAULT 0;
ALTER TABLE
alter table userdata rename column age to contacts;
ALTER TABLE
ecommerce=# select * from userdata limit 1;
 id |   name    |  role  | contacts
----+-----------+--------+----------
  1 | sushant   | buyer  |        0
(1 row)

--rename table--
ecommerce=# alter table userdata rename to users;
ALTER TABLE
ecommerce=# select * from users limit 1;
 id |  name   | role  | contacts
----+---------+-------+----------
  1 | sushant | buyer |        0
(1 row)

-- to change data type / increase string capacity--
ALTER TABLE users
alter column contacts
set data type varchar(20);

alter table users
alter column contacts
set default 'unknown';

ecommerce=# \d users
                                      Table "public.users"
  Column  |         Type          | Collation | Nullable |               Default
----------+-----------------------+-----------+----------+--------------------------------------
 id       | integer               |           | not null | nextval('userdata_id_seq'::regclass)
 name     | character varying(50) |           |          |
 role     | character varying(7)  |           |          | 'buyer'::character varying
 contacts | character varying(20) |           | not null | 'unknown'::character varying
Indexes:
    "userdata_pkey" PRIMARY KEY, btree (id)


```

---

**update & delete query:**

```sql
ecommerce=# update users
ecommerce-# set contacts = '+977 9815186669'
ecommerce-# where id= 1;
UPDATE 1
ecommerce=# select * from users where id=1;
 id |  name   | role  |    contacts
----+---------+-------+-----------------
  1 | sushant | buyer | +977 9815186669
(1 row)

SQL cannot “delete a value”; it can only update it to NULL or another value.

update users set contacts = null where id =1;
--this will set value to null--
update users set contacts = '0' where id =1;
--sets to another value--
--delete query deletes the entire row of database;
DELETE FROM users where id =1; -- not recomemded
--deletes entire row having id=1;
```

### check constraints:

```sql
alter table users
add column mobile varchar(15) unique check(length(mobile)>=10);


ecommerce=# \d users
                                     Table "public.users"
 Column |         Type          | Collation | Nullable |               Default
--------+-----------------------+-----------+----------+--------------------------------------
 id     | integer               |           | not null | nextval('userdata_id_seq'::regclass)
 name   | character varying(50) |           |          |
 role   | character varying(7)  |           |          | 'buyer'::character varying
 mobile | character varying(15) |           |          |
Indexes:
    "userdata_pkey" PRIMARY KEY, btree (id)
    "users_mobile_key" UNIQUE CONSTRAINT, btree (mobile)
Check constraints:
    "users_mobile_check" CHECK (length(mobile::text) >= 10) --check constraint we added--


--checking if check is working--
ecommerce=# insert into users(mobile) values(123456789);
ERROR:  new row for relation "users" violates check constraint "users_mobile_check"
DETAIL:  Failing row contains (8, null, buyer, 123456789).

---Delete added constraint using Drop
alter table users
drop constraint users_mobile_check;

```

```sql
---ADD added constraint using ADD

alter table users
add constraint users_mobile_check CHECK (length(mobile::text) >= 10);
--here users_mobile_check is a named constraint
```
