DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  film_name VARCHAR(100)
);

CREATE TABLE movies_reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  film_id INT,
  FOREIGN KEY (film_id) REFERENCES movies(id),
  review TEXT
);
