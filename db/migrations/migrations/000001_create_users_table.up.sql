CREATE TABLE IF NOT EXISTS users(
  id serial PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  email VARCHAR (255) NOT NULL,
  password VARCHAR (16) NOT NULL,
  college_id INTEGER (50),
  department_id INTEGER (50),
  faculty_id INTEGER (50)
);