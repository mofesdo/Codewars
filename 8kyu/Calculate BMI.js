//Write function bmi that calculates body mass index (bmi = weight / height2). 
function bmi(weight, height) {
    let bmi = weight/(height*height);
    console.log(bmi)
      if(bmi <= 18.5){
        return "Underweight"
        }
    else if(bmi <= 25){
        return "Normal"
      }
      else if(bmi <= 30){
        return "Overweight"
        }
    else{
      return "Obese"
    }
  }