Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
  value: function(num) {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
      if (this[i] === num) count++;
    }
    return count;
  }
});
​