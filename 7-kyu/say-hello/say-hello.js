function greet(name) {
  console.log(name);
  return (name!=null && name.length>0) ? `hello ${name}!` : null;
}