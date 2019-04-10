import areaNames from './types/areas.json'

export function generate_random_name() {
    let length = areaNames['prefixes'].length;
    const prefix = areaNames['prefixes'][Math.floor(Math.random() * length)];
    length = areaNames['suffixes'].length;
    const suffix = areaNames['suffixes'][Math.floor(Math.random() * length)];
    return prefix + ' ' + suffix;
}

export function find_next_area(currentArea, fallback = false) {
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

        // console.log(nextAct);

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
