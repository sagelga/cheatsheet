CREATE TABLE employees (
    employee_id     numeric(6,0) DEFAULT (0)::numeric NOT NULL,
    first_name      character varying(20) DEFAULT NULL::character varying,
    last_name       character varying(25) NOT NULL,
    email           character varying(25) NOT NULL,
    phone_number    character varying(20) DEFAULT NULL::character varying,
    hire_date       date NOT NULL,
    job_id          character varying(10) NOT NULL,
    salary          numeric(8,2) DEFAULT NULL::numeric,
    commission_pct  numeric(2,2) DEFAULT NULL::numeric,
    manager_id      numeric(6,0) DEFAULT NULL::numeric,
    department_id   numeric(4,0) DEFAULT NULL::numeric
);