class Game {

    constructor() {
        this.frame = 0;

        this.keys = null;
        this.lastKey = null;
        this.player = new Player(new Vector2D(10, 10));

        this.bombs = [];

        this.menuOptionList = ["Start game", "About"];
        this.endMenuOptionList = ["Play again", "Quit game"];

        this.gameStateEnum = {
            MAINMENU: "mainMenu",
            GAMESETTINGS: "gameSettings",
            FIGHT: "fight",
            ENDMENU: "endMenu"
        };

        this.gameState = this.gameStateEnum.FIGHT;
        this.gamemode = null;

        this.updateMainMenu = () => {
            var nbMenu = this.menuOptionList.length;
        };

        this.updateEndMenu = () => {};

        this.manageGameSettings = () => {};

        this.manageFight = () => {};

        this.update = keys => {
            this.keys = keys;
            // console.log(this.keys);

            // console.log(this.bombs);

            this.player.update(this);

            this.bombs.forEach((bomb, index) => {
                bomb.update();
                if (bomb.state == 'exploded') {
                    this.bombs.splice(index, 1);
                    this.player.bombCount--;
                }
            });

            this.lastKeys = {...keys};
            // console.log(this.lastKeys);

            // console.log('x: '+this.player.pos.x+', y: '+this.player.pos.y);s

            // this.lastKeys = new Map([
            //     ["left", keys.left],
            //     ["up", keys.up],
            //     ["right", keys.right],
            //     ["down", keys.down]
            // ]);

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