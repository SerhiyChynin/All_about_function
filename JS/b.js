
(function () {
    let p = 60;
    let q = document.querySelector('.b_2');
    q.onclick = () => {
        p = p + 10;
        console.log('work q 2: ' + p);
    }
})();   //упрощенный вар, анонимная функция, берем в скобки и вконце вызываем. Чтобы не писать обертки и на загрязнять область видимости
