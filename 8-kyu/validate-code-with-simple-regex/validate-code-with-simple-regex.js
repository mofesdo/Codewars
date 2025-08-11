function validateCode (code) {
//your code here
  const regex = /^[123]\d/;
  return regex.test(code);
}