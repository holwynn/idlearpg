import loki from 'lokijs';

import rawHelmets from './game/types/helmets.json';
import rawDaggers from './game/types/daggers.json';
import rawAxes from './game/types/axes.json';

const db = new loki();
const items = db.addCollection('items');

for (const dagger in rawDaggers.bases) {
    items.insert({
        ...rawDaggers.bases[dagger]
    });
}

export default {
    items: items
};
