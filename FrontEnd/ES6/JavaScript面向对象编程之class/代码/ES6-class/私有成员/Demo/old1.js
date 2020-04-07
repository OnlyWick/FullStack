class Counter {
    #xValue = 0;

    add() {
        console.log(++ this.#x);
    }
    print() {
        console.log(`最终结果为: ${this.#x}`);
    }
    get #x() { return this.#xValue; }
    set #x(value) {
        this.#xValue = value;
    }
}

const c1 = new Counter();
c1.add();
c1.add();
c1.add();
c1.print();