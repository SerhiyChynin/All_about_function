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


