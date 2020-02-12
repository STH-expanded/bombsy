class Game {

    constructor(inputList) {
        this.frame = 0;
        this.keys = null;
        this.inputList = inputList;

        this.lastInputList = new Map();

        this.activity = new Opening();

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

        // Main Menu
        this.mainMenuOptions = ['Game', 'About'];
        this.mainMenuOptionYCenter = 0.5;
        this.mainMenuHandler = (game, options, cursor) => {
            var nextActivity = null;
            if (!(options[cursor] === 'Game' && game.players.length < 2)) {
                nextActivity = new GameSettings(
                    options[cursor],
                    game.characters,
                    [
                        game.players[0],
                        options[cursor] === 'Game' ? game.players[1] : new Player('computer')
                    ]
                );
            }
            return nextActivity;
        };

        // End Menu
        this.endMenuOptions = ['Rematch', 'CharacterSelection', 'MainMenu'];
        this.endMenuOptionYCenter = 0.5;
        this.endMenuHandler = (game, options, cursor) => {
            var nextActivity = null;
            switch (options[cursor]) {
                case 'Rematch':
                    console.log('rematch');
                    // nextActivity = new Fight(game.lastFight.players, game.lastFight.stage, true);
                    break;
                case 'CharacterSelection':
                    console.log('rematch');
                    // nextActivity = new CharacterSelection(options[cursor], game.characters, game.lastFight.players);
                    break;
                case 'MainMenu':
                    console.log('Main menu');
                    // nextActivity = new Menu(game.mainMenuOptions, game.mainMenuOptionYCenter, game.mainMenuHandler);
                    break;
            }
            return nextActivity;
        };

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
            if (game.keys.enter && !game.keys.up && !game.keys.up) {
                console.log('enter');
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
                        this.nextActivity = new Menu(game.mainMenuOptions, game.mainMenuOptionYCenter, game.mainMenuHandler);
                        // this.updateMainMenu();
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