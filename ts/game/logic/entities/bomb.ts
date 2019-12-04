class Bomb {
    private name: string;
    private timeRemaining: number;
    private range: number;
    private state: string;
    private player: Player;
    private position: Vector2D;

    constructor(name: string, timeRemaining: number, range: number, state: string, player: Player, position: Vector2D) {
        this.name = name;
        this.timeRemaining = timeRemaining;
        this.range = range;
        this.state = state;
        this.player = player;
        this.position = position;
    }

    public countdown(seconds: number) {
        return '';
    }

    public explode(left: number, right: number, up: number, down: number) {
        const tileRange: number = 1 + this.player.range;
        const position: Vector2D = this.position;

        return '';
    }
}
