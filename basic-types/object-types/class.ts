class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Merhaba, benim adım ${this.name} ve ben ${this.age} yaşındayım.`);
    }
  }