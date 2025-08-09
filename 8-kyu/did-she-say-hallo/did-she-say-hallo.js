function validateHello(greetings) {
  const greetingsList = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  greetings = greetings.toLowerCase();
  return greetingsList.some(word => greetings.includes(word));
}