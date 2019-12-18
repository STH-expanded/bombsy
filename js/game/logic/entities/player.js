class Player {

    constructor(pos) {
        this.walkspeed = 5;
        this.speed = new Vector2D(1, 0);
        this.pos = pos;
        this.size = new Vector2D(10, 10);
        this.isAlive = true;
        this.bombCount = 0;
        this.bombCapacity = 1;
        this.range = 2;
        this.canPush = false;

        this.moveX = game => {
            // Directions
            if (game.keys.left) {
                this.speed.x = -this.walkspeed;
            } else if (game.keys.right) {
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

        this.moveY = game => {
            // var floor = collision2D(
            //     this.pos.plus(new Vector2D(0, this.size.y)),
            //     game.floor.pos,
            //     new Vector2D(1, 1), 
            //     game.floor.size
            // );
    
            // Directions
            // if (floor && game.keys.get('up')) {
            //     this.speed.y = -this.jumpSpeed;
            // }

            if (game.keys.up) {
                this.speed.y = -this.walkspeed;
            } else if (game.keys.down) {
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

        this.dropBomb = () => {

        }

        this.pushBomb = () => {

        }

        this.update = game => {
            this.moveX(game);
            this.moveY(game);
            this.dropBomb();
            this.pushBomb();
        }
    }
}