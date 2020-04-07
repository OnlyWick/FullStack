class Counter {
    static #Demo() {
        return "Counter";
    }
    static getMyName() {
        return Counter.#Demo();
    }
}
console.log(Counter.getMyName());