function getRandomColor() {
    return 'rgb(' +
    Math.round(Math.random() * 255) +
    ', ' +
    Math.round(Math.random() * 255) +
    ', ' +
    Math.round(Math.random() * 255) +
    ')'
}
const itemEls = document.querySelectorAll(".item")
for (const item of itemEls) {
    console.log(item.style.backgroundColor = getRandomColor());
    item.style.backgroundColor = getRandomColor()
}
