class DisplayMenu extends ActivityDisplay {}

DisplayMenu.update = display => {
    var menu = display.game.activity;

    if (menu.optionYCenter === display.game.mainMenuOptionYCenter) {
        display.cx.drawImage(
            display.assets.titleScreen, 
            0, 0, 400, 150, 
            (display.canvas.width / 2) - (134 * display.zoom / 2), 0 * display.zoom, 
            134 * display.zoom, 50 * display.zoom
        );
    }
    else {
        display.cx.fillStyle = '#114';
        display.cx.fillRect(0 * display.zoom, 0 * display.zoom, 480 * display.zoom, 270 * display.zoom);
    }

    // Options
    var drawMenuElement = (asset, index, offset) => {
        display.cx.drawImage(
            asset,
            0, 0, 400, 150,
            176 * display.zoom + offset, 75 * index * display.zoom + 75 * display.zoom, 
            134 * display.zoom, 50 * display.zoom
        );
    };

    menu.options.forEach((option, index) => {
        drawMenuElement(display.assets['btn' + option], index, 0);
        if (display.game.activity.cursor === index) {
            drawMenuElement(display.assets.menuCursor, index, 0);
        }
    });

    // Transitions
    //if (menu.initAnimFrame) display.fadeEffect('#000', menu.initAnimFrame, menu.initAnimInitFrame);
    //if (menu.endAnimFrame) display.fadeEffect('#000', menu.endAnimFrame, menu.endAnimEndFrame);
}