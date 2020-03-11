class Player {
    constructor(pos, name, id) {
        this.walkspeed = 5;
        this.speed = new Vector2D(1, 0);
        this.pos = pos;
        this.size = new Vector2D(10, 10);
        this.isAlive = true;
        this.bombCount = 0;
        this.bombCapacity = 3;
        this.range = 10;
        this.canPush = false;
        this.id = id;

        this.assignMovementKeys = (game, id) => {
            var movementKeys = new Map();
            if (id === 1) {
                var left = game.keys.left;
                var right = game.keys.right;
                var up = game.keys.up;
                var down = game.keys.down;
            } else if (id === 2) {
                var left = game.keys.left2;
                var right = game.keys.right2;
                var up = game.keys.up2;
                var down = game.keys.down2;
            }
            movementKeys.set('left', left)
                .set('right', right)
                .set('up', up)
                .set('down', down);

            return movementKeys;
        }

        this.assignActionKeys = (game, id) => {
            var actionKeys = new Map();
            if (id === 1) {
                var dropBomb = game.keys.bomb;
            } else if (id === 2) {
                var dropBomb = game.keys.bomb2;
            }
            actionKeys.set('dropBomb', dropBomb);

            return actionKeys;
        }

        // Horizontal Movement
        this.moveX = game => {
            // Directions
            var keys = this.assignMovementKeys(game, this.id);

            if (keys.get('left') && !keys.get('down') && !keys.get('up') && !keys.get('right')) {
                this.speed.x = -this.walkspeed;
            } else if (keys.get('right') && !keys.get('down') && !keys.get('left') && !keys.get('up')) {
                this.speed.x = this.walkspeed;
            } else {
                this.speed.x = 0;
            }

            var xMovement = new Vector2D(this.speed.x, 0);
            var newPos = this.pos.plus(xMovement);

            // var obstacle = collision2D(
            //     newPos, game.floor.pos,
            //     this.size, game.floor.size
            // )

            // if (obstacle) {
            //     this.speed.x = 0;
            // } else {
            //     this.pos = newPos;
            // }
            this.pos = newPos;

            //Collision
            // if (!collision2D(
            //     this.pos.plus(xMovement),
            //     game.floor.pos,
            //     this.size,
            //     game.floor.size
            // )) {
            //     this.pos = this.pos.plus(xMovement);
            // }

        }

        // Vertical Movement
        this.moveY = game => {
            // var floor = collision2D(
            //     this.pos.plus(new Vector2D(0, this.size.y)),
            //     game.floor.pos,
            //     new Vector2D(1, 1),
            //     game.floor.size
            // );

            // Directions
            var keys = this.assignMovementKeys(game, this.id);

            if (keys.get('up') && !keys.get('down') && !keys.get('left') && !keys.get('right')) {
                this.speed.y = -this.walkspeed;
            } else if (keys.get('down') && !keys.get('up') && !keys.get('left') && !keys.get('right')) {
                this.speed.y = this.walkspeed;
            } else {
                this.speed.y = 0;
            }

            let yMovement = new Vector2D(0, this.speed.y);
            let newPos = this.pos.plus(yMovement);

            // let obstacle = collision2D(newPos, game.floor.pos, this.size, game.floor.size);

            // if (obstacle) {
            //     this.speed.y = 0;
            // } else {
            //     this.pos = newPos;
            // }
            this.pos = newPos;
        }

        // Drop Bomb
        this.dropBomb = game => {
            var keys = this.assignActionKeys(game, this.id);

            if (this.id === 1) {
                if (keys.get('dropBomb') && !game.lastKeys.bomb && this.bombCount < this.bombCapacity) {
                    let bomb = new Bomb(this.range, this.id, this.pos);
                    game.bombs.push(bomb);

                    // Increment Bomb Counter
                    this.bombCount++;
                }
            } else if (this.id === 2) {
                if (keys.get('dropBomb') && !game.lastKeys.bomb2 && this.bombCount < this.bombCapacity) {
                    let bomb = new Bomb(this.range, this.id, this.pos);
                    game.bombs.push(bomb);

                    // Increment Bomb Counter
                    this.bombCount++;
                }
            }
        }

        // Push Bomb
        this.pushBomb = () => {

        }

        this.update = game => {
            this.moveX(game);
            this.moveY(game);
            this.dropBomb(game);
            this.pushBomb();
        }
    }
}
