import Area from './Area';
import areaNames from './types/areas.json'

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

// console.log(find_next_area('The Twilight Strand', true));

export default class Game {
    constructor(money = 0, doneWithCampaign = false) {
        this.money = money;
        this.doneWithCampaign = doneWithCampaign;
        this.farming = false;
        this.damage = 68;

        this.generateArea('');
    }

    earn(x) {
        this.money += x;
    }

    generateArea(name) {
        if (this.doneWithCampaign) {
            // return this.area = new Area(generate_random_name(), 5, 1);
        }

        if (this.farming) {
            let lastArea = this.area;
            this.area = new Area(lastArea.name, lastArea.act, lastArea.monstersAmount, lastArea.level, lastArea.uniques);
        } else {
            let nextAreaData = find_next_area(name, true);
            let nextArea = areaNames[nextAreaData[1]];
            this.area = new Area(nextAreaData[1], nextAreaData[0], nextArea.monsters, nextArea.level, nextArea.uniques);
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
