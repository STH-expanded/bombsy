class InputManager {
    constructor() {
        this.inputList = new Map();

        this.update = () => {
            var gamepads = Array.from(navigator.getGamepads());
            gamepads.forEach(gamepad => {
                if (gamepad) {
                    this.inputList.set(gamepad.id, {
                        "left": gamepad.axes[0] < -0.25,
                        "up": gamepad.axes[1] < -0.25,
                        "right": gamepad.axes[0] > 0.25,
                        "down": gamepad.axes[1] > 0.25,
                        "a": gamepad.buttons[1].value,
                        "b": gamepad.buttons[0].value,
                        "start": gamepad.buttons[2].value
                    });
                }
            });
        }

        this.listenKeyboard = event => {
            var keyboardListener = new KeyboardListener();
            keyboardListener.keys.forEach((commands, key) => {
                if (!commands.hasOwnProperty(`keyboard${key}`)) {
                    console.log("Keyboard connected");
                    this.inputList.set(`keyboard${key}`, keyboardListener.keys[key]);
                }
            }); 
        }

        this.listenHandler = event => {
            console.log("Gamepad connected : " + event.gamepad.id);
        }

        this.unlistenHandler = event => {
            console.log("Gamepad disconnected : " + event.gamepad.id);
            this.inputList.delete(event.gamepad.id);
        }

        addEventListener("gamepadconnected", this.listenHandler);
        addEventListener("gamepaddisconnected", this.unlistenHandler);
        addEventListener("keydown", this.listenKeyboard);
    }
}