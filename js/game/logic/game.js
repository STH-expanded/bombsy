class Game {

    constructor() {
        this.frame = 0;

        this.keys = null;
        this.lastKey = null;
        this.player1 = new Player(new Vector2D(10, 10), "Alex", 1);
        this.player2 = new Player(new Vector2D(20, 20), "Adrien", 2);

        this.tileSize = 10;

        this.bombs = [];

        this.menuOptionList = ["Start game", "About"];
        this.endMenuOptionList = ["Play again", "Quit game"];

        this.gameStateEnum = {
            MAINMENU: "mainMenu",
            GAMESETTINGS: "gameSettings",
            FIGHT: "fight",
            ENDMENU: "endMenu"
        };

        this.gameState = this.gameStateEnum.FIGHT;
        this.gamemode = null;

        this.updateMainMenu = () => {
            var nbMenu = this.menuOptionList.length;
        };

        this.updateEndMenu = () => {};

        this.manageGameSettings = () => {};

        this.manageFight = () => {};

        this.update = keys => {
            this.keys = keys;

            this.player1.update(this);
            this.player2.update(this);

            this.bombs.forEach((bomb, index) => {
                bomb.update();
                if (bomb.state == 'exploded') {
                    console.log(bomb);
                    if (bomb.player === 1) {
                        this.player1.bombCount--;
                    }
                    if (bomb.player === 2) {
                        this.player2.bombCount--;
                    }
                    this.bombs.splice(index, 1);
                }
            });

            this.lastKeys = {...keys};

            switch (this.gameState) {
                case this.gameStateEnum.MAINMENU:
                    this.updateMainMenu();
                    break;
                case this.gameStateEnum.GAMESETTINGS:
                    this.manageGameSettings();
                    break;
                case this.gameStateEnum.FIGHT:
                    this.manageFight();
                    break;
                case this.gameStateEnum.ENDMENU:
                    this.updateEndMenu();
                    break;
                default:
                    break;
            }

            this.frame++;
        };
    }
}
