class Game {

    constructor() {
        this.frame = 0;

        this.keys = null;
        this.lastKey = null;
        this.player = new Player(new Vector2D(10, 10));

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

            this.player.update(this);

            this.bombs.forEach((bomb, index) => {
                bomb.update();
                if (bomb.state == 'exploded') {
                    this.bombs.splice(index, 1);
                    this.player.bombCount--;
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