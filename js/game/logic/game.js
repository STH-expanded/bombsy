class Game {

    constructor(inputList) {
        this.frame = 0;
        this.keys = null;
        this.inputList = inputList;

        this.lastInputList = new Map();

        this.players = [];

        this.player = new Player(new Vector2D(10, 10));

        this.menuOptionList = ["Start game", "About"];
        this.endMenuOptionList = ["Play again", "Quit game"];

        this.gameStateEnum = {
            MAINMENU: "mainMenu",
            GAMESETTINGS: "gameSettings",
            FIGHT: "fight",
            ENDMENU: "endMenu",
            ABOUT: "about"
        };

        this.gameMap = {
            DEFAULT: 'default',
            DESERT: 'desert',
            JUNGLE: 'jungle'
        }

        this.gameState = this.gameStateEnum.MAINMENU;
        window.gameState = this.gameState;
        this.gamemode = null;

        this.updateMainMenu = () => {
            var nbMenu = this.menuOptionList.length;
            if (game.keys.up && !game.keys.down) {
                console.log('up');

                //this.gameState = this.gameStateEnum.GAMESETTINGS;
            }
            if (game.keys.down && !game.keys.up) {
                console.log('down');
                //this.gameState = this.gameStateEnum.ABOUT;
            }
        };

        this.updateEndMenu = () => {};

        this.manageGameSettings = () => {};

        this.manageFight = () => {};

        this.update = keys => {
            this.keys = keys;

            this.player.update(this);

            if (!this.gamemode) {

                this.lastKeys = new Map([
                    ["left", keys.left],
                    ["up", keys.up],
                    ["right", keys.right],
                    ["down", keys.down]
                ]);

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
}