/*Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел
пользователь, вывод должен выглядеть так(пример):
Результат сложения чисел 5 и 2 равен 7.
function sum(a, b) {
    return a + b;
}
const a = Number.parseInt(prompt("Insert number a"));
const b = Number.parseInt(prompt("Insert number b"));
//alert(a + b)
console.log(`${a}+${b}=${sum(a, b)}`)

*/
/*Задача 3: Написать функцию, которая принимает имя пользователя при ее вызове и выводит
сообщение с приветствием пользователя по имени. Проверить работоспособность функции.


const nameInsert = prompt("Insert name:");
myFunc(nameInsert);

function myFunc(n) {
alert(`Hello, ${n}!`);
}
*/

/*  Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется ?”
и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
- При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
- При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.

const bool = confirm(" Вам хорошо живется ?")
if (bool) {
    alert("Тогда мы идем к вам!");
} else {
    alert("Ну вы держитесь там!");
}


второй вариант
alert(goodLife ? "Тогда мы идем к вам!" : "Ну вы держитесь там!");
*/
// const age = Number.parseInt(prompt("Введите сколько Вам лет"));
// switch (age) {
//     case 18:
//         alert('Вы совершеннолетний, все можно!');
//         break;
//     case 10:
//         alert('Вам надо учить уроки!');
//         break;
//     case 30:
//         alert('Ложитесь спать, завтра на работу');
//         break;
//     default:
//         alert('Мы не знаем что Вам делать');
// }


/*Необязательное задание.

Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

    Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: пользователь всегда вводит корректное положительное целое число.
*/
// const num = Number.parseInt(prompt("Введите число:"));
// let copyNum = num;
// const units = copyNum % 10;
// copyNum = (copyNum - units) / 10;
// const dozen = copyNum % 10;
// copyNum = (copyNum - dozen) / 10;
// const hund = copyNum % 10;

// console.log(`В числе ${num} количество сотен: ${hund}, десятков: ${dozen}, единиц: ${units}`);

// Дан массив возрастов в семье, вернуть
// массив c возрастом самого младшего, самого старшего и разницу между самым
// старшим и младшим.Если ребенку 9 месяцев, считаем как 0. P.S.Желательно
// не использовать встроенные функции типа sort и т.п.
// * /
// function differenceInAges(ages) {

// }

// console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]
// console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]


/* const arrAges = [0.9, 5, 60.5, 35, 20, 15];
let minAge = arrAges[0];
let maxAge = arrAges[0];
for (let i = 1; i < arrAges.length; i++) {
    if (arrAges[i] < minAge) {
        minAge = arrAges[i];
    }
    if (arrAges[i] > maxAge) {
        maxAge = arrAges[i];
    }
}
console.log(Math.floor(maxAge) - Math.floor(minAge));
*/
/*function differenceInAges(ages) {
    const max_age = Math.max(...ages);
    const min_age = Math.min.apply(null, ages);
    let res = [min_age, max_age, (max_age - min_age)];
    return res;
}

console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]
*/

/* Ваша задача - создать функцию, которая может принимать любое неотрицательное
 целое число в качестве аргумента и возвращать его с цифрами в порядке убывания.
 По сути, переставьте цифры, чтобы получить максимально возможное число.
*/
//     Примеры:
// Вход: 42145 Выход: 54421
// Вход: 145263 Выход: 654321
// Ввод: 123456789 Выход: 987654321
const number = Number.parseInt(prompt("Enter your number:"));
console.log(sort_array(number));
function sort_array(number) {
    let numbers = [];
    const str_num = number.toString();
    for (let index = 0; index < str_num.length; index++) {
        const element = str_num[index];
        numbers.push(Number.parseInt(element));
    }
    numbers.sort().reverse();
    return Number.parseInt(numbers.join(''))
}