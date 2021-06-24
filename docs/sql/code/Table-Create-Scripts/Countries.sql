CREATE TABLE countries (
    country_id character varying(2) NOT NULL,
    country_name character varying(40) DEFAULT NULL::character varying,
    region_id numeric(10,0) DEFAULT NULL::numeric
);