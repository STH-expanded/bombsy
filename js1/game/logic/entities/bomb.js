class Bomb {
    constructor(name, timeRemaining, range, state, player, position) {
        this.name = name;
        this.timeRemaining = timeRemaining;
        this.range = range;
        this.state = state;
        this.player = player;
        this.position = position;
    }
    countdown(seconds) {
        return '';
    }
    explode(left, right, up, down) {
        const tileRange = 1 + this.player.range;
        const position = this.position;
        return '';
    }
}
//# sourceMappingURL=bomb.js.map