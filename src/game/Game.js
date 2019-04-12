import Area from './Area';
import areaNames from './types/areas.json'
import attributes from './types/attributes.json';
import { generate_random_name, find_next_area } from './areautils';
import * as damageutils from './damageutils';

class Game {
    constructor(options) {
        this.damageutils = damageutils;

        this.level = options.level ? options.level : 1;
        this.money = options.money;
        this.doneWithCampaign = options.doneWithCampaign;
        this.farming = false;
        this.equipment = options.equipment;
        this.stats = [];

        for (const attribute in attributes) {
            this.stats[attribute] = 0;
        }

        this.cacheStats();
        this.damage = this.calculateDamage();
        this.inventory = options.inventory;
        this.generateArea();
    }

    earn(x) {
        this.money += x;
    }

    generateArea(name) {
        if (this.farming) {
            let lastArea = this.area;

            this.area = new Area({
                name: lastArea.name,
                act: lastArea.act,
                level: lastArea.level,
                uniques: lastArea.uniques
            });

        } else {
            let nextAreaData = find_next_area(name, true);
            let nextArea = areaNames[nextAreaData[1]];

            this.area = new Area({
                name: nextAreaData[1],
                act: nextAreaData[0],
                level: nextArea.level,
                monsters: nextArea.monsters,
                uniques: nextArea.uniques
            })
        }

        this.area.generateMonsters();
    }

    enableFarming() {
        this.farming = true;
    }

    disableFarming() {
        this.farming = false;
    }

    getCurrentArea() {
        return this.area;
    }

    getInventory() {
        return this.inventory;
    }

    clickAttack() {
        this.area.getCurrentMonster().damage(this.calculateDamage());

        if (this.area.getCurrentMonster().isDead === true) {
            let monster = this.area.killCurrentMonster();
            this.money += monster.getGoldDrop();
        }

        if (this.area.monsters.length === 0) {
            this.generateArea(this.area.name);
        }
    }

    dpsAttack() {
        this.area.getCurrentMonster().damage(this.calculateDamage() * this.stats["attacks_per_second"]);

        if (this.area.getCurrentMonster().isDead === true) {
            let monster = this.area.killCurrentMonster();
            this.money += monster.getGoldDrop();
        }

        if (this.area.monsters.length === 0) {
            this.generateArea(this.area.name);
        }
    }

    getCampaign() {
        return areaNames["campaign"];
    }

    getEquipment() {
        return this.equipment;
    }

    cacheStats() {
        const attributes = this.equipment.cacheAttributes();

        for(const attribute in attributes) {
            this.stats[attribute] += attributes[attribute];
        }

        return this.stats;
    }

    calculateDamage() {
        return this.damageutils.full_damage(this.stats);
    }

    equip(id) {
        let item = this.inventory.filter(x => x.id === id);

        if (!item) {
            console.log('cant equip that item');
            return false;
        }

        this.equipment.equip(item[0]);
    }
}

export default Game;
