function dwarfRollCall(dwarves) {
var numberDwarves = [];
    for (var i = 0; i < dwarves.length; i++) {
       numberDwarves.push(`${i+1}. ${dwarves[i]} `)
    }
return numberedDwarves.join('');
}

function summonCaptainPlanet(planeteerCalls){
var Planets = [];
    for (var i = 0; i < planeteerCalls.length; i++) {
        Planets.push(planeteerCalls[i].toUpperCase() +'!')
    }
return Planets;
}

function longPlaneteerCalls(words) {
return words.some(word => word.length > 4);
}

function findTheCheese (foods) {
var cheeses = ['cheddar' , 'gouda' , 'camembert'];
for (var i = 0; i < foods.length; i++) {
    for (var x = 0; x < cheeses.length; x++) {
        if (cheeses[x] == foods[i]) {
            return cheeses[x];
        }
    }
}
    return 'no cheese!'
}
