import Area from './Area';
import Item from './Item';

import areaNames from './types/areas.json'
import axes from './types/axes.json';
import daggers from './types/daggers.json';

function generate_random_name() {
    let length = areaNames['prefixes'].length;
    const prefix = areaNames['prefixes'][Math.floor(Math.random() * length)];
    length = areaNames['suffixes'].length;
    const suffix = areaNames['suffixes'][Math.floor(Math.random() * length)];
    return prefix + ' ' + suffix;
}

function find_next_area(currentArea, fallback = false) {
    let nextAct = false;
    let nextActId = false;

    for (const act in areaNames.campaign) {
        if (nextAct) {
            return [act, areaNames.campaign[act][0]];
        }

        let length = areaNames.campaign[act].length - 1;
        let index = areaNames.campaign[act].indexOf(currentArea);

        if (index === -1) {
            continue;
        }

        let nextActNumber = parseInt(act.substring(act.length - 1)) + 1;
        nextActId = "Act " + nextActNumber;
        let nextAct = areaNames.campaign[nextActId] != undefined;
        console.log(nextAct);

        if (index === length && nextAct) {
            nextAct = true;
            continue;
        }

        return [act, areaNames.campaign[act][index+1]];
    }

    if (fallback) {
        return ['Act 1', areaNames.campaign['Act 1'][0]];
    }

    return undefined;
}

export default class Game {
    constructor(money = 0, doneWithCampaign = false) {
        this.money = money;
        this.doneWithCampaign = doneWithCampaign;
        this.farming = false;
        this.damage = 14;

        let startingWeapon = new Item(daggers['bases']['rusty_dagger']);

        this.equipment = {
            mainHand: startingWeapon,
            offhand: undefined,
            helmet: undefined,
            bodyarmour: undefined,
            gloves: undefined,
            boots: undefined,
            leftring: undefined,
            rightring: undefined,
            amulet: undefined
        }

        console.log(this.equipment);

        this.inventory = [];

        this.generateArea('Gates of Hell');
    }

    earn(x) {
        this.money += x;
    }

    generateArea(name) {
        if (this.doneWithCampaign) {

        }

        if (this.farming) {
            let lastArea = this.area;
            this.area = new Area(lastArea);
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
}
