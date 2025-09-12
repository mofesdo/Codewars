function greet(language) {
  const greetings = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso"
};
  if (
    !language ||
    language === "IP_ADDRESS_INVALID" ||
    language === "IP_ADDRESS_NOT_FOUND" ||
    language === "IP_ADDRESS_REQUIRED"
  ) {
    return greetings.english;
  }
​
  // normalize input (optional, in case input comes capitalized)
  language = language.toLowerCase();
​
  // return greeting or default to English
  return greetings[language] || greetings.english;
  
}