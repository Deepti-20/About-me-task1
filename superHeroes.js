var superMan={
    name:"superman",
    power:"light",
    costumeColour:"blue",
    strength:10000
}

var batMan={
  name:"batman",
  power:"martial arts",
  costumeColour:"black",
  strength:100
}
// console.log(superMan.strength)
// console.log(batMan.strength)
// console.log(superMan.strength>batMan.strength)

var superHeroes=[superMan,batMan]
for (var i=0; i<superHeroes.length; i++){
  var currentHero=superHeroes[i];
  console.log(currentHero.name)
  console.log(currentHero.costumeColour)
  console.log("---------------------")
}