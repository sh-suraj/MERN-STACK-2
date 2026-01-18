# STORED ROUTINES

- an sql statement or set of sql statement that can be stored on database server which can be call no. of times.
- it is of two types - stored procedures. - user defined functions.

## 1. STORED PROCEDURES

syntax:

```SQL
CREATE OR REPLACE PROCEDURE <procedure_name> (<parameter_name> <parameter_type>, ...)
LANGUAGE plpgsql
AS $$
BEGIN
-- PROCEDURAL CODE HERE
END;
$$;
```

example:

```sql
CREATE OR REPLACE PROCEDURE update_emp_salary(
p_employee_id INT,
p_new_salary NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
UPDATE employees
SET salary = p_new_salary
WHERE emp_id = p_employee_id;
END;
$$;

CALL update_emp_salary(3,71000);
ecommerce=# select * from employees;
 emp_id | fname  | lname  |           email           |      dept       | salary | hire_date
--------+--------+--------+---------------------------+-----------------+--------+------------
      2 | Priya  | Singh  | priya.singh@outlook.com   | HR              |  45000 | 2026-01-16
      4 | Suman  | Patel  | Suman.patel@gmail.com     | Finance         |  60000 | 2026-01-16
      5 | Kavita | Rao    | kavita.rao@email.com      | HR              |  47000 | 2026-01-16
      6 | Amit   | Gupta  | amit.gupta@outlook.com    | Marketing       |  52000 | 2026-01-16
      7 | Neha   | Desai  | neha.desai@outlook.com    | IT              |  48000 | 2026-01-16
      8 | Rahul  | Kumar  | rahul.kumar@outlook.com   | IT              |  53000 | 2026-01-16
      9 | Anjali | Meheta | anjali.meheta@outlook.com | Finance         |  61000 | 2026-01-16
     11 | Rabin  | Dahal  | rabin.dahal@outlook.com   | Manager         | 120000 | 2026-01-16
     10 | Anjal  | Luitel | anjal.luitel@outlook.com  | General Manager | 500000 | 2026-01-16
      1 | Raj    | Sharma | raj.sharma@outlook.com    | IT              |  97000 | 2026-01-16
      3 | Arjun  | Verma  | arjun.verma@gmail.com     | IT              |  71000 | 2026-01-16
(11 rows)


-- practice 1: created new insert function
CREATE OR REPLACE PROCEDURE add_employee(
firstname VARCHAR,
lastname VARCHAR,
new_email VARCHAR,
new_dept VARCHAR,
new_salary NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
INSERT INTO employees(fname,lname,email,dept,salary)
VALUES(firstname, lastname, new_email, new_dept,new_salary);

END;
$$;

select * from employees;
(10 rows)
call add_employee('Sheela', 'Kunwar', 'sk12@gmail.com','Finance',8000000);
select * from employees;
(11 rows)
```

---

# user defined functions

- syntax:

```sql
CREATE OR REPLACE FUNCTION function_name(parameters)
RETURNS return_type AS $$
BEGIN
--Function body (SQL statements)
        RETURN some_value; --for scalar functions
END;
$$;
```

---

## example and practice :

- Task : find name of employees in each department having maximum salary.

```sql
--normal way
SELECT
e.emp_id,
e.fname,
e.salary
from employees e
where e.dept = 'HR'
and e.salary = (
select max(emp.salary)
from employees emp
where emp.dept = 'HR'
);


--lets create a function
create or replace function dept_max_sal(dept_name varchar)
returns table(emp_id int, fname varchar, salary numeric)
as $$
begin
return query
select
e.emp_id, e.fname,e.salary from employees e
where e.dept = dept_name and e.salary=
(
select max(emp.salary) from employees emp
where emp.dept = dept_name
);
end;
$$ language plpgsql;

--calling the function
select * from dept_max_sal('General Manager');

```

---

# window functions

- window functions are also known as analytic functions allow you to perform calculations across a set of rows related to the current row.

Defined by and over() clause
eg: SELECT fname, salary,
SUM(salary) over(order by salary)
FROM employees;

## 1. ROW_NUMBER()

