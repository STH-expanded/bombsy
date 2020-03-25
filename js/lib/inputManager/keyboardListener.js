class KeyboardListener {
    constructor() {
        this.keys = {
            "left": false,
            "up": false,
            "right": false,
            "down": false,
            "a": false,
            "b": false,
            "start": false,
            "bomb": false,
            "up2": false,
            "left2": false,
            "rigth2": false,
            "down2": false,
            "action2": false,
            "back2": false,
            "bomb2": false,
        };

        this.keyCodes = {
            q: "left",
            z: "up",
            d: "right",
            s: "down",
            o: "a",
            p: "b",
            Space: "bomb",
            Enter: "start",
            u: "up2",
            h: "left2",
            k: "rigth2",
            j: "down2",
            y: "action2",
            i: "back2",
            m: "bomb2"
        };

        this.handler = event => {
            if (event.key in this.keyCodes) this.keys[this.keyCodes[event.key]] = event.type === "keydown";
        }

        document.body.addEventListener("keydown", this.handler);
        document.body.addEventListener("keyup", this.handler);
    }
}