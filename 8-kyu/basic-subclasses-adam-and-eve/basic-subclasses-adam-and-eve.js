class God{
/**
 * @returns Human[]
 */
  static create(){
    return [new Man(), new Woman()];
  }
}
// code
class Human {
  constructor() {
    this.species = "Homo sapiens";
  }
}
​
// Subclass Man
class Man extends Human {
  constructor() {
    super();
    this.gender = "male";
  }
}
​
// Subclass Woman
class Woman extends Human {
  constructor() {
    super();
    this.gender = "female";
  }
}