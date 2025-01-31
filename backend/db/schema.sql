CREATE TABLE markets (
  id SERIAL PRIMARY KEY,
  election_name VARCHAR(255) NOT NULL,
  end_time BIGINT NOT NULL,
  resolved BOOLEAN DEFAULT false,
  outcome BOOLEAN DEFAULT false
);
