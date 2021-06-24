CREATE TABLE departments (
    department_id numeric(4,0) NOT NULL,
    department_name character varying(30) NOT NULL,
    manager_id numeric(6,0) DEFAULT NULL::numeric,
    location_id numeric(4,0) DEFAULT NULL::numeric
);