import Item from './Item';
import axes from './types/axes.json';
import daggers from './types/daggers.json';
import helmets from './types/helmets.json';

const types = {
    axes: axes,
    daggers: daggers,
    helmets: helmets
}

export function create_item_from_base(type, base, ilvl = 1) {
    if (!types[type]["bases"][base]) {
        return undefined;
    }

    const item = new Item(types[type]["bases"][base]);
    item.setItemLevel(ilvl);
    return item;
}
