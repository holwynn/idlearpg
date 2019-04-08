import m from './types/monsters.json';
import Monster from './Monster';

// this seems unnecessary
let monsters = [];

for (const monster in m["common"]) {
    monsters.push(m["common"][monster]);
}

export default class Area {
    constructor(name, act, monstersAmount = 15, level = 1, uniques = []) {
        this.name = name;
        this.act = act;
        this.level = level;
        this.monstersAmount = monstersAmount;
        this.uniques = uniques;

        this.monsters = [];
    }

    generateMonsters() {
        const monstersInLevelRange = monsters.filter(m => { return m.minlevel <= this.level});

        for (let i = 1; i <= this.monstersAmount; i++) {
            let randomMob = monstersInLevelRange[Math.floor(Math.random() * monstersInLevelRange.length)];
            this.monsters.push(new Monster(randomMob.name, 'normal', this.level, randomMob.hp, randomMob.gold));
        }

        if (this.uniques.length > 0) {
            for (const unique of this.uniques) {
                let u = m['uniques'][unique];
                console.log(u);
                this.monsters.push(new Monster(u.name, 'unique', this.level, u.hp, u.gold));
            }
        }
    }

    getMonsters() {
        return this.monsters;
    }

    getCurrentMonster() {
        return this.monsters[0];
    }

    killCurrentMonster() {
        if (this.monsters.length === 0) {
            this.completed = true;
            return;
        }

        return this.monsters.shift();
    }
}
