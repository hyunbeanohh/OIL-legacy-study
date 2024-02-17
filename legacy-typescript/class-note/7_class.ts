class Person {
    private name: string;
    public age: number;
    readonly log : string; // 읽기만 할 수 있고 값을 변경 못함.
    constructor(name: string,age: number) {
        this.name = name;
        this.age = age;
    }
}
