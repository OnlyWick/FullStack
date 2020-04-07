class Person {
    #length = 10;
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    loseWeight() {
        this.#exercise();
        console.log(`啊,我从${this.weight + this.#length}斤瘦到${this.weight}斤了`);
    }
    #exercise() {
        console.log("开始锻炼")
        for (let i = 0; i < this.#length; i++) {
            this.weight--;
        }
    }
}
const p1 = new Person("Wick", 135);
p1.loseWeight();