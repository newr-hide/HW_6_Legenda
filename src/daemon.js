import Character from './characters.js';

export default class Daemon extends Character {
    constructor(name, health, level) {
        super(name, 'Daemon', health, level);
        
        this.attack = 10;
        this.defence = 40;
    }
}

// const x = new Daemon('Ali');
// console.log(x);