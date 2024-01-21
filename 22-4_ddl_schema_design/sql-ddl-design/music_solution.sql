-- from the terminal run:
-- psql < music_solution.sql

DROP DATABASE IF EXISTS music_solution;

CREATE DATABASE music_solution;

\c music_solution

CREATE TABLE artists (
    artist_id SERIAL PRIMARY KEY,
    artist_name TEXT NOT NULL
);

CREATE TABLE albums (
    album_id SERIAL PRIMARY KEY,
    album_name TEXT NOT NULL,
    release_date DATE NOT NULL
);

CREATE TABLE producers (
    producer_id SERIAL PRIMARY KEY,
    producer_name TEXT NOT NULL
);
