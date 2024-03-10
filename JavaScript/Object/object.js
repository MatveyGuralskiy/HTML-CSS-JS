const person = {
    name: "Steph Curry",
    job: "Basketball player",
    age: 35,
    married: true
};
console.log(person.age);
person.age = 36;
console.log(person);


const player = {
    name: "user",
    health: 100,
    attack: 30,
    level: 1,
    stats: 0,
    levelUp() {
        if (this.stats>=10) {
            this.level ++;
            return "Level Up to "+this.level;
        } else {
            return "You are in progress to reach new level";
        };
    }
};
console.log(`Name: ${player.name}, Health: ${player.health}, Attack: ${player.attack}, Level: ${player.level}, Stats: ${player.stats}, Level Up: ${player.levelUp()}`);
console.log(player.levelUp());
player.stats = 10;
console.log(player.levelUp());