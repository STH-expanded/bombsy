class Bomb {

    constructor(range, player, position) {
        this.timeRemaining = 180; // 3 seconds delay
        this.range = range;
        this.state = "lol";
        this.player = player;
        this.position = position;
    }

    countdown = () => {
        
    }

    explode = () => {
        // const tileRange = 1 + this.player.range;
        // const position = this.position;

        this.state = "exploded";
        return '';
    }

    update = () => {
        if (this.timeRemaining > 0) {
            this.timeRemaining--;
        } else {
            this.explode()
        }
        
    }
}