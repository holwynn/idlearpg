import axes from './types/axes.json';
import daggers from './types/daggers.json';

const types = {
    axes: axes,
    daggers: daggers
}

export function create_item_from_base(type, base) {
    if (!types[type]["bases"][base]) {
        return undefined;
    }

    return types[type]["bases"][base];
}
