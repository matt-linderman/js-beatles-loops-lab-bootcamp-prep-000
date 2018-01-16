function theBeatlesPlay(musicians,instruments) {
  var newArray = []
  var musicians = [...musicians]
  for (var i = 0; i < musicians.length(); i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`
    newArray.push(string)
  }
  return newArray
}