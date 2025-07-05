/* 
Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let adjec = {
    a : "Crazy",
    b : "Amazing",
    c : "Fire",
}

let shpnm = {
    a : "Engine",
    b : "Foods",
    c : "Garments",
}

let antwrd = {
    a : "Bros",
    b : "Limited",
    c : "Hub",
}

for (let ak in adjec){
    for (let sk in shpnm){
        for (let ank in antwrd){
            console.log(`${adjec[ak]} ${shpnm[sk]} ${antwrd[ank]}`);
        }
    }
}
