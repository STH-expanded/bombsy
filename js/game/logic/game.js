class Game {
    constructor(inputList) {
        this.frame = 0;
        this.keys = null;
        this.inputList = inputList;

        this.lastInputList = new Map();

        this.activity = new Opening();

        this.players = [];

        // this.player = new Player(new Vector2D(10, 10));

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
            console.log(options[cursor]);
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

        this.update = () => {
            if (this.inputList.size !== this.players.size) {
                this.inputList.forEach((input, id) => {
                    if (!this.players.find(player => player.id === id)) this.players.push(new Player(id));
                });
            }

            this.activity.update(this);

            this.inputList.forEach((input, id) => this.lastInputList.set(id, { ...input }));
            this.frame++;
        };
    }
}