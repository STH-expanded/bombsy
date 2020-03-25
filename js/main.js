function rand() {
    randNumbers = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1];
    return randNumbers[Math.floor(Math.random() * randNumbers.length)];
}

var firstLevel = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 0, 1, rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), 1, 0, 0, 2],
    [2, 0, 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, 0, 2],
    [2, 1, rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), 1, 2],
    [2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2],
    [2, rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), 2],
    [2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2],
    [2, rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), 2],
    [2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2],
    [2, rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), 2],
    [2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2],
    [2, rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), 2],
    [2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2],
    [2, 1, rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), 1, 2],
    [2, 0, 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, rand(), 2, 0, 2],
    [2, 0, 0, 1, rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), 1, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
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
