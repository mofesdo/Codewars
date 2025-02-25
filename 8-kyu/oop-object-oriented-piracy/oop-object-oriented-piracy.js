class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  
  //YOUR CODE HERE...
  isWorthIt(){
    if(this.draft - (this.crew * 1.5) > 20){
      return true;
    }
    return false;
  }
  
}