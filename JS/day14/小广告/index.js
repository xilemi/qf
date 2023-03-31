let timer = null;
let timer1 = null;
const adver = document.createElement('div')
const adverTop = document.createElement('div')
const adverDetail = document.createElement('div')
const adverTitle = document.createElement('div')
const adverClose = document.createElement('div')
const img = document.createElement('img')
function loop(i) {
    timer = setTimeout(function () {
        let count = i;
        createEle(count)
        adverTitle.innerHTML = `距离广告关闭还有${count}秒`
        console.log(count);
        timer1 = setInterval(function () {
            console.log(count);
            count--
            adverTitle.innerHTML = `距离广告关闭还有${count}秒`
            if (count <= 0) {
                clearInterval(timer1)
                adver.remove()
                loop(i)
            }
        }, 1000)
    }, 5000)
}

adverClose.onclick = function () {
    adver.remove()
    clearTimeout(timer)
    clearInterval(timer1)
    loop(i)
}

// 自动生成元素
function createEle(i) {
    adver.className = 'adver'
    adverTop.className = 'adver-top'
    adverDetail.className = 'adver-detail'
    adverTitle.className = 'adver-title'
    adverClose.className = 'adver-close'
    adverClose.innerHTML = 'X'
    adverTitle.innerHTML = `距离广告关闭还有${i}秒`
    img.src = './images/111.gif'
    document.body.append(adver)
    adver.append(adverTop)
    adver.append(adverDetail)
    adverTop.append(adverTitle)
    adverTop.append(adverClose)
    adverDetail.append(img)
}