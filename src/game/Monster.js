export default class Monster {
    constructor(type, rarity, level, hp, dropGold) {
        this.type = type;
        this.rarity = rarity;
        this.level = level;
        this.dropGold = dropGold;

        if (this.level === 1) {
            this.maxHp = hp;
        } else {
            this.maxHp = hp * (this.level * 1.25);
        }

        this.hp = this.maxHp;
        this.isDead = false;

        this.generateName();
    }

    generateName() {
        if (this.rarity === 'magic') {
            this.name = 'prefix ' + this.type + ' of the suffix';
        } else if (this.rarity === 'rare') {
            this.name = 'Composed Tag ' + this.type;
        } else {
            this.name = this.type;
        }

        return this.name;
    }

    damage(dmg) {
        if (this.isDead === true) {
            return;
        }

        if (this.hp - dmg <= 0) {
            this.hp = 0;
            this.isDead = true;
            return;
        }

        this.hp -= dmg;
    }

    getGoldDrop() {
        return Math.floor(this.dropGold) * (this.level * 1.18);
    }
}
