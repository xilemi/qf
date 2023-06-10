"use strict";
/* let a: number = 1
console.log(a);
// 数组arr中的每一项限制为number
let arr: Array<number> = [12, 3, 4]
// let arr: Array<number> = [12, 3, 4,"哈哈哈"]
console.log(arr);
function fn(a: number, b: number): number | null {
    return a + b
}
console.log(fn(a, 1));
const api = (a: number, b: number): any => {
    return a + b
}
console.log(api(3, 7));
// 可以给类型起别名  应该场景主要在联合类型时  在多个地方都是联合类型都不用重新写
// 这个类型中可以有  数字  字符串 对象 数组(数组还需要定义数组内的类型)
type arrType = string | number | Array<number | string> | object
let newArr: arrType = [1, 2, 3, "hhh", [1, "hhh"], { name: "xile", age: 18 }]
console.log(newArr);
// 对象的类型 type 为类型起别名
// 写法一
const obj: {
    name: string,
    age: number,
    say(): string
} = {
    name: 'xile', age: 18, say() {
        return "我是" + this.name
    }
}
console.log(obj.say());
// 写法二 写一个类型别名
type personType = { name: string, age: number, say(): string }

const obj1: personType = {
    name: 'hhh', age: 29, say() {
        return "我的年龄是" + this.age
    }
}
console.log(obj1.say());
// 接口的方案  interface
interface pType {
    name: string,
    age: number,
    say(): string
}
const obj2: pType = {
    name: "jjjj",
    age: 19,
    say() {
        return this.name + this.age
    }
}
console.log(obj2.say())

/*
interface type 的区别
interface 接口 只能用于对象  但是  type 不限制
interface 可以被继承 使用extends
推荐使用  type
*/
const obj3 = {
    weight: 198,
    height: 199,
    name: "xile",
    age: 19,
    say() {
        return this.name;
    },
};
console.log(obj3.say());
// 元组 useState 的参数为number类型 范围值 为数组 下标0 为 number类型  下标1 为函数 参数类型为number 返回值为void
function useState(n) {
    const setN = (n1) => {
        n = n1;
    };
    return [n, setN];
}
const [num, setNum] = useState(10);
console.log(useState(10));
let arr3 = ["xile", 18, 19];
console.log(arr3);
arr3.push(20);
// 不能越界访问 
console.log(arr3[2]);
// 最后一个为可选元素  可写也可不写
let arr4 = ["xile", 12];
/*
字面量类型,有点枚举的意思,
const 声明的变量的值不能改变(对象类型是可以改变的),它的类型就是字面量类型
配合 联合类型 可以达到枚举的效果
*/
// str1的类型为 hhhhh
const str1 = 'hhhhhh';
// str的值只能选择 strType中的值
// const str2:strType="hhhhh"
const str3 = "xile";
console.log(str3);
/*
字面量类型和 联合类型的结合
enum 枚举名{}
分为数值枚举和字符串枚举
如果没有赋值 第一个元素为0 后续递增 赋值了 接着这个值递增
*/
// 数值枚举
var enum1;
(function (enum1) {
    enum1[enum1["girl"] = 10] = "girl";
    enum1[enum1["man"] = 1000] = "man";
    enum1[enum1["renyao"] = 1001] = "renyao";
})(enum1 || (enum1 = {}));
// 1
let person = enum1.renyao;
console.log(person);
// 字符串枚举
var enum2;
(function (enum2) {
    enum2["xile"] = "198";
    enum2["tantan"] = "2000";
})(enum2 || (enum2 = {}));
let person2 = enum2.tantan;
console.log(person2);
// any 类型 不建议使用
/*

/*
函数的类型限制 包括 对参数的限制 和返回值的限制   void 表示返回值为空  对应 undefined


*/
/*

类型推断
遵循首次赋值的类型   系统帮你限制了类型
*/
let s1 = 999
    // 不能将string 类型赋值给number
    // s1="xile"
    /*
    类型断言
    对于一个模糊的类型或者联合类型  将其人为的指定
    
    
    
    
    
    */
    * /;
