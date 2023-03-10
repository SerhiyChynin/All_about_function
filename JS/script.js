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

// Функция как аргумент

function showAll(result) {
    document.querySelector('.out3').innerHTML = `<b>${result}</b> `; 
    
}

function showSumAll3(drawFunction, ...num) {
    drawFunction(num);
}

showSumAll3(showAll, 45, 40, 30);                           // Передаем первым арг 45, вторым запустим функцию шоуОлл, которая принимает результат и выводит в аут
// Запускаем функцию шоуОлл в которую прилетаут параметры нум в виде массива, и выводит в аут. Если много значений будет

// Home Work



function t1 (res) {
    document.querySelector('.out5').innerHTML = res;   
}
    
function twoNumb(min, max, drawFunction2) {
    drawFunction2(Math.floor(min + Math.random() * (max + 1 - min)));
}


twoNumb(10, 20, t1);

document.querySelector('.b2').addEventListener('click', t1);




//Return, прерывание функции, return и, возвращение функции

function t1(x, y) {
    return x + y;
}

console.log(t1(10, 20) + t1(5, 15));

document.querySelector('.b2').onclick = document.querySelector('.out5').innerHTML = t1(10, 20) + t1(5, 15) + t1(0, 1);

function randInt(min, max) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    return Math.floor(rand)
}
console.log(randInt(10, 20));
document.querySelector('.out5').textContent = randInt(20, 100);
document.querySelector('.out5').style.background = 'rgb(10, 55, 123)';
document.querySelector('.out5').style.background =
    `rgb(${randInt(0, 255)}, ${randInt(0, 255)},${randInt(0, 255)})`;  //Используем функцию для рандомного выбора цвета для вывода
// С ретерном можно использовать результат функции много раз, переиспользовать много раз

// Вывод данных введенных пользователем

document.querySelector('.b3').addEventListener('click',  () => {
    const s = document.querySelector('input').value;
    document.querySelector('.out6').innerHTML = 'Hello ' + clearText(s);

    console.log('Hello ' + clearText(s));
})

function clearText(data) {
    return data.trim().toLowerCase();      // Очищаем строку, делая все буквы маленькие и используем эту функцию в выводе данных благодаря return. Вернул результат функции и подставляем в нее данные которым применяем этот результат
}

function t4() {
    console.log(1);
    console.log(2);
    return;
    console.log(3);
}
t4();

// Прерывание функции
// эмулируем indexOf

function indexOfEmul(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return i;
    }
    return -1;
}

let result = indexOfEmul([22, 33, 44, 55], 22);
console.log(result);

//Пользователь вводит возраст
document.querySelector('.b4').addEventListener('click', () => {
    let year = +document.querySelector('.inpt').value;
    if (isNaN(year)) return;
    if (year <= 0 || year > 100) return;
    document.querySelector('.out7').innerHTML = 2023 - year;
})

// ex 5 сумма
console.group('example 5');

const arr5 = [
    [3, 4, 5],
    [6, 7, 8],
    
]
function t5() {
    let s = 0;
    for (let i = 0; i < arr5.length; i++) {
        console.log(arr5[i]);
        s += sum(arr5[i]); 
    }
    return s;
                                                        // Это ценный пример с точки зрения разбора рекурсии его нужно понимать.
}
function sum(arr) {
    let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
          sum += arr[i];
    }
    return sum;
}

console.log(t5())
console.groupEnd();

// ex 6 сумма
console.group('example 6');

function t6() {
    let a = 88;
    return a;                              //return не любит переносі на другую строку, если нужно длинное віражение пишите return (
                                           // выражение) иначе ошибка. 
}
console.log(t6());

console.groupEnd();

// ex 7 return
console.group('example 7');

const arr7 = [[1, 2, 3], [45, 67], [34, 6, 87, 9, 0], [2, 3]];
const evenArr7 = arr7.filter(item => {
    return (sum(item) % 2 === 0);
})
console.log(evenArr7);

console.groupEnd();


// ex 7 return function

function t8() {
    return sum;
    
}

let s = t8();
console.log(s([10,20,30]));

// Home Work


function f1(a,b) {
    return a + b;
}
console.log(f1(45, 50));

function f2(a, b) {
    if (a > b) return a;
    return b;
}
console.log(f2(55, 50));

let ch3 = document.querySelector('.ch3'); 
    function checkBox() {
        if (ch3.checked) { return true }
        else {
            return false;
        }
        
}
console.log(checkBox());
document.querySelector('.b5').addEventListener('click', checkBox)

// console.log(checkBox());





