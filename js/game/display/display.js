class Display {
    constructor(game) {
        this.frame = 0;
        this.zoom = 1;

        this.game = game;

        this.canvas = document.createElement("canvas");
        this.cx = this.canvas.getContext("2d");

        this.update();

        this.resize();
        window.addEventListener("resize", this.resize);
        document.body.appendChild(this.canvas);
    }

    update = () => {
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
    }

    generateLevel = (level) => {
        var map = level.map;
        level.fillMap(this);
        let rows = map.length;

        var wall = new Image();
        var ground = new Image();
        var brick = new Image();
        const blockSize = 16;

        for (var row = 0; row < map.length; row++) {
            for (var column = 0; column < map[0].length; column++) {
                switch (map[column][row]) {
                    case 0:
                        ground.src = level.groundTile;
                        this.cx.drawImage(
                            ground,
                            0,
                            0,
                            160, //TODO: Create a constant when sprites will be set with the same width (change the other case aswell)
                            160, //TODO: Create a constant when sprites will be set with the same height (change the other case aswell)
                            row * blockSize * this.zoom,
                            column * blockSize * this.zoom,
                            blockSize * this.zoom,
                            blockSize * this.zoom,
                        )
                        break;

                    case 1:
                        wall.src = level.wallTile;
                        this.cx.drawImage(
                            wall,
                            0,
                            0,
                            200,
                            200,
                            row * blockSize * this.zoom,
                            column * blockSize * this.zoom,
                            blockSize * this.zoom,
                            blockSize * this.zoom,
                        )
                        break;

                    case 2:
                        brick.src = level.brickTile;
                        this.cx.drawImage(
                            brick,
                            0,
                            0,
                            800,
                            800,
                            row * blockSize * this.zoom,
                            column * blockSize * this.zoom,
                            blockSize * this.zoom,
                            blockSize * this.zoom,
                        )
                        break;
                }
            }
        }

    }

    resize = () => {
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

    displayMainMenu = () => {
        this.cx.fillStyle = "green";
        this.cx.fillRect(
            0 * this.zoom,
            0 * this.zoom,
            480 * this.zoom,
            270 * this.zoom
        );
        this.game.menuOptionList.forEach((option, index) => {
            if (this.game.menuOptionList[this.game.mainMenuCursor] === option) {
                this.cx.fillStyle = "red";
            } else {
                this.cx.fillStyle = "black";
            }
            this.cx.font = "16px serif";
            this.cx.fillText(
                option,
                (450 * this.zoom) / 2,
                (270 * this.zoom) / 2 + 20 * index
            );
        });

        // ground, wall, brick
        this.generateLevel(new Level(firstLevel, "./assets/plant.jpeg", "./assets/wall.png", "./assets/brick.png"));

    }

    displayGameSettings = () => {
        this.cx.fillStyle = "orange";
        this.cx.fillRect(
            0 * this.zoom,
            0 * this.zoom,
            480 * this.zoom,
            270 * this.zoom
        );

        if (this.game.characterSelection) {
            this.cx.fillStyle = "white";
            this.cx.fillRect(
                224 * this.zoom,
                87 * this.zoom +
                this.game.characterSelection.cursor.y * 32 * this.zoom,
                32 * this.zoom,
                32 * this.zoom
            );
        };
    }

    displayFight = () => {
        this.cx.fillStyle = "red";
        this.cx.fillRect(
            0 * this.zoom,
            0 * this.zoom,
            480 * this.zoom,
            270 * this.zoom
        );

        var player1 = this.game.player;
        // var player2 = this.game.fight.player2.character;

        this.cx.fillStyle = "blue";
        this.cx.fillRect(
            player1.pos.x * this.zoom,
            player1.pos.y * this.zoom,
            player1.size.x * this.zoom,
            player1.size.y * this.zoom
        );
        // this.cx.fillStyle = "green";
        // this.cx.fillRect(
        //     player2.pos.x * this.zoom,
        //     player2.pos.y * this.zoom,
        //     player2.size.x * this.zoom,
        //     player2.size.y * this.zoom
        // );
    }

    displayEndMenu = () => {
        this.cx.fillStyle = "yellow";
        this.cx.fillRect(
            0 * this.zoom,
            0 * this.zoom,
            480 * this.zoom,
            270 * this.zoom
        );

        this.game.endMenuOptionList.forEach((option, index) => {
            if (
                this.game.endMenuOptionList[this.game.endMenuCursor] === option
            ) {
                this.cx.fillStyle = "red";
            } else {
                this.cx.fillStyle = "black";
            }
            this.cx.font = "16px serif";
            this.cx.fillText(
                option,
                (450 * this.zoom) / 2,
                (270 * this.zoom) / 2 + 20 * index
            );
        });
    }
}
