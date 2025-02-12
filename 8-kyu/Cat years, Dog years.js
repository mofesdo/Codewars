/* I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]
*/
//this is filler. i will do an extra codewars when done
var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let dogYears = 0;
    let catYears = 0;
    for(let i = 1; i <= humanYears; i++){
      if(i == 1){
        catYears = catYears + 15;
        dogYears = dogYears + 15;
      }
      else if(i == 2){
        catYears = catYears + 9;
        dogYears = dogYears + 9;
      }
      else{
        catYears = catYears + 4;
        dogYears = dogYears + 5;
      }
    }
    return [humanYears,catYears,dogYears];
  }
  