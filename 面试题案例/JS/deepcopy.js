let arr = [1, 2, 3, 4, [2, 4, 5], 6, 7, 8]
function deepCopy(arr) {
    let newArr = []
    arr.forEach(item => {
        if (Object.prototype.toString.call(item) == '[object Array]') {
                newArr.push(deepCopy(item))
        } else {
            newArr.push(item)
        }
    })
    return newArr
}
let res = deepCopy(arr)
console.log(arr[4]);
console.log(res[4]);
console.log(arr[4]==res[4]);