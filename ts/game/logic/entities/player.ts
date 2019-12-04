class Player {

    // Properties
    name: string;
    skin: string;
    speed: number;
    position: Array<number>;
    isAlive: boolean;
    bombCount: number;
    bombCapacity: number;
    range: number;
    canPush: boolean;

    // Methods
    moveX: any;
    moveY: any;
    dropBomb: any;
    pushBomb: any;
    update: any;

    constructor(speed: number, pos: Array<number>, bombCount: number, canPush: boolean) {
        this.speed = speed;
        this.position = pos;
        this.isAlive = true;
        this.bombCount = bombCount;
        this.bombCapacity = 1;
        this.range = 2;
        this.canPush = canPush;

        this.moveX = game => {
            
        }
    
        this.moveY = game => {
            
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