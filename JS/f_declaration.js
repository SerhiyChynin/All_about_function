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
// for (let i = 0; i < 20; i++) {
//     console.log(randomInt(10, 20));
// }
function year(d) {
    let today = new Date()
    let year = today.getFullYear()
    return (year - d);
}
console.log(year(2001));

//Чистые функции зависят только от аргумента и при одном и том же аргументе будут всегда давать один и тот же результат
// Не создают сайд ефектов, не меняют состояние кода, внешних переменных по отношению к текущей функции, не выводят что то на страницу


// Функции высшего порядка - функция которая может принять функцию в виде аргумента, и возвратить какую либо функцию
//Функция в ДЖС является обьектом
function hello() {
    console.log('Hello Baby');
}
hello.hi = 123;
hello();
console.log(hello.hi);

function pOdd() {
    console.log('odd');
}

function pEven() {
    console.log('even');
}

function myNumber(n, odd, even) {
    if (n % 2 === 0) return even;
    else return odd;
}

let z = myNumber(5, pOdd, pEven)
// console.log(z);
z();

const w = [
    {name: 'Serhii', 'age': 25},
    {name: 'Ser', 'age': 35},
    {name: 'Hii', 'age': 27}
]

let w1 = [];
for (let i = 0; i < w.length; i++) {
    if (w[i].age >= 26) w1.push(w[i]);
    
}
console.log(w1);

w1 = w.filter(mySort);
function mySort(item) {
    if (item.age >= 26) return true;
}
console.log(w1);

w1 = w.filter(item => item.age >= 26);
console.log(w1);

const user = {
    age: 24,
    password: 'sdjfu[21',
    agreeToTerm: true,
}
const user2 = {
    age: 34,
    password: '210qwerty',
    agreeToTerm: false,
}

function checkAge(user) {
    return user.age > 18;
}

function checkPassword(user) {
    return user.password.length >= 8;
}

function checkTerms(user) {
    return user.agreeToTerm === true;
}

// console.log(checkAge(user));

function validate(obj, ...tests) {
    for (let i = 0; i < tests.length; i++) {
        if (tests[i](obj) === false) return false;
    }
    return true;
}

console.log(validate(user, checkAge, checkPassword, checkTerms));

function createValidator(...tests) {
    return function (obj) {
            for (let i = 0; i < tests.length; i++) {
        if (tests[i](obj) === false) return false;
    }
    return true;
    }
}

const validator1 = createValidator(checkAge, checkPassword, checkTerms);
const validator2 = createValidator(checkAge, checkPassword);

console.log(validator1(user));
console.log(validator2(user2));




