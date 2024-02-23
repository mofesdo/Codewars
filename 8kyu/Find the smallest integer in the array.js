//Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
    findSmallestInt(args) {
      console.log(args)
      for(let i = 0; i < args.length;i++){
        for(let j = 0; j < args.length;j++){
          if(args[i] < args[j]){
            let temp = args[i];
            args[i] = args[j];
            args[j] = temp
          }
        }
      }
      return args[0]
    }
  }