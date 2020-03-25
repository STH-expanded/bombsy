class Game {

    constructor() {
        // Initial Frame
        this.frame = 0;

        // Keys Initialization
        this.keys = null;
        this.lastKey = null;

        // Initialize Player and Level
        this.player = new Player(1, "Bobby", new Vector2D(121, 17));
        this.level;

        // Bombs Array
        this.bombs = [];

        // Menu Texts
        this.menuOptionList = ["Start game", "About"];
        this.endMenuOptionList = ["Play again", "Quit game"];

        // Menu Options
        this.gameStateEnum = {
            MAINMENU: "mainMenu",
            GAMESETTINGS: "gameSettings",
            FIGHT: "fight",
            ENDMENU: "endMenu"
        };

        // specify GAMESTATE
        this.gameState = this.gameStateEnum.FIGHT;
        this.gamemode = null;

        // Constructor of GAMESTATE
        switch (this.gameState) {

            // Create Level
            case this.gameStateEnum.FIGHT:
                this.level = new Level(firstLevel, "./assets/plant.png", "./assets/wall.png", "./assets/brick.png");
        }

        // Updates
        this.updateMainMenu = () => {
            var nbMenu = this.menuOptionList.length;
        };

        this.updateEndMenu = () => {};

        this.manageGameSettings = () => {};

        this.manageFight = (keys) => {

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
        };

        this.update = keys => {
            switch (this.gameState) {
                case this.gameStateEnum.MAINMENU:
                    this.updateMainMenu();
                    break;
                case this.gameStateEnum.GAMESETTINGS:
                    this.manageGameSettings();
                    break;
                case this.gameStateEnum.FIGHT:
                    this.manageFight(keys);
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