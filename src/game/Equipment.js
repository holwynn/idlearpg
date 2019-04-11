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
            return item;
        }

        // the equipment slot is used, cant equip
        if (this.slots[item.slot]) {
            return false;
        }

        // item is a weapon? figure out which hand to use
        if (item.slot === 'weapon') {
            if (!this.slots['mainhand']) {
                return this.slots['mainhand'] = item;
            }

            if (!this.slots['offhand'] && !item.tags.two_hand) {
                return this.slots['offhand'] = item;
            }
        }

        // regular item, just equip
        return this.slots[item.slot] = item;
    }
}

export default Equipment;
