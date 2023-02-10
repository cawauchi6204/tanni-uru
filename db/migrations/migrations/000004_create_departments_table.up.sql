CREATE TABLE IF NOT EXISTS departments(
  id serial PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  faculty_id INTEGER (50)
);