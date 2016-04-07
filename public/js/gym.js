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


// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function makeSingleArrayTwoDimensionalArray(arr, size) {
  
  var miniArr = arr.length/size;
  //console.log(miniArr);
  var newArr = [];
  
  for(var x = 0; x < arr.length - 1; x += 1){
    console.log("Outer loop, iteration #"+x);
    var tempArr = [];
    // Number of times we loop is the max number of subarrays 
    for(var y = 0; y < miniArr; y++){
      //console.log("Starting arr is "+arr);
      // Start slice to return first index up to size
      newArr.push(arr.slice(0,size));
      // Remove starting index up to size by returning size up to last index
      arr = arr.splice(size,arr.length);
      //console.log("Inner loop, iteration #"+y);
      //console.log("Ending arr is "+arr);
      //console.log("Temp arr is "+tempArr);
    }

  }
  
  return newArr;
}


function removeFirstXelements(arr, howMany) {
  
  arr = arr.slice(howMany, arr.length);
  
  return arr;
}


function lettersSecondInFirstWord(arr) {
  // Goal - Return true if the string in the first element 
  // of the array contains all of the letters of the string 
  // in the second element of the array.
  

  
  //Make sure both entries are comparable case 
  for(x = 0; x < arr.length; x++){
    arr[x] = arr[x].toLowerCase();
  }
  
  
  //Check if the letters of the second word are in the first
  for(x=0; x< arr[1].length; x++){
    if(arr[0].indexOf(arr[1][x]) == -1){
        return false;
    }
  }
  
  if(arr.length > 2){
    console.log(arr.length);
    return "This method is for an array of 2 elements.";
  }
  
  return true;
}


function bouncer(arr) {
  // Don't show a false ID or empty to this bouncer.
  
  function notFalse(value){
    if(value !== false || value == "" )
       return value;
  }
  
  arr = arr.filter(notFalse);
  
  return arr;
}

//practice with arguments and filters
// Remove all the values after the array
function destroyer(arr) {

    function removeIt(value){
        return value != removedItem;
        
    }  
  
    for(var x = 1; x < arguments.length; x++){  
        var removedItem = arguments[x];
        var arr = arr.filter(removeIt);
    }

  
  return arr;
}


function blackjackCounter(){
var count = 0;

  function cc(card) {
    switch(card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count += 1;
        break;
      case 7:
      case 8:
      case 9:
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count -= 1;
        break;
    }
    var decision = "";
    if(count > 0){
      decision = "Bet";
    }else{
      decision = "Hold";
    }
    
    return count + " " + decision;
  }
}

function where(arr, num) {
  // Put arr in numerical order and find the num placement.
  // sort is meant for strings so you need to add a function to sort so it works with numbers
  arr[arr.length] = num;
  arr = arr.sort(function(a,b){return a-b});
  
  
  for(var x = 0; x < arr.length; x++){
    if(arr[x] === num){
      return x;
    } 
  }
}


// Find the sum of all the numbers between the smallest and largest
function sumAll(arr) {

  //order numbers in the array from smallest to largest
  arr = arr.sort(function(a,b){
    return a-b;
  });
  console.log(arr);
  
  var countIt = 0;

  for(var i = arr[0]; i <= arr[arr.length-1]; i++){
    countIt += i;
  console.log(countIt);
  }

  return countIt;
}


function diffBtArray(arr1, arr2) {

  var finalAnswer = [];

  for(var i = 0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i]) == -1){
      finalAnswer.push(arr1[i]);
    }
  }

  for(var x = 0; x < arr2.length; x++){
    if(arr1.indexOf(arr2[x]) == -1){
      finalAnswer.push(arr2[x]);
    }   
  }
  
  return finalAnswer;
}


function convertToRomanNum(num) {
  var romanNum = [];

  for(var m = 0; m < Math.floor(num/1000); m++){
    romanNum.push("M");
  } 
  
  num = (num - (Math.floor(num/1000) * 1000));

  for(var d = 0; d < Math.floor(num/500); d++){
    romanNum.push("D");
  } 
  
  num = (num - (Math.floor(num/500) * 500));
  
  for(var c = 0; c < Math.floor(num/100); c++){
    romanNum.push("C");
  } 

  num = (num - (Math.floor(num/100) * 100));
  
  for(var l = 0; l < Math.floor(num/50); l++){
    romanNum.push("L");
  } 

  num = (num - (Math.floor(num/50) * 50));
  
  
  console.log(Math.floor(num/10));
  for(var x = 0; x < Math.floor(num/10); x++){
    romanNum.push("X");
  }

  num = (num - (Math.floor(num/10) * 10));
  
  for(var v = 0; v < Math.floor(num/5); v++){
    romanNum.push("V");
  }

  num = (num - (Math.floor(num/5) * 5));
  

  for(var i = 0; i < num; i++){
    romanNum.push("I");
  }

  num = (num - num);  

  
  return romanNum.join('');
}