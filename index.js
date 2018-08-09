function dwarfRollCall(dwarves) {
  var sentence = ""
  var i = 0
  while (i < dwarves.length) {
    sentence = sentence + `${i + 1}. ${dwarves[i]} `
    i = i + 1
  }
  return sentence
}
 function summonCaptainPlanet(planeteerCalls){
  var array = []
  var i = 0
  while (i < planeteerCalls.length) {
    array.push(`${planeteerCalls[i].toUpperCase()}!`)
    i++
  }
  return array
}

 function longPlaneteerCalls(words) {
  var i = 0
  while (i < words.length) {
    if (words[i].length > 4) {
      return true
    }
    else {
      i++
    }
  }
  return false
}

 function findTheCheese (foods) {
  var cheese_array = ["cheddar", "gouda", "camembert"]
  var i = 0
  while (i < foods.length) {
    if (cheese_array.includes(foods[i])) {
      return foods[i]
    }
    else {
      i++
    }
  }
  return "no cheese!"
}
