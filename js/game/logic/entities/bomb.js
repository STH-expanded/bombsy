class Bomb {

    constructor(name, timeRemaining, range, state, player, position) {
        this.name = name;
        this.timeRemaining = 3; // 3 seconds delay
        this.range = range;
        this.state = state;
        this.player = player;
        this.position = position;
    }

    countdown = () => {
        let interval = setInterval(() => {
            this.timeRemaining--;

            if (this.timeRemaining < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return this.explode(this.position.x, this.position.y);
    }

    explode = (x, y) => {
        const tileRange = 1 + this.player.range;
        const position = this.position;

        return '';
    }
}