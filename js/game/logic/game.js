class Game {

    constructor() {
        this.frame = 0;

        this.keys = null;
        // this.lastKeys = new Map([
        //     ["left", null],
        //     ["up", null],
        //     ["right", null],
        //     ["down", null]
        // ]);
        this.player = new Player(new Vector2D(10, 10));

        this.menuOptionList = ["Start game", "About"];
        this.endMenuOptionList = ["Play again", "Quit game"];

        this.gameStateEnum = {
            MAINMENU: "mainMenu",
            GAMESETTINGS: "gameSettings",
            FIGHT: "fight",
            ENDMENU: "endMenu"
        };

        this.gameState = this.gameStateEnum.MAINMENU;
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

            // console.log('x: '+this.player.pos.x+', y: '+this.player.pos.y);s

            this.lastKeys = new Map([
                ["left", keys.get("left")],
                ["up", keys.get("up")],
                ["right", keys.get("right")],
                ["down", keys.get("down")]
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