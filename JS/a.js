
function ppp() {
let p = 10;
let q = document.querySelector('.b_1');

q.onclick = () => {
    p = p + 1;
    console.log('work q 1: ' + p);
    }
}

ppp();
