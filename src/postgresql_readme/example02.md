## CASE Expression

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
## Relationship and its types;

