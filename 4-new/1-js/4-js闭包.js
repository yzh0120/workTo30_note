/*
https://blog.csdn.net/weixin_41192489/article/details/124312822
实现闭包最常见的方式就是函数嵌套
它的原理是吧内部函数的作用域通过return 保存到了函数外部,
好处是函数外部可以访问函数内部的变量,封装私有变量
坏处是会造成内存泄漏
*/
function a() {
    var i = '初始值';
    // 此处的函数b访问了父级函数a中的局部变量i,成为了一个闭包
    function b() {
        console.log(i)
    }
    return b;
}
a()()