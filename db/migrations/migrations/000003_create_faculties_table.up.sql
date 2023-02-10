CREATE TABLE IF NOT EXISTS faculties(
  id serial PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  college_id INTEGER (50)
);