//  Необходимо создать html - страницу с названием 1.html, в которой подключить файл 1.js
// Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем 
// значение в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом(пример): 
// Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
// были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Примечания: Пользователь всегда вводит корректное число.
// Советую округлить значение после рассчетов, так как в некоторых случаях может получиться "длинная дробь".
const temp_celcia = Number.parseInt(prompt('Enter temperature in degrees Celsius: '));
const temp_fahrenheit = (9 / 5) * temp_celcia + 32;
alert(`Degrees Celsius = ${temp_celcia} Fahrenheit = ${+temp_fahrenheit.toFixed(2)}`);