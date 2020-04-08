class Fight extends Activity {
    
    constructor(game, inputList, level, players) {
        super();
        this.inputList = inputList;
        this.lastInputs = new Map();
        this.level = level;
        this.players = players;

        // Bombs Array
        this.bombs = [];

        this.update = game => {
            // Update Players
            players.forEach(player => {
                player.update(game);
            });
            
            // Update Bombs
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

            


            this.lastInputs = {...inputList};
        }
    }
}