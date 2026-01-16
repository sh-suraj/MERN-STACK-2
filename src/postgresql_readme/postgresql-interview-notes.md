#  `postgresql-interview-notes.md`
```md
# PostgreSQL Interview-Ready Notes

Quick SQL revision notes with examples.

---

## Difference Between WHERE and HAVING

- `WHERE` filters rows **before aggregation**
- `HAVING` filters rows **after GROUP BY**

```sql
SELECT dept, COUNT(emp_id)
FROM employees
GROUP BY dept
HAVING COUNT(emp_id) > 1;
````

---

## AND vs IN

Bad:

```sql
WHERE dept = 'IT' AND dept = 'HR'
```

Correct:

```sql
WHERE dept IN ('IT','HR');
```

---

## LIKE vs ILIKE

* `LIKE` → case-sensitive
* `ILIKE` → case-insensitive

```sql
SELECT * FROM employees WHERE fname ILIKE 'a%';
```

---

## COUNT(*) vs COUNT(column)

```sql
COUNT(*)        -- counts all rows
COUNT(emp_id)   -- ignores NULL values
```

---

## ORDER BY Execution Order

```sql
SELECT * FROM employees
WHERE salary > 50000
ORDER BY fname
LIMIT 5;
```

Execution order:

1. FROM
2. WHERE
3. SELECT
4. ORDER BY
5. LIMIT

---

## GROUP BY Rule

**Every selected column must be:**

* inside an aggregate function OR
* included in GROUP BY

**Invalid:**

```sql
SELECT fname, COUNT(emp_id) FROM employees GROUP BY dept;
```

**Valid:**

```sql
SELECT dept, COUNT(emp_id) FROM employees GROUP BY dept;
```

---

## BETWEEN (Inclusive)

```sql
WHERE salary BETWEEN 40000 AND 60000;
```

Includes both 40000 and 60000.

---

## Common Interview Questions

✔ Difference between DELETE and TRUNCATE
✔ What is PRIMARY KEY vs UNIQUE
✔ Why normalization matters
✔ Index vs Primary Key
✔ When to use GROUP BY

---

## Final Tip

Explain queries **out loud** during interviews.
Clarity > memorization.
