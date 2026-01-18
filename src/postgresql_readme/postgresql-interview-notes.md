# PostgreSQL Interview Notes

Concise notes focused on **what interviewers actually ask**.

---

## WHERE vs HAVING

- WHERE → filters rows
- HAVING → filters aggregated results

```sql
GROUP BY dept
HAVING SUM(salary) > 50000;
```

---

## CASE Expression

Used for:

- Conditional categorization
- Business logic in queries

Interview line:

> CASE works like if-else inside SQL.

---

## COUNT(\*) vs COUNT(column)

| COUNT(\*)            | COUNT(col)          |
| -------------------- | ------------------- |
| Counts all rows      | Ignores NULL        |
| Faster in PostgreSQL | Used for validation |

---

## Joins (Must Know)

- INNER → matching data
- LEFT → find missing data
- RIGHT → reverse of LEFT
- CROSS → rarely used

---

## Relationships

- One-to-Many → most common
- Many-to-Many → use junction table
- Foreign keys enforce integrity

---

## Views

- Stored queries
- Simplify complex joins
- Do not store data
- Improve maintainability

---

## Stored Procedure vs Function

| Procedure      | Function       |
| -------------- | -------------- |
| Uses CALL      | Used in SELECT |
| No return      | Must return    |
| DML operations | Business logic |

---

## Window Functions

Why important:

- Analytics
- Ranking
- Comparisons

Functions:

- ROW_NUMBER
- RANK
- DENSE_RANK
- LAG / LEAD

---

## CTE (WITH clause)

- Temporary result set
- Improves readability
- Used once per query

---

## GROUP BY ROLLUP

- Adds total rows
- Used in reporting

---

## Triggers

- Automatically run on events
- Enforce rules
- Prevent invalid data

Common use:
✔ Salary validation
✔ Audit logging

---

## Final Interview Advice

When explaining SQL:

1. Explain the **problem**
2. Walk through the **logic**
3. Explain **why each clause is used**

Clear reasoning beats complex syntax.
