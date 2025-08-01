String.prototype.digit = function() {
  let regex = /^\d$/;
  return regex.test(this);
};