
-- create
CREATE TABLE classmates (
	id	INTEGER PRIMARY KEY,
	name	TEXT NOT NULL,
	age	INTEGER NOT NULL,
	adress	TEXT NOT NULL
	);

-- insert

INSERT INTO classmates VALUES (0001, 'Антон', 31, 'Пушкина,10-52');
INSERT INTO classmates VALUES (0002,	'Светлана',	29,	'Пушкина, 10-14');
INSERT INTO classmates VALUES (0003,	'Александр',	29,	'Советская, 14-27');
INSERT INTO classmates VALUES (0004,	'Дмитрий',	18,	'Советская, 52-127');
INSERT INTO classmates VALUES (0005,	'Маргарита',	25,	'Красноармейская, 15-12');
INSERT INTO classmates VALUES (0006,	'Павел',	39,	'Свиридова, 26-157');
INSERT INTO classmates VALUES (0007,	'Кирилл',	30,	'Макаенка, 20-2');
INSERT INTO classmates VALUES (0008,	'Ольга',	30,	'Макаенка, 56-159');
INSERT INTO classmates VALUES (0009,	'Филипп',	31,	'Кирова, 12-23');
INSERT INTO classmates VALUES (00010,	'Анастасия',	29,	'Красноармейская, 15-100');

-- fetch 
SELECT name FROM classmates WHERE age >= 18 and age < 30;
