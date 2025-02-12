/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
*/
function dnaStrand(dna){
    let comp = ""
    for(let i = 0; i < dna.length; i++){
      if(dna[i] == "A"){
        comp = comp + "T"
      }
      if(dna[i] == "T"){
        comp = comp + "A"
      }
      if(dna[i] == "G"){
        comp = comp + "C"
      }
      if(dna[i] == "C"){
        comp = comp + "G"
      }
      
    }
    return comp
  }