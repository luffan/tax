create TABLE client(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    surname VARCHAR(50),
    middlename VARCHAR(50),
    passport_id VARCHAR(50),
    login VARCHAR(50),
    password VARCHAR(50),
    district VARCHAR(50),
    income REAL,
    expenses REAL
);

create TABLE tax(
    id SERIAL PRIMARY KEY,
    cost REAL,
    expiration_date TIMESTAMP,
    client_id INTEGER,
    payment_id INTEGER,
    FOREIGN KEY (client_id) REFERENCES client (id),
    FOREIGN KEY (payment_id) REFERENCES payment (id)
);

create TABLE payment(
    id SERIAL PRIMARY KEY,
    date TIMESTAMP,
    amount REAL
);