//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
function removeUrlAnchor(url){
    // TODO: complete
    for(let i = 0; i < url.length; i++){
      if(url[i] == "#"){
        return url.slice(0,i)
      }
    }
    return url
  }