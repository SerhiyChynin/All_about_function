// Функцию можно вызвать еще до ее обьявления и она будет рабоать если она прописана ниже.
// JS читает весь код, определяет наличие всех функций и использует их в любом участке кода.
// Также функцию можн вызвать внутри другой функции, это удобно. 

function testFunction() {
    const x = 5;
    const y = 10;
    console.log(x+y);
}

function hello() {
    console.log('Hello');
    testFunction();
    console.log('again');
}

function Test2() {
    function t3() {
        console.log('t3 - work');
    }
    t3();
    console.log('test2 - work');
}
Test2();                    // - t3 видна только внутри функции тест2 если вызвать т3 за пределами тест2 будет ошибка,
                            //  такой функции не существует
testFunction();
hello();

function unixTime() {
    let time = Math.floor(new Date().getTime());
    console.log(time);
}
unixTime();

// rand();

let min = 100;
let max = 200;

function rand() {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
    document.querySelector('div').innerText = rand;
    
}
rand();

// Функция - блок кода в джава скрип который имеет название и может вызываться повторно, Функция может быть определена один раз.
// Если ниже написать функцию с таким же именем то вышестоящая перезапишеться и все вызовы в любой части кода будут вызывать последнюю. Кто последний того и тапки.
// Фуецкия зависящая от внешних переменных не может быть вызвана до обьявления этих переменных. Будет ошибка

min = 17;
max = 32;
rand();

let c = 9;
function count() {
    c = c + 1;
    console.log(c);
    document.querySelector('div').innerText = c;
}
    
count();
count();
count();

document.querySelector('.out1').addEventListener('mousemove', blockWidth);
// Добавляем событие и пишем имя функции без круглых скобок.
// Если будут круглые скобки функция выполнится один раз при первом запуске джава скрипт и все. 
// Без скобок будет запускаться столько сколько будет происходить событие.
document.querySelector('.out1').onclick = count; 

let w = 100;
function blockWidth() {
    w++;
    document.querySelector('.out1').style.width = w + 'px';
}

// Home Work
function getRandomInt() {
    let max = 132;
    let min = 117;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
    document.querySelector('.out2').innerText = rand;
}
getRandomInt();
function getRandomInt2() {
    min = Math.ceil(117);
    max = Math.floor(132);
    let rand = Math.floor(Math.random() * (max - min)) + min;
    document.querySelector('.out3').innerText = rand;

}
getRandomInt2();

document.querySelector('.b1').onclick =  function t3() {
    function hello() {
    document.querySelector('.out4').innerHTML = 'Hello' + '<br/>';
    }
    function Y2023() {
    document.querySelector('.out4').innerHTML += '2023';

    }
    hello();
    Y2023();
}


// Arguments

function f1(a, b, c) {
    
}

function sum(x, y) {            // x,y - формальные аргументы, пока она ничему не равна, чтобы выполнить нужно подставить реальные параметры при вызове функции
    
    console.log(x + y);
    
}

sum(45, 55);
sum(100, 255);  
let z = 50;
sum(z, 10);
sum(z, z * 2);
 // аргументы дают нам гибкость, можем подставлять любые значения и выводить функцию в любом месте, будет работать
sum(1, 2, 3, 45, 5);                                    //выведет только 2 аргумента
sum(4);                                                 //Nan 4 + у будет не число

function sum2(x1 = 20, y1 = 0) {
    console.log(x1 + y1);
}
sum2(5);                                                //Параметры по умолчанию дают возможность использовать более гибкий код. Первый аргумент подставился второй взяло у = 0 и посчитало
sum2();

function showSum(elem, x, y) {
    document.querySelector(elem).textContent = x + y; 
}

showSum('.out1', 3, 6);                                 //elem - out1, x = 5, y = 6;


function showSum2(elem, x, y) {
    elem.textContent = x + y; 
}
const out = document.querySelector('.out2');
showSum2(out, 30, 30);                                  // Можно так записать, по сути тоже самое


function showSum3(x, y, elem = '.out1') {               // такая запись дает возможность задать параметр по умолчанию, чтобы пользователь мог их пропустить, выносим их в конец. Джава по порядку подставляет арг, в конце заданый аргумент если не зададут он останеться по дефолту
    console.log(arguments);                             //Arguments спец переменная, которая имеет конструкцию похожую на массив в котором собраны все елементы, арументы передаваемые внутри функции. 
    document.querySelector(elem).textContent = arguments[0] + y; //arg[0] это тот же х; 
}
showSum3(20, 20);

function showSum4() {               
    console.log(arguments);
    document.querySelector(arguments[2]).textContent = arguments[0] + arguments[1];  
}
showSum4(10, 20, '.out3');                               //Так писать не стоит, тяжело читать но так можно делать. Удобно когда не знает сколько значений прилетит.

function showSumAll() {
    console.log(arguments);
    // let sum = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }
    let sum = Array.from (arguments).reduce((accum, item) => accum += item); //arguments не массив поєтому преобразовіваем в массив после чего перебираем редьюсом.
    console.log(sum);
}

showSumAll(4,5,6,7)

function showSumAll2(...args) {
    console.log(args);
    let sum = args.reduce((accum, item) => accum += item); //в ES6, в args заносятся значения в виде массива, можно работать, просто и красиво
    console.log(sum);
}
// Смотрю на функцию, вижу что туда передаються аргументы, ... не важно сколько аргументов я передам, все они в виде массива попадут в переменную аргс, можем использовать.

showSumAll2(43, 5, 6, 7, 45, 34, 24);


