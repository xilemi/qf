function move(ele, attribute,end, type, callback) {
    let speed = 0
    let first = getStyle(ele, attribute)
    clearInterval(ele.timer)
    ele.timer = setInterval(function () {
        if (type == 'liner') {
            if (end > first) {
                speed = 10
            }
            else if (end < first) {
                speed = -10
            }
            else {
                speed = 0
            }
        } else if (type == 'ease-in') {
            if (end > first) {
                speed++
            }
            else if (end < first) {
                speed--
            }
            else {
                speed = 0
            }
        } else if(type == 'ease-out') {
            if (end > first) {
                speed = (end - first) / 10
                speed = Math.ceil(speed)
            }
            else if (end < first) {
                speed = (end - first) / 10
                speed = Math.floor(speed)
            }
            else {
                speed = 0
            }
        }
        first += speed
        ele.style[attribute] = first + 'px'
        if (Math.abs(end - first) <= Math.abs(speed)) {
            clearInterval(ele.timer)
            ele.style[attribute] = end + 'px'
            if (callback && typeof callback == 'function') {
                callback()
            }
        }
    }, 10)
}
function getStyle(ele, attribute) {
    return parseFloat(getComputedStyle(ele)[attribute])
}