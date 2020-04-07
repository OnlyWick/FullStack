class Counter {
    #xValue = 0;

    add() {
        console.log(++ this.#x);
    }
    print() {
        console.log(`最终结果为: ${this.#x}`);
    }
    get #xValue() { return this.#xValue; }
    set #xValue(value) {
        this.#xValue = value;
    }
}

const c1 = new Counter();
c1.add();
c1.add();
c1.add();
c1.print();