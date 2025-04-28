import { Character } from "./characters";

class Bowerman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.type = 'Bowerman';
        this.attack = 25;
        this.defence = 25;
    }
}

const x = new Bowerman('wery')
console.log(x)