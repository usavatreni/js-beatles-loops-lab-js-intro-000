//use for loop which iterates over the array of musicians
//also loop throuh instruments
//set a variable result to hold string
//push string into the result array
//then return resultArray
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
//create variable for empty array
var resultArray = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i <musicians.length; i++) {
    resultArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return resultArray
}
function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++
  } while (number < 15);
  return array;
}
