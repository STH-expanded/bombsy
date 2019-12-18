class Game {
    // Properties
    frame: number;
    keys: any;
    lastKeys; // need to be changed
    player: Player;
    menuOptionList: Array<string>;
    endMenuOptionList: Array<string>;
    gameStateEnum: any;
    gameState: string;
    gamemode: any;

    // Methods
    update: any;
    updateMainMenu: any;
    manageGameSettings: any;
    manageFight: any;
    updateEndMenu: any;

    constructor() {
        this.frame = 0;

        this.keys = null;
        this.lastKeys = new Map([
            ["left", null],
            ["up", null],
            ["right", null],
            ["down", null]
        ]);
        this.player = new Player(1, [], 1, false);

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

        console.log(this.player);

        this.updateMainMenu = () => {
            var nbMenu = this.menuOptionList.length;
        };

        this.updateEndMenu = () => {};

        this.manageGameSettings = () => {};

        this.manageFight = () => {};

        this.update = keys => {
            this.keys = keys;

            this.player.update(this);

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
