class KeyboardListener {
    constructor() {
        this.keys = [
            {
                "left": false,
                "up": false,
                "right": false,
                "down": false,
                "a": false,
                "b": false,
                "bomb": false,
                "start": false,
            },
            {
                "up2": false,
                "left2": false,
                "right2": false,
                "down2": false,
                "a2": false,
                "b2": false,
                "bomb2": false,
            }
        ];

        this.keyCodes = {
            q: "left",
            z: "up",
            d: "right",
            s: "down",
            a: "a",
            e: "b",
            Space: "bomb",
            Enter: "start",
            h: "left2",
            u: "up2",
            k: "rigth2",
            j: "down2",
            y: "a2",
            i: "b2",
            m: "bomb2"
        };

        this.handler = event => {
            this.keys.forEach(keySet => {
                if (event.key in this.keyCodes) keySet[this.keyCodes[event.key]] = event.type === "keydown";
                // console.log(keySet);
            })
        }

        document.body.addEventListener("keydown", this.handler);
        document.body.addEventListener("keyup", this.handler);
    }
}