// Функцию можно вызвать еще до ее обьявления и она будет рабоатьб если она прописана ниже.
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
Test2(); // - t3 видна только внутри функции тест2б если вызвать т3 за пределами тест2 будет ошибка,
        //  такой функции не существует
testFunction();
hello();

function unixTime() {
    let time = Math.floor(new Date().getTime());
    console.log(time);
}
unixTime();

function randomInt() {
    const min = 100;
    const max = 200;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
    
}

randomInt();

// Функция блок кода в джава скрип который имеет название и может вызываться повторно, Функция может быть определена один раз. 
// Если ниже написать функцию с таким же именем то вышестоящая перезапишеться и все вызовы в любой части кода будут вызывать последнюю. Кто последний того и тапки.