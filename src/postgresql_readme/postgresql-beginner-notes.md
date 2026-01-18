# PostgreSQL Beginner Notes 🐣

These notes explain PostgreSQL concepts in a **simple, progressive manner** with a focus on understanding.

---

## What is PostgreSQL?

- Open-source **relational database**
- ACID compliant
- Uses SQL for data manipulation
- Widely used in production systems

---

## SQL Execution Order (Very Important)

```sql
SELECT
FROM
WHERE
GROUP BY
HAVING
ORDER BY
LIMIT
```

Actual execution:

1. FROM
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT
6. ORDER BY
7. LIMIT

---

## WHERE vs HAVING

| WHERE                | HAVING              |
| -------------------- | ------------------- |
| Filters rows         | Filters groups      |
| Used before GROUP BY | Used after GROUP BY |
| No aggregates        | Uses aggregates     |

---

## CASE Expression

Used to apply **conditional logic** in queries.

Common use cases:

- Salary categorization
- Bonus calculation
- Status labeling

```sql
CASE
 WHEN condition THEN value
 ELSE value
END
```

---

## Table Relationships

### 1️. One-to-One

- One record ↔ one record
- Rare in practice

### 2️. One-to-Many

- One parent → many children
- Most common relationship

### 3️. Many-to-Many

- Requires a **junction table**
- Prevents data duplication

---

## Foreign Key

- References primary key of another table
- Enforces **data integrity**
- Prevents invalid data insertion

---

## Joins (Beginner Friendly)

| Join       | Meaning             |
| ---------- | ------------------- |
| INNER JOIN | Only matching rows  |
| LEFT JOIN  | All left + matches  |
| RIGHT JOIN | All right + matches |
| CROSS JOIN | Cartesian product   |

---

## Views

- Saved SQL queries
- Behave like virtual tables
- Used for:

  - Simplifying complex queries
  - Reusability
  - Security

---

## Stored Procedures (Intro)

- Stored logic on DB server
- Perform INSERT / UPDATE / DELETE
- Called using `CALL`

---

## User Defined Functions (Intro)

- Return a value or table
- Used inside SELECT queries
- Ideal for reusable logic

---

## Window Functions (Basics)

Operate on rows **without grouping them**.

Examples:

- ROW_NUMBER
- RANK
- DENSE_RANK
- LAG / LEAD

---

## GROUP BY ROLLUP

- Adds subtotal & total rows
- Useful for reports

---

## Triggers (Intro)

- Automatically execute on events
- Maintain rules & integrity

---

## Common Beginner Mistakes

❌ Using WHERE instead of HAVING
❌ Missing GROUP BY columns
❌ Data repetition in many-to-many
❌ Confusing procedure vs function

---

## Learning Tip

Write queries **step-by-step** and test each stage.
Understanding beats memorization.
