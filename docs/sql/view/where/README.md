# WHERE
`WHERE` keywords allows you to add arguments to the query.<br>
For example, you liked to get the data as First Name is 'John'.

## Syntax
<<< @/code/Where/where-usage.sql

## Example
### Example One
If you liked to find the employee that have `first_name` equals to 'Jeff', this is how you write it.

<<< @/code/Where/where-equal-employee.sql

### Example Two
If you liked to lists all employees that have salary more than or equal to 2000

<<< @/code/Where/where-more-than-employee.sql

### Example Three
You can use `AND` or any arguments to join the clause.

In this example, select all the rows that have `first_name` of 'John' and `last_name` of 'Cena' and do not have `id` as 12.

<<< @/code/Where/where-and-employee.sql

## Using wildcards on where using `LIKE`
The idea of like is like regular expressions in SQL.
- `%` - represents a wild card for zero, one, or multiple characters
- `_` - represents a wild card for single character

### Example One
Wants to get all the employees that have the **first name** that **starts with J**

<<< @/code/Where/where-like-1-employee.sql

### Example Two
Wants to get the result in the column that the first name **starts with ‘J’ and have 4 more alphabet after it**

<<< @/code/Where/where-like-2-employee.sql

### Example Three
Wants to get the result in the first name **starts with ‘J’ and the third alphabet is ‘h’**

<<< @/code/Where/where-like-3-employee.sql

### Example Four
Wants to get the result in the first name **starts with ‘J’ and ends with ‘n’**

<<< @/code/Where/where-like-4-employee.sql

### Example Five
Wants to get the result that their `first_name` is **at least 3 character long**

<<< @/code/Where/where-like-5-employee.sql

-----

## Using `IN` keyword
`IN` keyword is similar result to match. But if one matched in a list, it is a matched and it will be shown in the result.

<<< @/code/Where/where-in-employee-usage.sql

### Example One
Result in the column that the `first_name` **is either ‘John’ or ‘Jeff’**

<<< @/code/Where/where-in-1-employee.sql

-----

## Using `BETWEEN` keyword
Equivalent to `[value1] <= [column_name] <= [value2]` in Math equation

<<< @/code/Where/where-between-usage-employee.sql

### Example One
Show every `first_name` that salary is between 2000 and 5000

<<< @/code/Where/where-between-employee.sql


## Nested WHERE arguments

### Where the cell data is more than computed cell
<<< @/code/Where/where-more-than-compute-employee.sql