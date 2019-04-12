import equipmentTypes from './types/equipment.json';

class Equipment {
    constructor(options) {
        this.slots = [];

        for (const type of equipmentTypes) {
            this.equip(options[type]);
        }
    }

    cacheAttributes() {
        let attributes = [];

        for (const item in this.slots) {
            let itemAttributes = this.slots[item].getAttributes();

            for (const attribute in itemAttributes) {
                if (attributes[attribute]) {
                    attributes[attribute] += itemAttributes[attribute];
                } else {
                    attributes[attribute] = itemAttributes[attribute];
                }
            }
        }

        return attributes;
    }

    equip(item) {
        // no item
        if (item === undefined) {
            return false;
        }

        // the equipment slot is used, cant equip
        if (this.slots[item.slot]) {
            return false;
        }

        // item is a weapon? figure out which hand to use
        if (item.slot === 'onehand') {
            if (!this.slots['mainhand']) {
                this.slots['mainhand'] = item;
                console.log(this.slots.mainhand);
                return;
            }

            if (!this.slots['offhand']) {
                this.slots['offhand'] = item;
                console.log(this.slots['offhand'].name);
                return;
            }
        }

        // TODO: add code for two hand
        // regular item, just equip
        console.log(this.slots[item.slot]);
        return this.slots[item.slot] = item;
    }
}

export default Equipment;
