function sum (a, b) {
    return a + b;
}

function multi(a,b) {
    return a * b;
}

document.querySelector('.b_1').addEventListener('click', () => {
    let res = sum(23, 32);
    document.querySelector('.out_1').innerHTML = res;
})

// Запуск двух функций


document.querySelector('.b_2').addEventListener('click', () => {         //вывод на страницу 2 функций
    let res = sum(23, 32);
    document.querySelector('.out_2').innerHTML = res + ' ';
    let res2 = multi(32, 55);
    document.querySelector('.out_2').innerHTML += res2;
})

// callback

const ar1 = [4, 5, 6, 7, 8];

function pow2(a) {
    return a ** 2;
}

const res1 = ar1.map(pow2);        // map перебирает каждый елем массива и к нему применяет функцию указаную в скобках
console.log(res1);

const res2 = ar1.map((a) => {
    return a ** 3;
})
console.log(res2);
// сокращенній синтаксис стрелочной функции, если одна строка можно убрать {} и  return
// если один аргумент то можно убрать () вокруг аргумента

const res3 = ar1.map((a) => a ** 3);
const res4 = ar1.map(a => a ** 4);
console.log(res3);
console.log(res4);

// filter
const res5 = ar1.filter((item, index) => {
    if (index % 2 === 0) {
        return true;
    }
})
console.log(res5);
// пишем упрощенную стрелочную фунцкию

const res6 = ar1.filter((item, index) => (index % 2 !== 0));
console.log(res6);


document.querySelector('.b_3').addEventListener('click', function () {
    console.log(this);
})
document.querySelector('.b_3').addEventListener('click', () => {         //вывод на страницу 2 функций
    console.log(this);                       //  Стрелочная функция не имеет своего this, поэтому лезет в глобальную область и берет this оттуда.
                                             // this в стрелочной функции может подвести
})
 
// arrow аргументы

const f1 = (...arg) => {                   //в стрелочной функции аргументы только так можно получить, просто(arguments) дадут ошибку
    console.log(arg);
    console.log('work');
}
f1(100, 200, 300);

// Home Work


function rez(a, b) {
    return a * b;  
}

document.querySelector('.b_3').addEventListener('click', () => {
    
    let r = rez(5, 6);
    let r2 = rez(15, 16);
    document.querySelector('.out_5').innerHTML = r;  
    document.querySelector('.out_4').innerHTML = r2;  

});




//   Callback функции

const arr = [7, 8, 3, 4, 5];
const out1 = document.querySelector('.out1');
const out2 = document.querySelector('.out2');
const out3 = document.querySelector('.out3');

function d1(arr, myFunc, block) {
    arr[3] = arr[3] * 4;
    // out1.innerHTML = arr;
    myFunc(arr, block);
}

function showArr(arr, block) {                    //Функция шоуАрр принимает арр и блок вывода, передаем эти арр и блок внутрь функции д1, внутри первый арг это арр второй пишем переменную которая выводит на страницу аут1
    let out = '';
    for (let i = 0; i < arr.length; i++){
        out += arr[i] + ' ';
    }
    block.innerHTML = out;                  //showArr коллбек функция которую мы передали в качестве аргумента. И используется по завершению каких либо дейстий
                                            //д1 делает операцияю над указаным массивом, выводит через указаную функцию в нужный блок.
    
}

function showArr2(arr, block) {                    
    let out = '';
    for (let i = 0; i < arr.length; i++){
        out += arr[i] + ' *';
    }
    block.innerHTML = out;                  
}

d1(arr, showArr, out1);
d1(arr, showArr2, out2);


//Пример callback

function squad(item) {
    return item ** 2;
}
// const arr2 = arr.map(squad);
const arr2 = arr.map(item => item**2);
console.log(arr2);
showArr(arr2, out3);

// Пример input

document.querySelector('.b3').addEventListener('click', () => {
    getUserName(fixUserName);
});
function getUserName(fixFunc) {
    const userName = document.querySelector('input').value;
    // const userName = prompt('Enter your name: ')                     //Морально устаревшее но чтобы знали єто тоже работает.
    out3.innerHTML = fixFunc(userName);                                 //Получаем значение из инпута и запускаем коллбек функцию
}

function fixUserName(str) {
    return str[0].toUpperCase().trim() + str.slice(1).toLowerCase();
}

// асинхронные callback функции

async function pageLoader(callback) {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    callback(data);
}

function getAJAX(data) {
    console.log('Послал запрос');
    console.log('Ответ сервера');
    console.log(data);
}
pageLoader(getAJAX);