```sql
        SELECT
	Row_number()over(order by fname),
	fname,dept, salary
	FROM employees;
-- output
 row_number | fname  |      dept       | salary
------------+--------+-----------------+---------
          1 | Amit   | Marketing       |   52000
          2 | Anjal  | General Manager |  500000
          3 | Anjali | Finance         |   61000
          4 | Arjun  | IT              |   71000
          5 | Kavita | HR              |   47000
          6 | Neha   | IT              |   48000
          7 | Priya  | HR              |   45000
          8 | Rabin  | Manager         |  120000
          9 | Rahul  | IT              |   53000
         10 | Raj    | IT              |   97000
         11 | Sheela | Finance         | 8000000
         12 | Suman  | Finance         |   60000
(12 rows)
        SELECT
	Row_number()over(partition by dept),
	fname,dept, salary
	FROM employees;
        -- output
         row_number | fname  |      dept       | salary
------------+--------+-----------------+---------
          1 | Sheela | Finance         | 8000000
          2 | Suman  | Finance         |   60000
          3 | Anjali | Finance         |   61000
          1 | Anjal  | General Manager |  500000
          1 | Priya  | HR              |   45000
          2 | Kavita | HR              |   47000
          1 | Arjun  | IT              |   71000
          2 | Raj    | IT              |   97000
          3 | Neha   | IT              |   48000
          4 | Rahul  | IT              |   53000
          1 | Rabin  | Manager         |  120000
          1 | Amit   | Marketing       |   52000
(12 rows)
```

## 2. RANK()

```sql
-- rank in ascending order
SELECT fname, salary,
RANK() OVER(ORDER BY salary)
FROM employees;
--output--
ecommerce-# FROM employees;
 fname  | salary  | rank
--------+---------+------
 Priya  |   45000 |    1
 Kavita |   47000 |    2
 Neha   |   48000 |    3
 Amit   |   52000 |    4
 Rahul  |   53000 |    5
 Suman  |   60000 |    6
 Anjali |   61000 |    7
 Arjun  |   71000 |    8
 Raj    |   97000 |    9
 Rabin  |  120000 |   10
 Anjal  |  500000 |   11
 Sheela | 8000000 |   12
(12 rows)
-- rank in desc order by salary
SELECT fname, salary,
RANK() OVER(ORDER BY salary DESC)
FROM employees;
--output--
 fname  | salary  | rank
--------+---------+------
 Sheela | 8000000 |    1
 Anjal  |  500000 |    2
 Rabin  |  120000 |    3
 Raj    |   97000 |    4
 Arjun  |   71000 |    5
 Anjali |   61000 |    6
 Suman  |   60000 |    7
 Rahul  |   53000 |    8
 Amit   |   52000 |    9
 Neha   |   48000 |   10
 Kavita |   47000 |   11
 Priya  |   45000 |   12
(12 rows)
```

## 3. DENSE_RANK()

```sql
SELECT fname, salary,
DENSE_RANK() OVER(ORDER BY salary)
FROM employees;
--output
 fname  | salary  | dense_rank
--------+---------+------------
 Priya  |   45000 |          1
 Kavita |   47000 |          2
 Neha   |   48000 |          3
 Amit   |   52000 |          4
 Rahul  |   53000 |          5
 Suman  |   60000 |          6
 Anjali |   61000 |          7
 Arjun  |   71000 |          8
 Raj    |   97000 |          9
 Rabin  |  120000 |         10
 Anjal  |  500000 |         11
 Sheela | 8000000 |         12
(12 rows)
```

## 4. LAG() and LEAD()

```sql
------lag---------------------------
SELECT fname, salary,
LAG(salary) OVER()
FROM employees;
--output--
 fname  | salary  |  lag
--------+---------+--------
 Priya  |   45000 |
 Suman  |   60000 |  45000
 Kavita |   47000 |  60000
 Amit   |   52000 |  47000
 Neha   |   48000 |  52000
 Rahul  |   53000 |  48000
 Anjali |   61000 |  53000
 Rabin  |  120000 |  61000
 Anjal  |  500000 | 120000
 Raj    |   97000 | 500000
 Arjun  |   71000 |  97000
 Sheela | 8000000 |  71000
(12 rows)

--lead-----------------------------------

SELECT fname, salary,
LEAD(salary) OVER()
FROM employees;
--output--
 fname  | salary  |  lead
--------+---------+---------
 Priya  |   45000 |   60000
 Suman  |   60000 |   47000
 Kavita |   47000 |   52000
 Amit   |   52000 |   48000
 Neha   |   48000 |   53000
 Rahul  |   53000 |   61000
 Anjali |   61000 |  120000
 Rabin  |  120000 |  500000
 Anjal  |  500000 |   97000
 Raj    |   97000 |   71000
 Arjun  |   71000 | 8000000
 Sheela | 8000000 |
(12 rows)
```

