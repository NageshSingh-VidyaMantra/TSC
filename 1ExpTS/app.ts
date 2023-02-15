(function () {
    function Person(first: string, last: string, age: number) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

    const myFather = new Person("John", "Doe", 50);
})();
