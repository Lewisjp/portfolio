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

function capitalizeEachWord(str) {
  
  str = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  
  var arr = str.split(" ");
  
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i].charAt(0));
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
  }
  
  str = arr.join(" ");  
  
  return str;
}



function largestElementOfNestedArrays(arr) {

  var largestOfArr = [];
  
  // check each nested array
  for(var k = 0; k < arr.length; k++){
    var largestElement = 0;
    
    // Check each element of nested array
    for(var v = 0; v < arr[k].length; v++){
      if(largestElement < arr[k][v]){
        largestElement = arr[k][v]; 
      }

    }

    // add largest of element of nested array to final array
    largestOfArr.push(largestElement);
  }

  return largestOfArr;
}




function convert(celsius) {
  // Only change code below this line
  var fahrenheit = celsius;
  fahrenheit *= (9/5);
  fahrenheit += 32;

  // Only change code above this line
  if ( typeof fahrenheit !== 'undefined' ) {
  return fahrenheit;
  } else {
    return 'fahrenheit not defined';
  }
}



function wordAtEndOfString(str, target) {
  for(var i = str.length -1; i >= 0; i--){
    if(str.substr(i)== target){
      return true;
    }
  }
    return false;
}

function repeatAString(str, num) {
  var finalStr = "";
  for(var i = num - 1; i >= 0; i--){
    finalStr += str;
  }
  
  return finalStr;
}

function truncateAddEllipsis(str, num) {
  // Clear out that junk in your trunk
  if(num <= 3){
    str = str.slice(0,num) + "...";
  }
  else if(str.length > num ){
    str = str.slice(0,num - 3) + "...";
  }
  
  return str;
}



