SELECT first_name FROM Employees
WHERE salary > (
    SELECT salary
    FROM Employees
    WHERE id = 12;
);
