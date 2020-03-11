class KeyboardListener {
    constructor() {
        this.keys = {};

        this.keyCodes = new Map([
            [81, "left"], // Q
            [90, "up"], // Z
            [68, "right"], // D
            [83, "down"], // S
            [65, "action"], // A
            [69, "back"], // E
            [32, "bomb"], // SPACE
            [72, "left2"], // H
            [85, "up2"], // U
            [75, "right2"], // K
            [74, "down2"], // J
            [65, "action2"], // Y
            [73, "back2"], // I
            [77, "bomb2"], // M
        ]);

        this.handler = event => {
            if (this.keyCodes.has(event.keyCode)) {
                this.keys[this.keyCodes.get(event.keyCode)] = event.type === "keydown";
                event.preventDefault();
            }
        }

        addEventListener("keydown", this.handler);
        addEventListener("keyup", this.handler);
    }
}
