class Game {
    constructor() {
        this.frame = 0;
        this.keys = null;
        this.lastKeys = new Map([
            ["left", null],
            ["up", null],
            ["right", null],
            ["down", null],
        ]);
        this.player = new Player(1, [], 1, false);
        console.log(this.player);
        this.update = keys => {
            this.keys = keys;
            this.player.update(this);
            this.lastKeys = new Map([
                ["left", keys.get('left')],
                ["up", keys.get('up')],
                ["right", keys.get('right')],
                ["down", keys.get('down')],
            ]);
            this.frame++;
        };
    }
}
//# sourceMappingURL=game.js.map