class Counter {
    static #Demo() {
        return "Counter";
    }
    static getMyName() {
        return Counter.#Demo();
    }
}
Counter.#Demo();