//https://blog.csdn.net/weixin_52858303/article/details/127825249

/*解构赋值 
 */
let options = {
	title: 'Menue',
	width: 100,
	height: 200
};
let {title, width, height} = options;

let [a, b, c, d, e, f] = ['张飞', '赵云', '关羽', '张辽', '许褚', '典韦']

/*新的变量关键字 
 */
let  const
/* 新增了模块化（import / export）
 */

/*扩展运算符的主要作用是将一个数组转为用逗号分隔的参数序列，它好比 rest 的逆运算
*/ 
//传递数据代替多个字符串的形式
function  test(a,b,c){
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
}
var arr = [1, 2, 3];
test(...arr);
//将一个数组插入到另一个数组中
var arr1 = [1,2,3];
var arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]
//字符串转数组
var str = 'hello';
var arr3 = [...str];
console.log(arr3); // ["h", "e", "l", "l", "o"]

/*剩余运算符的主要作用把用逗号隔开的值序列组合成一个数组
*/ 
//当函数参数个数不确定时，用 rest运算符
function f1(...args) {
  console.log(args); // [1,2,3]
}

f1(1,2,3);

//当函数参数个数不确定时的第二种情况
function f2(item, ...arr) {
  console.log(item); // 1
  console.log(arr);  // [2,3]
}
f2(1, 2, 3);

//rest运算符配合 解构使用
let [a,...temp]=[1, 2, 4];
console.log(a);    // 1
console.log(temp); // [2,4]

/* class 关键字
https://blog.csdn.net/qq_45313933/article/details/128646834
 */
// 定义一、类的声明
class Person {
	 // 类的构造方法
	  // 注意: 一个类只能有一个构造函数
	  // 1.在内存中创建一个对象 moni = {}
	  // 2.将类的原型prototype赋值给创建出来的对象 moni.__proto__ = Person.prototype
	  // 3.将对象赋值给函数的this: new绑定 this = moni
	  // 4.执行函数体中的代码
	  // 5.自动返回创建出来的对象
	constructor(name, age) {
	    this.name = name
	    this.age = age
	},
	//实例方法
	eating() {
		console.log(this.name + " eating~")
	},
	// 类的静态方法(类方法)
	static randomPerson() {
		var nameIndex = Math.floor(Math.random() * names.length)//随机数字
		var name = names[nameIndex]
		var age = Math.floor(Math.random() * 100)//随机年龄
		return new Person(name, age)
	}
}

// Student称之为子类(派生类)
class Student extends Person {
	  // JS引擎在解析子类的时候就有要求, 如果我们有实现继承
	  // 那么子类的构造方法中, 在this之前一定要用super
	  constructor(name, age, sno) {
	    super(name, age)//super的使用
	    this.sno = sno
	}
}

/* es5 的类的声明
 
 */
function aaa(type){
    this.type = type
}

let dog = new aaa("dog")
//aaa ->{type: 'dog'}

dog.constructor == aaa