class Bomb {

    constructor(range, player, position) {
        this.timeRemaining = 180; // 3 seconds delay
        this.range = range;
        this.state = "pending";
        this.player = player;
        this.pos = position;
    }

    explode = () => {
        this.state = "exploded";
    }

    update = () => {
        if (this.timeRemaining > 0) {
            this.timeRemaining--;
        } else {
            this.explode()
        }
        
    }
}