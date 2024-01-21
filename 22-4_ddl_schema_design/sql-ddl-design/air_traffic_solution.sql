-- from the terminal run:
-- psql < air_traffic_solution.sql

DROP DATABASE IF EXISTS air_traffic_solution;

CREATE DATABASE air_traffic_solution;

\c air_traffic_solution

-- Create the passengers table
CREATE TABLE passengers (
    passenger_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

-- Create the flights table
CREATE TABLE flights (
    flight_id SERIAL PRIMARY KEY,
    departure TIMESTAMP NOT NULL,
    arrival TIMESTAMP NOT NULL,
    from_city TEXT NOT NULL,
    from_country TEXT NOT NULL,
    to_city TEXT NOT NULL,
    to_country TEXT NOT NULL,
    airline_id INT REFERENCES airlines(airline_id)
);

-- Create the airlines table
CREATE TABLE airlines (
    airline_id SERIAL PRIMARY KEY,
    airline_name TEXT NOT NULL
);
