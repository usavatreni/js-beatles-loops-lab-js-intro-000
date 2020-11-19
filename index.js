const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
//create variable for empty array
var resultArray = [];

//use for loop which iterates over the array of musicians
//also loop throuh instruments
//set a variable result to hold string
//push string into the result array
//then return resultArray
function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    for(var j = 0; j < instruments.length; j++) {
      var result = musicians[i] + " plays " + instruments[j]
      resultArray.push(result)
    }
    return resultArray;
  }

}
