
/* Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.
*/
function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let rna = ""
    for(let i = 0; i < dna.length; i++){
      if(dna[i] == "T"){
        rna = rna + "U" 
      }
      else{
        rna = rna + dna[i]
      }
    }
    return rna
  }