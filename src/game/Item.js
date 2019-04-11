export default class Item {
    constructor(options) {
        // basic item info
        this.type = options.type;
        this.class = options.class;
        this.slot = options.slot;

        // item attributes
        this.name = options.name;
        this.image = options.image;
        this.attributes = options.attributes;
        this.tags = options.tags;

        // item modifiers
        this.identified = options.identified ? options.identified : true;
        this.rarity = options.rarity ? options.rarity : 'normal';
        this.prefixes = options.prefixes ? options.prefixes : [];
        this.suffixes = options.suffixes ? options.suffixes : [];
        this.level = options.level
        this.itemlevel = options.itemlevel;
        this.requirements = options.requirements;
    }

    addPrefix(prefix) {
        this.prefixes.push(prefix);
    }

    addSuffix(suffix) {
        this.suffixes.push(suffix);
    }

    setItemLevel(ilvl) {
        this.itemlevel = ilvl;
    }
}

// fight monsters and figure out a chance to drop
// an item.
// if chance succeds, get a random item base
// const axe = axes_list['bases']['cleaver'];
// create the actual item
// const cleaver = new Item(axe);
// cleaver.rarity = 'magic';
// cleaver.itemlevel = 2;
// cleaver.addPrefix('axe_inc_phys_tier5');



// const cleaver = new Item({
//     type: "equipment",
//     class: "axe",
//     basetype: "cleaver",
//     attributes: {
//         "physical_damage": 17,
//         "attacks_per_second": 0.25
//     },
//     requirements: {
//         "level": 1
//     }
// });

// console.log(cleaver);
