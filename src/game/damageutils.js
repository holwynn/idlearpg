export function physical_damage(stats) {
    if (stats["physical_damage"] === 0) {
        return 0;
    }

    const ps = stats["physical_damage"];
    const ips =  ips;

    return ps * (1 + stats["increased_physical_damage"]);
}

export function fire_damage(stats) {
    if (stats["fire_damage"] === 0) {
        return 0;
    }

    const fd = stats["fire_damage"];
    const ifd = stats["increased_fire_damage"];
    const ied = stats["increased_elemental_damage"];

    return fd * (1 + (ifd + ied));
}

export function cold_damage(stats) {
    if (stats["cold_damage"] === 0) {
        return 0;
    }

    const cd = stats["cold_damage"];
    const icd = stats["increased_cold_damage"];
    const ied = stats["increased_elemental_damage"];

    return cd * (1 + (icd + ied));
}

export function lightning_damage(stats) {
    if (stats["lightning_damage"] === 0) {
        return 0;
    }

    const ld = stats["lightning_damage"];
    const ild = stats["increased_lightning_damage"];
    const ied = stats["increased_elemental_damage"];

    return ld * (1 + (ild + ied));
}

export function full_damage(stats) {
    const phys = physical_damage(stats);
    const fire = fire_damage(stats);
    const cold = cold_damage(stats);
    const lightning = lightning_damage(stats);

    return (phys + fire + cold + lightning);
}
