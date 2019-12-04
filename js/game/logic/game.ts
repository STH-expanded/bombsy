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
        this.lastKeys2 = new Map([
            ["left", null],
            ["up", null],
            ["right", null],
            ["down", null],
        ]);
        this.player = new Player(
            new Vector2D(128, 32),
            new Vector2D(16, 16),

        );
        console.log(this.player);

        this.player2 = new Player2(
            new Vector2D(128, 32),
            new Vector2D(32, 16)
        );

        this.obstacles = [
            {
                pos: new Vector2D(0, 60),
                size: new Vector2D(128, 8)
            },
            {
                pos: new Vector2D(128, 60),
                size: new Vector2D(8, 128)
            },
            {
                pos: new Vector2D(128, 120),
                size: new Vector2D(32, 16)
            },
            {
                pos: new Vector2D(128, 188),
                size: new Vector2D(216, 8)
            },
        ];

        this.gravity = new Vector2D(0, 0.25);

        this.update = keys => {
            this.keys = keys;

            this.player.update(this);
            this.player2.update(this);

            this.lastKeys = new Map([
                ["left", keys.get('left')],
                ["up", keys.get('up')],
                ["right", keys.get('right')],
                ["down", keys.get('down')],
            ]);

            this.lastKeys2 = new Map([
                ["arrow-left", keys.get('arrow-left')],
                ["arrow-up", keys.get('arrow-up')],
                ["arrow-right", keys.get('arrow-right')],
                ["arrow-down", keys.get('arrow-down')],
            ]);



            this.frame++;
        }
    }
}
