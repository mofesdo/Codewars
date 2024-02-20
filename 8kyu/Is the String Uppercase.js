//Create a method to see whether the string is ALL CAPS.
String.prototype.isUpperCase = function() {
    // your code here
    console.log(this)
    console.log(this.toUpperCase())
    return this.toUpperCase() == this ? true : false 
  }