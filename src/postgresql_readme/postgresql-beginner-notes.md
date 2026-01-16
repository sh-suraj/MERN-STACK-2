# 📘 1️⃣ `postgresql-beginner-notes.md`

````md
# PostgreSQL Beginner Notes

This document contains beginner-friendly PostgreSQL examples
practiced using an `employees` table inside the `ecommerce` database.

---

## Connecting to PostgreSQL

```bash
psql -U postgres -d ecommerce
````

---

## Creating a Table

```sql
CREATE TABLE employees (
  emp_id SERIAL PRIMARY KEY,
  fname VARCHAR(50) NOT NULL,
  lname VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  dept VARCHAR(20) DEFAULT 'Marketing',
  salary INT DEFAULT 30000,
  hire_date DATE DEFAULT CURRENT_DATE
);
```

---

## Inserting Data

```sql
INSERT INTO employees (fname, lname, email, dept, salary)
VALUES ('Raj', 'Sharma', 'raj.sharma@outlook.com', 'IT', 50000);
```

---

## SELECT Queries

### Fetch all records

```sql
SELECT * FROM employees;
```

### Fetch specific columns

```sql
SELECT fname, dept FROM employees;
```

---

## WHERE Clause

```sql
SELECT * FROM employees WHERE dept = 'IT';
```

### Logical Operators

```sql
SELECT * FROM employees WHERE dept = 'IT' AND salary > 50000;
```

---

## IN / NOT IN

```sql
SELECT * FROM employees WHERE dept IN ('IT','HR');
SELECT * FROM employees WHERE dept NOT IN ('IT','HR');
```

---

## BETWEEN

```sql
SELECT * FROM employees
WHERE salary BETWEEN 40000 AND 60000;
```

---

## DISTINCT

```sql
SELECT DISTINCT dept FROM employees;
```

---

## ORDER BY

```sql
SELECT * FROM employees ORDER BY fname ASC;
SELECT * FROM employees ORDER BY fname DESC;
```

---

## LIMIT

```sql
SELECT * FROM employees LIMIT 3;
```

---

## LIKE and Pattern Matching

```sql
-- Names starting with A
SELECT * FROM employees WHERE fname LIKE 'A%';

-- Names containing 'i'
SELECT * FROM employees WHERE fname LIKE '%i%';

-- Exactly two characters (IT, HR)
SELECT * FROM employees WHERE dept LIKE '__';
```

> ℹ️ `LIKE` is case-sensitive in PostgreSQL
> Use `ILIKE` for case-insensitive search.

```sql
SELECT * FROM employees WHERE fname ILIKE 'a%';
```

---

## Aggregate Functions

```sql
SELECT COUNT(emp_id) FROM employees;
SELECT SUM(salary) FROM employees;
SELECT AVG(salary) FROM employees;
SELECT MIN(salary), MAX(salary) FROM employees;
```

---

## GROUP BY

```sql
SELECT dept, COUNT(emp_id)
FROM employees
GROUP BY dept;
```

```sql
SELECT dept, SUM(salary)
FROM employees
GROUP BY dept;
```

---

## Key Learnings

* CRUD operations using SQL
* Filtering and sorting data
* Pattern matching with LIKE / ILIKE
* Aggregate functions and grouping

````
