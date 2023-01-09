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

