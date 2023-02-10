CREATE TABLE IF NOT EXISTS grades(
  id serial PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  user_id INTEGER (50) NOT NULL,
  is_deleted BOOLEAN DEFAULT (false),
  created_at TIMESTAMP
);