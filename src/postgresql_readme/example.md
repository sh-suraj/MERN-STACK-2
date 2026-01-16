### PostgreSQL

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
