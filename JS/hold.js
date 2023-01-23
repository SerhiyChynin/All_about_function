

let a = 10;

function f1(){
    console.log('(Global) a = ' + a);    
}
// f1();
a = 99;
// f1();

function f2() {
    let a = 33;
    console.log('(Local) a = ' + a);
}
// f2();


function closing(т = 0) {
let count = т;
  return function() {
    count++;
    console.log(count);
    }

}
// closing();
// let step1 = closing();
// let step2 = closing(100);
// step1();
// step1();
// step2();
// step1();
// step1();

//Замыкание - это когда создается функция внутри которой помещаються нужные данные и способы манипулирования ними. Создается отднльная область видимости.

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

function createBagger() {
let m = 0;
 return function bagger() {
    m += randomInteger(0, 100);
    console.log(m);
    if (m >= 250) return;
    bagger();
}}

let bagg = createBagger();
let bagg2 = createBagger();
// bagg();
// bagg2();

let p;


(function () {
    let w = 70;
    let h = 30;
    let b = document.querySelector('.b_3');
    let click = document.querySelector('.b_4');
    b.onclick = () => {
        w = w + 1;
        document.querySelector('.out_4').style.width += a + a + 'px';
    }
    click.onclick = () => {
        h = h + 70;
        document.querySelector('.out_4').style.height += h + h + 'px';
        console.log('Hello');
    }
})();

function sum10 () {
    let count = 0;
    return (() => {
        count++;
        console.log(count);
    
        })()
    }


let r = sum10;
r();





