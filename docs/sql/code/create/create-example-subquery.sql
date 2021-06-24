CREATE TABLE NewEmployees
AS
SELECT first_name, last_name, salary 
FROM Employees
WHERE salary BETWEEN 2000 AND 5000
