class Game {

    constructor(inputList) {
        this.frame = 0;
        this.keys = null;
        this.inputList = inputList;

        this.lastInputList = new Map();

        this.players = [];

        this.player = new Player(1, [], 1, false);

        this.menuOptionList = ["Start game", "About"];
        this.endMenuOptionList = ["Play again", "Quit game"];

        this.gameStateEnum = {
            MAINMENU: "mainMenu",
            GAMESETTINGS: "gameSettings",
            FIGHT: "fight",
            ENDMENU: "endMenu"
        };

        this.gameMap = {
            DEFAULT: 'default',
            DESERT: 'desert',
            JUNGLE: 'jungle'
        }

        this.gameState = this.gameStateEnum.MAINMENU;
        window.gameState = this.gameState;
        this.gamemode = null;

        console.log(this.player);

        this.updateMainMenu = () => {
            /*console.log(this.keys);
            var nbMenu = this.menuOptionList.length;
            if (this.keys.get('arrow-up')) {
                console.log('up');
            }
            if (this.keys.get('arrow-down')) {
                console.log('down');
            }*/
        };

        this.updateEndMenu = () => {};

        this.manageGameSettings = () => {};

        this.manageFight = () => {};

        this.update = keys => {
            this.keys = keys;

            // console.log(keys);
            this.player.update(this);

            if (!this.gamemode) {

            } else if (!this.fight) {

            } else {

            }

            this.inputList.forEach((input, id) => {
                if (input.a) console.log("a : " + id);
                if (input.b) console.log("b : " + id);
                if (input.up) console.log("up : " + id);
                if (input.down) console.log("down : " + id);
                if (input.left) console.log("left : " + id);
                if (input.right) console.log("right : " + id);
            });

            this.frame++;

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