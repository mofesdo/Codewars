/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url){
    //regex to get rid of https:// and http://
    let domain = url.replace(/(^\w+:|^)\/\//, '');
    //split string into array to isolate www and domain
    domain = domain.split(".");
    console.log(domain);
    if(domain[0] == "www"){
      return domain[1];
    }
    else{
      return domain[0];
    }
  }