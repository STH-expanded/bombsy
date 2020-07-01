class Game {

    constructor() {
        // Initial Frame
        this.frame = 0;

        // Keys Initialization
        this.keys = null;
        this.lastKey = null;
        this.tileSize = 16;


        this.player1 = new Player(1, "Joueur 1", new Vector2D(121, 17));
        this.player2 = new Player(2, "Joueur 2", new Vector2D(345, 17));

        // Initialize Level
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
