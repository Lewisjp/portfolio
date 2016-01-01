function findLongestWord(str) {
  
  var allWords = str.split(" ");
  
  var longestWord = 0;
  
  for(var i = 0; i < allWords.length; i++){
    if(allWords[i].length >= longestWord){
      longestWord = allWords[i].length;
    }
  }
  
  return longestWord;
}


function palindrome(str) {
  // Good luck!
  
  str = str.replace(/[^a-z0-9]+/gi,'').toLowerCase();
  
  var stringReverse = [];

  for(var i = str.length - 1, j = 0; i >= 0; i--, j++){
   stringReverse[j] = str[i];    
  }
  
  stringReverse = stringReverse.join().replace(/[^a-z0-9]+/gi,"");

  if(str === stringReverse){
    return true;
  }else{
    return false;
  }

}

