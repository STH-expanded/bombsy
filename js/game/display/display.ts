class Display {

    private frame: number;
    private zoom: number;
    private playerSprite: any;
    private game: any;
    private canvas: any;
    private cx: any;

    private update = () => {

        //background
        this.cx.fillStyle = '#FE3455';
        this.cx.fillRect(
            0 * this.zoom,
            0 * this.zoom,
            this.canvas.width * this.zoom,
            this.canvas.height * this.zoom
        );

        //obstacles
        this.cx.fillStyle = '#000';
        this.game.obstacles.forEach(obstacle => {
            this.cx.fillRect(
                obstacle.pos.x * this.zoom,
                obstacle.pos.y * this.zoom,
                obstacle.size.x * this.zoom,
                obstacle.size.y * this.zoom
            );
        });

        //player
        var player2 = this.game.player2;
        this.cx.fillRect(
            player2.pos.x * this.zoom,
            player2.pos.y * this.zoom,
            player2.size.x * this.zoom,
            player2.size.y * this.zoom
        );

        var player = this.game.player;
        // var sprite = player.speed.x ? this.playerSprite2 : this.playerSprite;

        var sprite = this.playerSprite;

        // Player 1 image :
        this.cx.drawImage(sprite,
            0, 0,
            117, 83,
            player.pos.x * this.zoom,
            player.pos.y * this.zoom,
            player.size.x * this.zoom,
            player.size.y * this.zoom
        );

        console.log("player 1:");
        console.log(this.game.player.pos);
        console.log("player 2 :");
        console.log(this.game.player2.pos);


        //interface
        this.cx.fillStyle = "#fff";
        this.cx.font = 16 * this.zoom + "px consolas";
        this.cx.fillText(
            "x:" + player.pos.x + " y:" + player.pos.y,
            8 * this.zoom,
            16 * this.zoom
        );

        this.cx.fillText(
            "x:" + player2.pos.x + " y:" + player2.pos.y,
            392 * this.zoom,
            16 * this.zoom
        );

        this.frame++;
    }

    private resize = () => {
        if (innerWidth >= 1920 && innerHeight >= 1080) {
            this.zoom = 4;
            this.cx.scale(this.zoom, this.zoom);
            this.canvas.width = 1920;
            this.canvas.height = 1080;
        } else if (innerWidth >= 1440 && innerHeight >= 810) {
            this.zoom = 3;
            this.cx.scale(this.zoom, this.zoom);
            this.canvas.width = 1440;
            this.canvas.height = 810;
        } else if (innerWidth >= 960 && innerHeight >= 540) {
            this.zoom = 2;
            this.cx.scale(this.zoom, this.zoom);
            this.canvas.width = 960;
            this.canvas.height = 540;
        } else {
            this.zoom = 1;
            this.cx.scale(this.zoom, this.zoom);
            this.canvas.width = 480;
            this.canvas.height = 270;
        }
        this.cx.imageSmoothingEnabled = false;
    }


    constructor(game) {
        this.frame = 0;
        this.zoom = 1;

        this.playerSprite = document.createElement("img");
        this.playerSprite.src = "./charizard.png";

        this.game = game;

        this.canvas = document.createElement('canvas');
        this.cx = this.canvas.getContext("2d");

        this.update();

        this.resize();
        window.addEventListener('resize', this.resize);
        document.body.appendChild(this.canvas);
    }
}
