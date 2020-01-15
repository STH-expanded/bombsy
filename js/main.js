var firstLevel = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 2, 0, 0, 1],
    [1, 0, 1, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1],
    [1, 2, 2, 2, 0, 2, 0, 2, 1, 2, 2, 2, 0, 2, 2, 2, 1],
    [1, 0, 1, 2, 1, 2, 1, 0, 2, 0, 1, 0, 1, 2, 1, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 1],
    [1, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 2, 1],
    [1, 0, 2, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 1],
    [1, 0, 1, 0, 1, 2, 1, 2, 1, 2, 1, 0, 1, 0, 1, 2, 1],
    [1, 2, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 2, 2, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 2, 1, 0, 1, 0, 1, 2, 1, 2, 1, 0, 1, 0, 1],
    [1, 2, 2, 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 2, 2, 2, 1],
    [1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1],
    [1, 0, 0, 2, 2, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

window.onload = () => {

    var game = new Game();
    var display = new Display(game);

    var keyboardListener = new KeyboardListener();

    window.game = game;

    var frame = () => {
        game.update(keyboardListener.keys);
        display.update();
        requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
};