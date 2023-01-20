// function declaration

// 'use strict';

// f1();

// if (true) {
//     function f1() {
//         console.log('function 1 if');
//     };
// }
// else {
//         function f1() {
//         console.log('function 1 esle');

//         }
// }

// f1()

// function expression это переменная или константа которой присвоена функция

function f2() {
    console.log('function f2');
}
// f2();

const f3 = function (a) {
    console.log('function f3' + a); // можн вызывать только после создания(присвоения переменной) в отличие от обычной функции. В конце точка с запятой
};
// f3();

const f4 = f3;
// console.log(f4 === f3);

const f5 = function example() {
    console.log(example.name);
    console.log(f5.name);
    console.log(this.name);
    console.log('function example');
}
// f5();
// f3(3333333);




//Функции высшего порядка

//pure функции(чистая функция) - возвращают значения зависящие только от входящих аргументов и параметровб без побочных эффектов
// Потенциально уменьшает кол багов в коде
function squad(n) {
    return n ** 2;
}
// console.log(squad(4));

function squad2(n) {
    document.querySelector('.out_1').textContent = n**2; // это не чистая ункция, она вносит изменения в состояние, если елемент не найден будет ошибка и тд. Потенциально больше багов
}
squad2(5);

// Чистая функция позволяет потенциально уменьшить кол багов, есть возможность свести функцию к чистой, сводите.

let count = 0;

function myCount() {
    return count++;
}
// console.log(myCount());
// console.log(myCount());
// console.log(myCount());

function showAlert() {
    alert('Hello Baby')
}
// showAlert();
//Если есть побочный еффект( вывод на страницу и тд) функция не является чистой

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
for (let i = 0; i < 20; i++) {
    console.log(randomInt(10, 20));
}