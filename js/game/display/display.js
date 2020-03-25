class Display {
    constructor(game) {
        this.frame = 0;
        this.zoom = 1;
        this.debugMode = true;

        this.game = game;

        this.audioManager = new AudioManager();
        this.assets = new Assets();

        this.update = () => {
            this.game.activity.display.update(this);
            this.frame++;
        };

        this.fadeEffect = (color, frame, MaxFrame) => {
            this.cx.fillStyle = color;
            this.cx.globalAlpha = frame / MaxFrame;
            this.cx.fillRect(
                0 * this.zoom,
                0 * this.zoom,
                480 * this.zoom,
                270 * this.zoom
            );
            this.cx.globalAlpha = 1;
        };

        // Resize depending on breakpo
        this.resize = () => {
            if (innerWidth >= 1920 && innerHeight >= 1080) {
                this.zoom = 4;
                this.cx.scale(this.zoom, this.zoom);
                this.canvas.width = 1920;
                this.canvas.height = 1080;
            } else if (innerWidth >= 1440 && innerHeight >= 810) {
                this.zoom = 3;
                this.cx.scale(this.zoom, this.zoom);
                this.canvas.width = 1440;
                this.canvas.height = 810;
            } else if (innerWidth >= 960 && innerHeight >= 540) {
                this.zoom = 2;
                this.cx.scale(this.zoom, this.zoom);
                this.canvas.width = 960;
                this.canvas.height = 540;
            } else {
                this.zoom = 1;
                this.cx.scale(this.zoom, this.zoom);
                this.canvas.width = 480;
                this.canvas.height = 270;
            }
            this.cx.imageSmoothingEnabled = false;
        }

        // Initialize canvas position
        this.canvas = document.createElement("canvas");
        this.cx = this.canvas.getContext("2d");

        this.resize();
        window.addEventListener("resize", this.resize);
        document.body.appendChild(this.canvas);
    }

    // Update at each frame
    /*update = () => {
        // Update frame depending on Game State
        switch (this.game.gameState) {
            case this.game.gameStateEnum.MAINMENU:
                this.displayMainMenu();
                break;
            case this.game.gameStateEnum.CHARACTERSELECTION:
                this.displayGameSettings();
                break;
            case this.game.gameStateEnum.FIGHT:
                this.displayFight();
                break;
            case this.game.gameStateEnum.ENDMENU:
                this.displayEndMenu();
                break;
            default:
                break;
        }
        this.frame++;
    }*/

    // Initialize Game Level
    generateLevel = (level) => {
        var map = level.map;
        level.fillMap(this, this.game);
        // let rows = map.length;

        // Initialize Blocks 
        var wall = new Image();
        var ground = new Image();
        var brick = new Image();
        const blockSize = 16;

        // Move map to right
        this.cx.translate(104 * this.zoom, 0);

        // Draw Blocks on Map
        for (var row = 0; row < map.length; row++) {
            for (var column = 0; column < map[0].length; column++) {
                switch (map[column][row]) {

                    // Ground
                    case 0:
                        ground.src = level.groundTile;
                        this.cx.drawImage(
                            ground,
                            0,
                            0,
                            blockSize, //TODO: Create a constant when sprites will be set with the same width (change the other case aswell)
                            blockSize, //TODO: Create a constant when sprites will be set with the same height (change the other case aswell)
                            row * blockSize * this.zoom,
                            column * blockSize * this.zoom,
                            blockSize * this.zoom,
                            blockSize * this.zoom,
                        )
                        break;

                    // Wall
                    case 1:
                        brick.src = level.brickTile;
                        this.cx.drawImage(
                            brick,
                            0,
                            0,
                            blockSize,
                            blockSize,
                            row * blockSize * this.zoom,
                            column * blockSize * this.zoom,
                            blockSize * this.zoom,
                            blockSize * this.zoom,
                        )
                        break;

                    // Brick
                    case 2:
                        wall.src = level.wallTile;
                        this.cx.drawImage(
                            wall,
                            0,
                            0,
                            blockSize,
                            blockSize,
                            row * blockSize * this.zoom,
                            column * blockSize * this.zoom,
                            blockSize * this.zoom,
                            blockSize * this.zoom,
                        )
                        break;
                }
            }
        }

        // Move map to left to center map
        this.cx.translate(-104 * this.zoom, 0);
    }

    // Display Game Settings
    displayGameSettings = () => {
        this.cx.fillStyle = "orange";
        this.cx.fillRect(
            0 * this.zoom,
            0 * this.zoom,
            480 * this.zoom,
            270 * this.zoom
        );

        this.fadeEffect = (color, frame, MaxFrame) => {
            this.cx.fillStyle = color;
            this.cx.globalAlpha = frame / MaxFrame;
            this.cx.fillRect(
                0 * this.zoom,
                0 * this.zoom,
                480 * this.zoom,
                270 * this.zoom
            );
        };
    }

    // Display Fight
    displayFight = () => {
        // Level
        this.cx.fillStyle = "#448";
        this.cx.fillRect(
            0 * this.zoom,
            0 * this.zoom,
            480 * this.zoom,
            270 * this.zoom
        );

        // ground, wall, brick
        this.generateLevel(this.game.level);

        var player1 = this.game.player1;

        this.cx.fillStyle = "blue";
        this.cx.fillRect(
            player1.pos.x * this.zoom,
            player1.pos.y * this.zoom,
            player1.size.x * this.zoom,
            player1.size.y * this.zoom
        );

        var player2 = this.game.player2;

        this.cx.fillStyle = "green";
        this.cx.fillRect(
            player2.pos.x * this.zoom,
            player2.pos.y * this.zoom,
            player2.size.x * this.zoom,
            player2.size.y * this.zoom
        );

        // Bombs
        this.game.bombs.forEach(bomb => {
            // Bomb Pending
            if (bomb.state == "pending") {
                this.cx.fillStyle = "black";
                this.cx.fillRect(
                    bomb.pos.x * this.zoom,
                    bomb.pos.y * this.zoom,
                    this.game.tileSize * this.zoom,
                    this.game.tileSize * this.zoom
                );
            } else if (bomb.state == "exploding") {
                // Bomb Exploding
                this.cx.fillStyle = "yellow";
                this.cx.fillRect(
                    bomb.pos.x * this.zoom,
                    bomb.pos.y * this.zoom,
                    (this.game.tileSize * bomb.range) * this.zoom,
                    player1.size.y * this.zoom
                );

                this.cx.fillRect(
                    bomb.pos.x * this.zoom,
                    bomb.pos.y * this.zoom,
                    player1.size.x * this.zoom,
                    (this.game.tileSize * bomb.range) * this.zoom
                );

                this.cx.fillRect(
                    bomb.pos.x * this.zoom,
                    bomb.pos.y * this.zoom,
                    (-(this.game.tileSize * bomb.range) + player1.size.x) * this.zoom,
                    player1.size.y * this.zoom
                );

                this.cx.fillRect(
                    bomb.pos.x * this.zoom,
                    bomb.pos.y * this.zoom,
                    player1.size.x * this.zoom,
                    (-(this.game.tileSize * bomb.range) + player1.size.y) * this.zoom
                );
            }
        });
    }

    // Displayb End Menu
    displayEndMenu = () => {
        this.cx.fillStyle = "yellow";
        this.cx.fillRect(
            0 * this.zoom,
            0 * this.zoom,
            480 * this.zoom,
            270 * this.zoom
        );

        this.game.endMenuOptionList.forEach((option, index) => {
            if (this.game.endMenuOptionList[this.game.endMenuCursor] === option) {
                this.cx.fillStyle = "red";
            } else {
                this.zoom = 1;
                this.cx.scale(this.zoom, this.zoom);
                this.canvas.width = 480;
                this.canvas.height = 270;
            }
            this.cx.imageSmoothingEnabled = false;
        });

        this.canvas = document.createElement('canvas');
        this.cx = this.canvas.getContext('2d');
        this.resize();
        
        window.addEventListener('resize', this.resize);
        document.body.appendChild(this.canvas);
    }
}