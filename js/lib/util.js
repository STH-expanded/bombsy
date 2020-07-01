var flipHorizontally = (context, around) => {
    context.translate(around, 0);
    context.scale(-1, 1);
    context.translate(-around, 0);
};

var collision2D = (aPos, aSize, bPos, bSize) => {
    return !(
        bPos.x >= aPos.x + aSize.x ||
        bPos.x + bSize.x <= aPos.x ||
        bPos.y >= aPos.y + aSize.y ||
        bPos.y + bSize.y <= aPos.y
    );
};

var obstaclesAt = (pos, size, obstacles) => {
    var result = [];
    obstacles.forEach(obstacle => {
        if (collision2D(
                pos, size,
                obstacle.pos, obstacle.size
            )) {
            result.push(obstacle);
        }
    });
    return result;
};