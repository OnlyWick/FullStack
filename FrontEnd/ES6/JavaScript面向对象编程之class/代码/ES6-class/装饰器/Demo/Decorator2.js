/**
 * 
 * @param {*} target ：所作用的对象
 * @param {*} prop ：作用的成员名
 * @param {*} descriptor ：属性描述符
 */
function writeBug(target, prop, descriptor) {
    console.log(target);
    console.log(prop);
    console.log(descriptor);
    // 存储原来的函数
    let value = descriptor.value;
    // 重写value
    descriptor.value = function() {
        console.error(`↓↓↓别听${this.name}的吹牛，他就是一Bug工程师`);
        value.call(this);
    }
}
class Person {
    
    constructor(name) {
        this.name = name;
    }
    @writeBug
    writeCode() {
        console.log(`${this.name}能写出很好的代码`);
    }
}
const wick = new Person("Wick");
wick.writeCode();