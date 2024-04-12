CREATE TABLE gender (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255)
);

CREATE TABLE profile (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255)
);

CREATE TABLE ethnicity (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255)
);

CREATE TABLE sexual_orientation (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    birthday DATE NOT NULL,
    isCandidate BOOL NOT NULL,
    profile INT,
    address VARCHAR(255),
    complement VARCHAR(255),
    neighborhood VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(2),
    country VARCHAR(255),
    zipcode VARCHAR(255),
    phone VARCHAR(255),
    ethnicity_id int,
    gender_id int,
    sexual_orientation_id int,
    isPCD BOOL
);

INSERT INTO ethnicity (name) VALUES 
("branco"),
("indigena"),
("negro"),
("pardo"),
("asiático");

INSERT INTO sexual_orientation (name) VALUES 
("hetero"),
("bisexual"),
("assexual");

INSERT INTO profile(name) VALUES 
("admin"),
("colaborador");

INSERT INTO gender (name) VALUES 
("mulher cis"),
("não-binário"),
("neutro"),
("agênero"),
("mulher trans"),
("homem cis"),
("homem trans");