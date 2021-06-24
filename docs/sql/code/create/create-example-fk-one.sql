CREATE TABLE Employees (
    workplace_id    INT(10),
    id              INT(10),
    first_name      VARCHAR(255),
    last_name       VARCHAR(255),
    salary          INT(10),
    
    PRIMARY KEY 'PK_Employees_id_first_name' (id, workplace_id)
    CONSTRAINT 'FK_workplace_id' FOREIGN KEY (workplace_id) REFERENCES Workplace(id)
);
