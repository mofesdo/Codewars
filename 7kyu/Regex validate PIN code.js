/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */

function validatePIN (pin) {
    //return true or false
    let num = Number(pin);
      console.log(pin);
    console.log(pin.length)
      console.log(num);
    if(num === NaN || !num.isInteger || num < 0){
      return false;
    }
    console.log(pin.length)
    return pin.length == 4 || pin.length == 6;
  }