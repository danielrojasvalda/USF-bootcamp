-- from the terminal run:
-- psql < outer_space_solution.sql

DROP DATABASE IF EXISTS outer_space_solution;

CREATE DATABASE outer_space_solution;

\c outer_space_solution

CREATE TABLE galaxies (
    galaxy_id SERIAL PRIMARY KEY,
    galaxy_name TEXT NOT NULL
);

CREATE TABLE moons (
    moon_id SERIAL PRIMARY KEY,
    moon_name TEXT NOT NULL
);

CREATE TABLE planets (
    planet_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    orbital_period_in_years FLOAT NOT NULL,
    galaxy_id INT REFERENCES galaxies(galaxy_id),
    UNIQUE (name)
);

CREATE TABLE planet_moons (
    planet_id INT REFERENCES planets(planet_id),
    moon_id INT REFERENCES moons(moon_id),
    PRIMARY KEY (planet_id, moon_id)
);

