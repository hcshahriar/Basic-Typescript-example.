class Person {
  
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

 
  describe(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

const alice = new Person("Shahriar", 69);
console.log(alice.describe()); // "Shahriar is 69 years old."
