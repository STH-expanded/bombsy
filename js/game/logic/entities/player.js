class Player {

    constructor(id, name, pos) {
        // Player Attributes
        this.id = id;
        this.isAlive = true;
        this.name = name;
        this.range = 10;
        this.pos = pos;
        this.size = new Vector2D(14, 14);

        // Player Powers
        this.bombCapacity = 3;
        this.bombCount = 0;
        this.canPush = false;
        this.speed = new Vector2D(1, 0);
        this.walkspeed = 1.9;

        // Player Collision
        this.collisionBox = new CollisionBox(this.pos, this.size);

        // Horizontal Movement
        this.moveX = game => {

            // Key pressed
            if (game.keys.left && !game.keys.right) {
                this.speed.x = -this.walkspeed;
            } else if (game.keys.right && !game.keys.left) {
                this.speed.x = this.walkspeed;
                
            } else {
                this.speed.x = 0;
            }

            // New Movement
            var xMovement = new Vector2D(this.speed.x, 0);
            var newPos = this.pos.plus(xMovement);     
            var newCollisionBox = new CollisionBox(newPos, this.size);

            // Move if !Collision
            if (newCollisionBox.intersectingCollisionBoxes(game.level.solidTiles).length == 0) {
                this.collisionBox = newCollisionBox;
                this.pos = newPos;
            }
        }

        // Vertical Movement
        this.moveY = game => {

            // Key pressed
            if (game.keys.up && !game.keys.down) {
                this.speed.y = -this.walkspeed;
            } else if (game.keys.down && !game.keys.up) {
                this.speed.y = this.walkspeed;
            } else {
                this.speed.y = 0;
            }
            
            // New Movement
            let yMovement = new Vector2D(0, this.speed.y);
            let newPos = this.pos.plus(yMovement);
            var newCollisionBox = new CollisionBox(newPos, this.size);
    
            // Move if !Collide
            if (newCollisionBox.intersectingCollisionBoxes(game.level.solidTiles).length == 0) {
                this.collisionBox = newCollisionBox;
                this.pos = newPos;
                
            }
        }

        // Drop Bomb
        this.dropBomb = game => {
            if (game.keys.space && !game.lastKeys.space && this.bombCount < this.bombCapacity) {
                let bomb = new Bomb(this.range, this.name, this.pos);
                game.bombs.push(bomb);

                // Increment Bomb Counter
                this.bombCount++;
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