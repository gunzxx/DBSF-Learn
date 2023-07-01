const Tiger = require("./Tiger.js");
const Wolf = require("./Wolf.js");

const fighting = (tiger, wolf) => {
    console.log(wolf.strength, typeof wolf.strength);
    console.log(tiger.strength, typeof tiger.strength);
    if (tiger.strength < wolf.strength) {
        return tiger.growl();
    }
    else if (tiger.strength > wolf.strength) {
        console.log("OKE");
        return wolf.howl();
    }
    return console.log('Tiger and Wolf have same strength');
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);
