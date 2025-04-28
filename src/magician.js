import Character from './characters.js';

export default class Magician extends Character {
    constructor(name, health, level) {
        super(name, 'Magician', health, level);
        
        this.attack = 10;
        this.defence = 40;
    }
}

// const x = new Magician('Ali');
// console.log(x);