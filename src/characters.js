export class Character {
    constructor (name, type, attack, defence) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('invalid name lenght');
        }
        const typeValid = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!typeValid.includes(type)) {
            throw new Error('Invalid type');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }
}