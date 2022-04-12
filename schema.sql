DROP DATABASE IF EXISTS leaderboard;
DROP DATABASE IF EXISTS clockdb;
DROP DATABASE IF EXISTS memdb;
CREATE DATABASE memdb;
USE memdb;
CREATE TABLE memory (
    id SERIAL,
    month INT NOT NULL,
    day INT NOT NULL,
    year INT NOT NULL,
    memory TEXT NOT NULL,
    place TEXT NOT NULL,
    name TEXT,
    show_name BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT "mem_pkey" PRIMARY KEY (id ASC)
);