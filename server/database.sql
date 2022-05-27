psql \! chcp 1251

create TABLE client(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    surname VARCHAR(50),
    middlename VARCHAR(50),
    passport_id VARCHAR(50),
    login VARCHAR(50),
    password VARCHAR(50),
    district VARCHAR(50)
);

create TABLE tax(
    id SERIAL PRIMARY KEY,
    cost REAL,
    expiration_date TIMESTAMP,
    client_id INTEGER,
    payment_id INTEGER,
    year smallint,
    FOREIGN KEY (client_id) REFERENCES client (id),
    FOREIGN KEY (payment_id) REFERENCES payment (id)
);

create TABLE payment(
    id SERIAL PRIMARY KEY,
    date TIMESTAMP,
    amount REAL
);

create TABLE worker(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    surname VARCHAR(50),
    middlename VARCHAR(50),
    login VARCHAR(50),
    password VARCHAR(50)
);

create TABLE income(
    id SERIAL PRIMARY KEY,
    sum REAL,
    year smallint,
    client_id INTEGER,
    FOREIGN KEY (client_id) REFERENCES client (id)
);

create TABLE expenses(
    id SERIAL PRIMARY KEY,
    sum REAL,
    year smallint,
    client_id INTEGER,
    FOREIGN KEY (client_id) REFERENCES client (id)
);

insert into client (name, surname, middlename, passport_id, login, password, district)
values ('Ivan', 'Garkun', 'Andreevich', 'MP3989105', 'test@gmail.com', '12345678', 'Oktyabrsky');
values ('Maxim', 'Malengo', 'Alexevich', 'MP8750193', 'test@gmail.com', '12345678', 'Сentrally');
values ('Vlad', 'Kabral', 'Andreevich', 'MP7591340', 'test@gmail.com', '12345678', 'Pervomaisk');
values ('Mark', 'Putato', 'Maximovich', 'MP1723784', 'test@gmail.com', '12345678', 'Moskov');
values ('Gleb', 'Mihalkov', 'Alexandrovich', 'MP0583958', 'test@gmail.com', '12345678', 'Centrally');

insert into payment (date, amount)
values ('2021-04-12', 568);
values ('2021-03-08', 800);
values ('2021-05-01', 600);
values ('2021-04-07', 568);
values ('2021-04-13', 789);
values ('2020-03-25', 789);
values ('2019-04-11', 459);

insert into tax (cost, expiration_date, client_id, payment_id)
values ()