/* You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
*/
function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    console.log(newArr)
    let uniq = [...new Set(newArr)];
    for(let i = 0; i < uniq.length; i++){
      for(let j = 0; j < uniq.length; j++){
        if(uniq[i] < uniq[j]){
          let temp = uniq[i]
          uniq[i] = uniq[j]
          uniq[j] = temp;
        }
      }
    }
    console.log(uniq)
    return uniq;
  }