function move() {
    const ele = document.querySelector('div')
    // 监听鼠标按下
    box.onmousedown = function () {
        window.onmousemove = function (e) {
            console.log(e.clientX);
            console.log(e.clientY);
            box.style.left = e.clientX - 100 + 'px'
            box.style.top = e.clientY - 100+ 'px'
        }
    }
    box.onmouseup = function () {
        window.onmousemove = null
    }
}