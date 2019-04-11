export default class Equipment {
    constructor(options) {
        this.types = ['mainhand', 'offhand', 'helmet', 'bodyarmour', 'belt',
                     'gloves', 'boots', 'amulet', 'leftring', 'rightring'];
        this.items = [];

        for (const type of this.types) {
            this.equip(options[type]);
        }
    }

    cacheAttributes() {
        let attr = [];
        for (const type of this.types) {
            if (this.items[type] && this.items[type]["attributes"]) {
                const attributes = Object.keys(this.items[type]["attributes"]);

                for (const attribute of attributes) {
                    let val = 0;

                    if (!attr[attribute]) {
                        val = this.items[type]["attributes"][attribute];
                    } else {
                        val = attr[attribute] + this.items[type]["attributes"][attribute];
                    }

                    attr[attribute] = val;
                }
            }
        }

        this.cachedAttributes = attr;
        return attr;
    }

    equip(item) {
        // no item
        if (item === undefined) {
            return item;
        }

        // the equipment slot is used, cant equip
        if (this.items[item.slot]) {
            return false;
        }

        // item is a weapon? figure out which hand to use
        if (item.slot === 'weapon') {
            if (!this.items['mainhand']) {
                return this.items['mainhand'] = item;
            }

            if (!this.items['offhand'] && !item.tags.two_hand) {
                return this.items['offhand'] = item;
            }
        }

        // regular item, just equip
        return this.items[item.slot] = item;
    }
}
