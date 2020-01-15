class Display {

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

        //background
        /*
        this.cx.fillStyle = "#FE3455";
        this.cx.fillRect(
            0 * this.zoom,
            0 * this.zoom,
            this.canvas.width * this.zoom,
            this.canvas.height * this.zoom
        );

        //obstacles
        this.cx.fillStyle = "#000";
        this.game.obstacles.forEach(obstacle => {
            this.cx.fillRect(
                obstacle.pos.x * this.zoom,
                obstacle.pos.y * this.zoom,
                obstacle.size.x * this.zoom,
                obstacle.size.y * this.zoom
            );
        });

        */
        //player
        // var player = this.game.player;
        // this.cx.fillStyle = "#FFFFFF";
        // this.cx.fillRect(
        //     player.pos.x * this.zoom,
        //     player.pos.y * this.zoom,
        //     player.size.x * this.zoom,
        //     player.size.y * this.zoom
        // );
        /*

        var player = this.game.player;
        // var sprite = player.speed.x ? this.playerSprite2 : this.playerSprite;

        var sprite = this.playerSprite;

        // Player 1 image :
        this.cx.drawImage(
            sprite,
            0,
            0,
            117,
            83,
            player.pos.x * this.zoom,
            player.pos.y * this.zoom,
            player.size.x * this.zoom,
            player.size.y * this.zoom
        );

        console.log("player 1:");
        console.log(this.game.player.pos);
        console.log("player 2 :");
        console.log(this.game.player2.pos);

        //interface
        this.cx.fillStyle = "#fff";
        this.cx.font = 16 * this.zoom + "px consolas";
        this.cx.fillText(
            "x:" + player.pos.x + " y:" + player.pos.y,
            8 * this.zoom,
            16 * this.zoom
        );

        this.cx.fillText(
            "x:" + player2.pos.x + " y:" + player2.pos.y,
            392 * this.zoom,
            16 * this.zoom
        );

        this.frame++; */
    };

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
    };

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
    };

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
        }
    };

    displayFight = () => {
        // Level
        this.cx.fillStyle = "red";
        this.cx.fillRect(
            0 * this.zoom,
            0 * this.zoom,
            480 * this.zoom,
            270 * this.zoom
        );

        // Player
        var player1 = this.game.player;

        this.cx.fillStyle = "blue";
        this.cx.fillRect(
            player1.pos.x * this.zoom,
            player1.pos.y * this.zoom,
            player1.size.x * this.zoom,
            player1.size.y * this.zoom
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
        };

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
    }
