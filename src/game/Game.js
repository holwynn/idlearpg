import Area from './Area';

import areaNames from './types/areas.json'

import { generate_random_name, find_next_area } from './areautils';

export default class Game {
    constructor(options) {
        this.money = options.money;
        this.doneWithCampaign = options.doneWithCampaign;
        this.farming = false;
        this.equipment = options.equipment;
        this.stats = [];

        const attributes = [
            "physical_damage",
            "fire_damage",
            "cold_damage",
            "lightning_damage",
            "attacks_per_second",
            "increased_physical_damage",
            "increased_fire_damage",
            "increased_cold_damage",
            "increased_lightning_damage",
            "increased_elemental_damage"
        ];

        for (const attribute of attributes) {
            this.stats[attribute] = 0;
        }

        this.cacheStats();
        this.damage = this.calculateDamage();
        this.inventory = [];
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

    clickAttack() {
        this.area.getCurrentMonster().damage(this.damage);

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
        this.equipment.cacheAttributes();

        for(const attribute in this.equipment.cachedAttributes) {
            this.stats[attribute] += this.equipment.cachedAttributes[attribute];
        }

        return this.stats;
    }

    getPhysicalDamage() {
        if (this.stats["physical_damage"] === 0) {
            return 0;
        }

        return this.stats["physical_damage"] * (1 + this.stats["increased_physical_damage"]);
    }

    getLightningDamage() {
        if (this.stats["lightning_damage"] === 0) {
            return 0;
        }

        return this.stats["lightning_damage"] * (1 + this.stats["increased_lightning_damage"]) + (1 + this.stats["increased_elemental_damage"]);
    }

    getColdDamage() {
        if (this.stats["cold_damage"] === 0) {
            return 0;
        }

        return this.stats["cold_damage"] * (1 + this.stats["increased_cold_damage"]) + (1 + this.stats["increased_elemental_damage"]);
    }

    getFireDamage() {
        if (this.stats["fire_damage"] === 0) {
            return 0;
        }

        return this.stats["fire_damage"] * (1 + this.stats["increased_fire_damage"]) + (1 + this.stats["increased_elemental_damage"]);
    }


    calculateDamage() {
        return this.getPhysicalDamage() + this.getLightningDamage() + this.getColdDamage() + this.getFireDamage();
    }
}
