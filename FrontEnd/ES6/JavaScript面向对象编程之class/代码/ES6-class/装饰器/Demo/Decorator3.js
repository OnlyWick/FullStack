/**
 * 
 * @param {*} target ：情况一：作用于类
 */
function Decorator(target, prop, descriptor) {
    console.dir(target)
}
@Decorator
class Person {
    
    demo = 123;
    constructor(name) {
        this.name = name;
    }
    writeCode() {
        console.log(`${this.name}能写出很好的代码`);
    }
}