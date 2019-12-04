window.onload = () => {

    var game: Game = new Game();
    var display: Display = new Display(game);

    var keyboardListener: KeyboardListener = new KeyboardListener();
    keyboardListener.listen();

    var frame = () => {
        game.update(keyboardListener.keys);
        display.update();
        requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
};
