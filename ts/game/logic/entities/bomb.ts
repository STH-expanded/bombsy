class Bomb {
    private name: string;
    private timeRemaining: number;
    private range: number;
    private state: string;
    private player: Player;
    private position: Vector2D;

    constructor(name: string, timeRemaining: number, range: number, state: string, player: Player, position: Vector2D) {
        this.name = name;
        this.timeRemaining = 3; // 3 seconds delay
        this.range = range;
        this.state = state;
        this.player = player;
        this.position = position;
    }

    public countdown() {
        let interval = setInterval(() => {
            this.timeRemaining--;

            if (this.timeRemaining < 0) {
                clearInterval(interval);
            }
        }, 1000
        );

        return this.explode(this.position.x, this.position.y);
    }

    public explode(x: number, y: number) {
        const tileRange: number = 1 + this.player.range;
        const position: Vector2D = this.position;

        return '';
    }
}
