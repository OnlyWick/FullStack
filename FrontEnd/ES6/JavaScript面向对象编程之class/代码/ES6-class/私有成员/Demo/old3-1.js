class Counter {
    #myName = "Counter";

    static getMyName(c) {
        return c.#myName;
    }
}

console.log(Counter.getMyName([]))