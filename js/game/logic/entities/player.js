class Player {

    constructor(id, name, pos, inputs) {
        // Player Attributes
        this.id = id
        this.isAlive = true;
        this.name = name;
        this.range = 10;
        this.pos = pos;
        this.inputs = inputs;
        this.size = new Vector2D(14, 14);

        // Player Powers
        this.bombCapacity = 3;
        this.bombCount = 0;
        this.canPush = false;
        this.speed = new Vector2D(1, 0);
        this.walkspeed = 1.9;

        // Player Collision
        this.collisionBox = new CollisionBox(this.pos, this.size);

        // this.assignMovementKeys = (game, id) => {
        //     var movementKeys = new Map();
        //     console.log(game.inputList);
            
        //     /*if (id === 1) {
        //         var left = game.keys.left;
        //         var right = game.keys.right;
        //         var up = game.keys.up;
        //         var down = game.keys.down;
        //     } else if (id === 2) {
        //         var left = game.keys.left2;
        //         var right = game.keys.right2;
        //         var up = game.keys.up2;
        //         var down = game.keys.down2;
        //     }*/
        //     movementKeys.set('left', left)
        //         .set('right', right)
        //         .set('up', up)
        //         .set('down', down);

        //     return movementKeys;
        // }

        // this.assignActionKeys = (game, id) => {
        //     var actionKeys = new Map();
        //     if (id === 1) {
        //         var dropBomb = game.keys.bomb;
        //     } else if (id === 2) {
        //         var dropBomb = game.keys.bomb2;
        //     }
        //     actionKeys.set('dropBomb', dropBomb);

        //     return actionKeys;
        // }

        // Horizontal Movement
        this.moveX = game => {
            // Directions
            var keys = this.inputs;

            if (keys.get('left') && !keys.get('right')) {
                this.speed.x = -this.walkspeed;
            } else if (keys.get('right') && !keys.get('left')) {
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
          
            // Directions
            var keys = this.inputs;

            if (keys.get('up') && !keys.get('down')) {
                this.speed.y = -this.walkspeed;
            } else if (keys.get('down') && !keys.get('up')) {
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
            this.inputs = {...game.inputList.get(this.id)};
            
            this.moveX(game);
            this.moveY(game);
            this.dropBomb(game);
            this.pushBomb();
        }
    }
}
