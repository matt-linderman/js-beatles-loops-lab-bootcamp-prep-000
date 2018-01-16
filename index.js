function theBeatlesPlay(musicians,instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`
    newArray.push(string)
  }
  return newArray
}

function johnLennonFacts(arrayOfFacts) {
  var numberOfFacts = arrayOfFacts.length
  while (numberOfFacts > 0) {
    arrayOfFacts[numberOfFacts] = arrayOfFacts[numberOfFacts] + "!!!"
    numberOfFacts--
  }
  return arrayOfFacts
}