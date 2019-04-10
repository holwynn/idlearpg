export default class Equipment {
    constructor(options) {
        this.types = ['mainhand', 'offhand', 'helmet', 'bodyarmour', 'gloves',
                      'boots', 'lefring', 'rightring', 'amulet'];
        this.mainhand = options.mainhand;
        this.offhand = options.offhand;
        this.helmet = options.helmet;
        this.bodyarmour = options.bodyarmour;
        this.gloves = options.gloves;
        this.boots = options.boots;
        this.leftring = options.leftring;
        this.rightring = options.rightring;
        this.amulet = options.amulet;
    }

    cacheAttributes() {
        let attr = [];
        for (const type of this.types) {
            if (this[type] && this[type]["attributes"]) {
                const attributes = Object.keys(this[type]["attributes"]);

                for (const attribute of attributes) {
                    let val = 0;

                    if (!attr[attribute]) {
                        val = this[type]["attributes"][attribute];
                    } else {
                        val = attr[attribute] + this[type]["attributes"][attribute];
                    }

                    attr[attribute] = val;
                }
            }
        }

        this.cachedAttributes = attr;
        return attr;
    }
}
