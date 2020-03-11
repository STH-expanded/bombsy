class Assets {
    constructor() {
        // Opening
        this.openingImg = document.createElement('img');
        this.openingImg.src = 'img/opening.png';

        // Menu
        this.titleScreen = document.createElement('img');
        this.titleScreen.src = 'img/bombsy.png';

        this.btnNewGame = document.createElement('img');
        this.btnNewGame.src = 'img/menu/btnNewGame.png';
        this.menuCursor = document.createElement('img');
        this.menuCursor.src = 'img/menu/menuCursor.png';

        this.btnAbout = document.createElement('img');
        this.btnAbout = 'img/menu/btnAbout.png';
        
        this.btnRematch = document.createElement('img');
        this.btnRematch.src = 'img/menu/btnRematch.png';

        this.btnMainMenu = document.createElement('img');
        this.btnMainMenu.src = 'img/menu/btnMenu.png';
        
        this.btnExit = document.createElement('img');
        this.btnExit = 'img/menu/btnExit.png';
        
    }
}