window.onload = () => {

    var game = new Game();
    var display = new Display(game);

    var keyboardListener = new KeyboardListener();
    keyboardListener.listen();

    window.game = game;

    var frame = () => {
        game.update(keyboardListener.keys);
        display.update();
        requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
};