---

## finding salary difference using lead

```sql
SELECT fname, salary,
(salary-LEAD(salary) OVER(ORDER BY salary DESC)) as salary_difference
FROM employees;
--output---------
 fname  | salary  | salary_difference
--------+---------+-------------------
 Sheela | 8000000 |           7500000
 Anjal  |  500000 |            380000
 Rabin  |  120000 |             23000
 Raj    |   97000 |             26000
 Arjun  |   71000 |             10000
 Anjali |   61000 |              1000
 Suman  |   60000 |              7000
 Rahul  |   53000 |              1000
 Amit   |   52000 |              4000
 Neha   |   48000 |              1000
 Kavita |   47000 |              2000
 Priya  |   45000 |
(12 rows)

```

---

# CTE

**CTE(COMMON TABLE EXPRESSION)** is a temporary result set that you can define within query to simplify complex sql statements.

- syntax

```sql
WITH cte_name(optional_column_list) AS(
        --cte query definition
        SELECT ...
)
---main query refrencing the cte
SELECT ...
FROM cte_name
WHERE ...;
```

**use case:**

- we want to calculate the average salary per department and then find all employees whose salary is above the average salary of their department.

```sql
--code
WITH avg_sal AS(
select dept, avg(salary) as avg_salary from employees group by dept
)

SELECT
e.emp_id, e.fname, e.dept, e.salary,a.avg_salary
FROM employees e
JOIN avg_sal a
on a.dept=e.dept
where e.salary>a.avg_salary;

--output--
 emp_id | fname  |  dept   | salary  |      avg_salary
--------+--------+---------+---------+----------------------
      5 | Kavita | HR      |   47000 |   46000.000000000000
      1 | Raj    | IT      |   97000 |   67250.000000000000
      3 | Arjun  | IT      |   71000 |   67250.000000000000
     13 | Sheela | Finance | 8000000 | 2707000.000000000000
(4 rows)
```

## use case 2: we want to find highest paid employee in each department;

```sql
--code
WITH max_sal AS(
select dept, max(salary) as max_salary
from employees group by dept
)

select e.fname, m.dept, m.max_salary

from employees e
join max_sal m on m.dept = e.dept

where e.salary= m.max_salary;

--output
 fname  |      dept       | max_salary
--------+-----------------+------------
 Kavita | HR              |      47000
 Amit   | Marketing       |      52000
 Rabin  | Manager         |     120000
 Anjal  | General Manager |     500000
 Raj    | IT              |      97000
 Sheela | Finance         |    8000000
(6 rows)
```

**_note: once CTE has been created it can only be used once unlike stored procedures. it will not be persisted._**

---

# TRIGGERS

- **Triggers** are special procedures in database that automatically execute predefined actions in response to certain events on a specified table or view.
- syntax

```sql
CREATE TRIGGER trigger_name
{BEFORE|AFTER|INSTEAD OF}{INSERT|UPDATE|DELETE|TRUNCATE}
ON table_name
FOR EACH{ROW | STATEMENT}
EXECUTE FUNCTION trigger_function_name();

CREATE OR REPLACE trigger_function_name()
RETURNS TRIGGER AS $$
BEGIN
        --Trigger logic here
        RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

- **USE CASE:**
  Create a trigger so that if we insert/update negative salary in a table it will be triggered and set to positive.

```sql
create or replace function check_salary()
returns trigger as $$
begin
if new.salary<=0 then
new.salary= (0-new.salary);
end if;
return new;
end;
$$language plpgsql;

create trigger before_update_salary
before update on employees
for each row
execute function check_salary();
```
