class Bomb {
    private name: string;
    private timeRemaining: number;
    private range: number;
    private state: string;
    private player: Player;
    private position: [];

    constructor(name: string, timeRemaining: number, range: number, state: string, player: Player, position: []) {
        this.name = name;
        this.timeRemaining = timeRemaining;
        this.range = range;
        this.state = state;
        this.player = player;
        this.position = position;
    }

    countdown(seconds: number) {
        return '';
    }

    public explode(left: number, right: number, up: number, down: number) {
        return '';
    }
}
