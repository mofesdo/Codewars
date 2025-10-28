function Dog(name) {
  this.name = name;
}
​
// Add bark method to Dog prototype
Dog.prototype.bark = function() {
  return "Woof";
};
​
let snoopy = new Dog("Snoopy");
let scoobydoo = new Dog("Scooby Doo");
​
console.log(snoopy.bark());    // "Woof"
console.log(scoobydoo.bark()); // "Woof"
​