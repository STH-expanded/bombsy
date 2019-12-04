class Player {
    constructor(pos, size) {
        this.pos = pos;
        this.size = size;
        this.walkSpeed = 2;
        this.jumpSpeed = 6;
        this.speed = new Vector2D(0, 0);
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;

        this.moveX = game => {
            if (game.keys.get('left')) this.speed.x = -this.walkSpeed;
            else if (game.keys.get('right')) this.speed.x = this.walkSpeed;
            else this.speed.x = 0;

            var newPos = this.pos.plus(new Vector2D(this.speed.x, 0));

            var obstacles = obstaclesAt(newPos, this.size, game.obstacles);

            if (obstacles.length > 0) {
                this.speed.x = 0;
            } else {
                this.pos = newPos;
            }
        };

        this.moveY = game => {

            var floor = obstaclesAt(this.pos.plus(new Vector2D(0, this.size.y)), new Vector2D(this.size.x, 1), game.obstacles);

            if (floor.length > 0 && game.keys.get('up')) this.speed.y = -this.jumpSpeed;

            this.speed.y += game.gravity.y;

            var newPos = this.pos.plus(new Vector2D(0, this.speed.y));

            var obstacles = obstaclesAt(newPos, this.size, game.obstacles);

            if (obstacles.length > 0) {
                this.speed.y = 0;
            } else {
                this.pos = newPos;
            }
        };

        this.update = game => {

            this.moveX(game);
            this.moveY(game);

            if (this.pos.y > 270) {
                this.pos.y = 32;
            }
        }
    }
}
