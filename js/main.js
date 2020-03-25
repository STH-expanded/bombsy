window.onload = () => {
    var startGame = () => {
        document.body.innerHTML = '';
        document.body.onclick = null;
        document.body.onkeypress = null;

        var inputManager = new InputManager();
        var game = new Game(inputManager.inputList);
        var display = new Display(game);

        window.game = game;
    
        var frame = () => {
            inputManager.update();
            game.update();
            display.update();  
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }

    var help = document.createElement("p");
    help.innerHTML = "Press any key to continue...";
    document.body.appendChild(help);

    document.body.onclick = () => startGame();
    document.body.onkeypress = () => startGame();
}
