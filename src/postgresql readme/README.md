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
INSERT INTO employees(fname, lname, email, dept, salary) VALUES('Anjal', 'Luitel', 'anjal.luitel@outlook.com', 'HR', '500000');


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
      eg:  - select * from employees where id=4;
- logical operators: 
    - AND 
    - OR
    - NOT

- IN and NOT IN 
    - eg: select * from employees where dept in IT; // selects all data of dept in it 
    - eg: select * from employees where dept not in IT; // selects all data of dept not in it
- selecting a column: 
      -  SELECT dept from employees; // selects all department even shows duplicates.
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