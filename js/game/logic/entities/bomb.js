class Bomb {

    constructor(range, player, position) {
        this.countdown = 180; // 3 seconds delay
        this.explodingTime = 60; // 3 seconds delay
        this.range = range;
        this.state = "pending";
        this.player = player;
        this.pos = position;
    }

    update = () => {
        if (this.countdown > 0) {
            this.countdown--;
        } else if (this.countdown == 0 && this.explodingTime > 0) {
            this.state = "exploding";
            this.explodingTime--;
        } else{

            this.state = "exploded";
        }
        
    }
}