class Display {
    constructor(game) {
        this.frame = 0;
        this.zoom = 1;
        this.game = game;
        this.canvas = document.createElement('canvas');
        this.cx = this.canvas.getContext("2d");
        this.update = () => {
            // Background
            this.cx.fillStyle = '#FE3455';
            this.cx.fillRect(0 * this.zoom, 0 * this.zoom, this.canvas.width * this.zoom, this.canvas.height * this.zoom);
            // Player
            var player = this.game.player;
            this.cx.fillStyle = "#fff";
            this.cx.fillRect(player.position.x * this.zoom, player.position.y * this.zoom, player.size.x * this.zoom, player.size.y * this.zoom);
            this.cx.fillStyle = "#fff";
            this.cx.font = 16 * this.zoom + "px consolas";
            this.cx.fillText("x:" + player.position.x + " y:" + player.position.y, 8 * this.zoom, 16 * this.zoom);
            this.frame++;
        };
        this.resize = () => {
            if (innerWidth >= 1920 && innerHeight >= 1080) {
                this.zoom = 4;
                this.cx.scale(this.zoom, this.zoom);
                this.canvas.width = 1920;
                this.canvas.height = 1080;
            }
            else if (innerWidth >= 1440 && innerHeight >= 810) {
                this.zoom = 3;
                this.cx.scale(this.zoom, this.zoom);
                this.canvas.width = 1440;
                this.canvas.height = 810;
            }
            else if (innerWidth >= 960 && innerHeight >= 540) {
                this.zoom = 2;
                this.cx.scale(this.zoom, this.zoom);
                this.canvas.width = 960;
                this.canvas.height = 540;
            }
            else {
                this.zoom = 1;
                this.cx.scale(this.zoom, this.zoom);
                this.canvas.width = 480;
                this.canvas.height = 270;
            }
            this.cx.imageSmoothingEnabled = false;
        };
        this.resize();
        window.addEventListener('resize', this.resize);
        document.body.appendChild(this.canvas);
    }
}
//# sourceMappingURL=display.js.map