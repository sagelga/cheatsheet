CREATE TABLE locations (
    location_id numeric(4,0) DEFAULT (0)::numeric NOT NULL,
    street_address character varying(40) DEFAULT NULL::character varying,
    postal_code character varying(12) DEFAULT NULL::character varying,
    city character varying(30) NOT NULL,
    state_province character varying(25) DEFAULT NULL::character varying,
    country_id character varying(2) DEFAULT NULL::character varying
);
