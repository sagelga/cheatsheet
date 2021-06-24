CREATE TABLE Employees (
    id              INT(10),
    first_name      VARCHAR(255),
    last_name       VARCHAR(255),
    salary          INT(10),

    UNIQUE (first_name, last_name),
    PRIMARY KEY 'PK_Employees_id_first_name' (id, first_name)
);
