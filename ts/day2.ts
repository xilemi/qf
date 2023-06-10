// 类型推断    字面量类型
// 数组类型的指定 string[]  字符串数组
let arr: string[] = ["123", "234"]
// 报错 虽然可以插入
arr.push(123)
console.log(arr);
// 泛型写法   Array<类型>
