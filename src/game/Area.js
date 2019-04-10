import m from './types/monsters.json';
import Monster from './Monster';
import { roll } from './utils.js';

// this seems unnecessary
let monsters = [];

for (const monster in m["common"]) {
    monsters.push(m["common"][monster]);
}

export default class Area {
    constructor(options) {
        this.name = options.name;
        this.act = options.act;
        this.level = options.level ? options.level : 1;
        this.monstersAmount = options.monsters ? options.monsters : 5;
        this.uniques = options.uniques ? options.uniques : [];

        this.monsters = [];
    }

    generateMonsters() {
        const monstersInLevelRange = monsters.filter(m => { return m.minlevel <= this.level});
        for (let i = 1; i <= this.monstersAmount; i++) {
            let randomMob = monstersInLevelRange[Math.floor(Math.random() * monstersInLevelRange.length)];

            this.monsters.push(new Monster({
                type: randomMob.type,
                name: randomMob.name,
                rarity: 'normal',
                level: this.level,
                hp: randomMob.hp,
                gold: randomMob.gold,
                image: randomMob.image,
            }));
        }

        if (this.uniques.length > 0) {
            for (const unique of this.uniques) {
                let uniqueData = m['uniques'][unique];

                this.monsters.push(new Monster({
                    type: uniqueData.type,
                    name: uniqueData.name,
                    rarity: 'unique',
                    level: this.level + roll(3),
                    hp: uniqueData.hp,
                    gold: uniqueData.gold,
                    image: uniqueData.image
                }));
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
