function palindrome(str) {
    console.log(str) //string as it was passed
    var re = /[^A-Za-z0-9]/g; //using reg as a template
    str = str.toLowerCase().replace(re, ''); //force the string to lowerCase and //apply the reg rules
   console.log(str); 
    var len = str.length;
 
   for (var i = 0; i < len/2; i++) {
     if (str[i] !== str[len - 1 - i]) {
        return false;
     }
   }
   return true;
  }
  palindrome("A man, a plan, a canal. Panama");
  
  