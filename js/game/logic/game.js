class Game {
    constructor(inputList) {
        this.frame = 0;

        // Keys Initialization
        this.keys = null;
        this.lastKey = null;
        this.inputList = inputList;
        this.lastInputList = new Map();

        this.player1 = new Player(1, "Joueur 1", new Vector2D(121, 17));
        this.player2 = new Player(2, "Joueur 2", new Vector2D(345, 17));

        this.activity = new Opening();

        this.players = [];

        // this.player = new Player(new Vector2D(10, 10));
        // Initialize Level
        this.level;

        // Bombs Array
        this.bombs = [];

        // Menu Texts
        // this.menuOptionList = ["Start game", "About"];
        // this.endMenuOptionList = ["Play again", "Quit game"];

        // Menu Options
        this.gameStateEnum = {
            MAINMENU: "mainMenu",
            GAMESETTINGS: "gameSettings",
            FIGHT: "fight",
            ENDMENU: "endMenu",
            ABOUT: "about"
        };

        // Main Menu
        this.mainMenuOptions = ['Game', 'About'];
        this.mainMenuOptionYCenter = 0.5;
        this.mainMenuHandler = (game, options, cursor) => {
            var nextActivity = null;
            switch (options[cursor]) {
                case 'Game':
                    // specify GAMESTATE
                    this.gameState = this.gameStateEnum.FIGHT;
                    this.gamemode = null;

                    // Constructor of GAMESTATE
                    this.level = new Level(firstLevel, "./assets/plant.png", "./assets/wall.png", "./assets/brick.png");

                    break;
                case 'About':
                    // nextActivity = ;
                    console.log('About');
                    break;
            }
        }

        // End Menu
        this.endMenuOptions = ['Rematch', 'CharacterSelection', 'MainMenu'];
        this.endMenuOptionYCenter = 0.5;
        this.endMenuHandler = (game, options, cursor) => {
            var nextActivity = null;
            switch (options[cursor]) {
                case 'Rematch':
                    console.log('rematch');
                    break;
                case 'CharacterSelection':
                    console.log('rematch');
                    break;
                case 'MainMenu':
                    nextActivity = new Menu(game.mainMenuOptions, game.mainMenuOptionYCenter, game.mainMenuHandler);
                    break;
            }
            return nextActivity;
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

        this.update = () => {
            if (this.inputList.size !== this.players.size) {
                this.inputList.forEach((input, id) => {
                    if (!this.players.find(player => player.id === id)) this.players.push(new Player(id));
                });
            }

            switch (this.gameState) {
                /*case this.gameStateEnum.MAINMENU:
                    this.updateMainMenu();
                    break;
                case this.gameStateEnum.GAMESETTINGS:
                    this.manageGameSettings();
                    break;*/
                case this.gameStateEnum.FIGHT:
                    this.manageFight(this.keys);
                    break;
                /*case this.gameStateEnum.ENDMENU:
                    this.updateEndMenu();
                    break;*/
                default:
                    break;    
            };

            this.activity.update(this);

            this.inputList.forEach((input, id) => this.lastInputList.set(id, { ...input }));
            this.frame++;
        };

        /*this.update = () => {
            console.log(this.inputList);
            if (this.inputList.size !== this.players.size) {
                this.inputList.forEach((input, id) => {
                    if (!this.players.find(player => player.id === id)) this.players.push(new Player(id));
                });
            }

            this.activity.update(this);

            this.inputList.forEach((input, id) => this.lastInputList.set(id, { ...input }));
            this.frame++;

            /*switch (this.gameState) {
                /*case this.gameStateEnum.MAINMENU:
                    this.updateMainMenu();
                    break;
                case this.gameStateEnum.GAMESETTINGS:
                    this.manageGameSettings();
                    break;
                case this.gameStateEnum.FIGHT:
                    this.manageFight(keys);
                    break;
                /*case this.gameStateEnum.ENDMENU:
                    this.updateEndMenu();
                    break;
                default:
                    break;        
            };
        }*/
    }
}
