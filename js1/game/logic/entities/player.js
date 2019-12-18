class Player {
    constructor(speed, pos, bombCount, canPush) {
        this.speed = speed;
        this.position = pos;
        this.size = [10, 10];
        this.isAlive = true;
        this.bombCount = bombCount;
        this.bombCapacity = 1;
        this.range = 2;
        this.canPush = canPush;
        this.moveX = game => {
        };
        this.moveY = game => {
        };
        this.dropBomb = () => {
        };
        this.pushBomb = () => {
        };
        this.update = game => {
            this.moveX(game);
            this.moveY(game);
            this.dropBomb();
            this.pushBomb();
        };
    }
}
//# sourceMappingURL=player.js.map