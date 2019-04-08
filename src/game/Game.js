export default class Game {
    constructor(money = 0) {
        this.money = money;
    }

    earn(x) {
        this.money += x;
    }
}
