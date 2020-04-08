class Game {
    constructor(inputList) {
        this.frame = 0;

        this.inputList = inputList;
        this.lastInputList = new Map();
        this.players = [];
        this.activity = new Opening();
        this.level = null;

        // Main Menu
        this.mainMenuOptions = ['Game', 'About'];
        this.mainMenuOptionYCenter = 0.5;
        this.mainMenuHandler = (game, options, cursor) => {
            var nextActivity = null;
            switch (options[cursor]) {
                case 'Game':
                    this.players = [
                        new Player(1, "Joueur 1", new Vector2D(121, 17), this.inputList),
                        new Player(2, "Joueur 2", new Vector2D(345, 17), this.inputList)
                    ];
                    console.log(this.inputList);

                    console.log(this.players[0]);
                    this.level = new Level(firstLevel, "./assets/plant.png", "./assets/wall.png", "./assets/brick.png");
                    nextActivity = new Fight(this, this.inputList, this.level, this.players);
                    break;
                case 'About':
                    // nextActivity = ;
                    console.log('About');
                    break;
            }
            return nextActivity;
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
