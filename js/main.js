window.onload = () => {

    var game = new Game();
    var display = new Display(game);

    var keyboardListener = new KeyboardListener();
    keyboardListener.listen();

    var frame = () => {
        game.update(keyboardListener.keys);
        display.update();
        requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
};
