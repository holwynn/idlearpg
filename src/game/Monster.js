export default class Monster {
    constructor(options) {
        this.type = options.type;
        this.rarity = options.rarity;
        this.level = options.level;
        this.gold = options.gold;
        this.image = options.image;

        if (this.level === 1) {
            this.maxHp = options.hp;
        } else {
            this.maxHp = options.hp * (this.level * 1.25);
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
        return Math.floor(this.gold) * (this.level * 1.18);
    }
}
