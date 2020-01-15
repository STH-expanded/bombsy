class Level {
    constructor(map, groundTile, wallTile, brickTile) {
        this.map = map;
        this.groundTile = groundTile;
        this.wallTile = wallTile;
        this.brickTile = brickTile;
        this.tiles = new Map();
    }

    fillMap = (display) => {
        for (var row = 0; row < this.map.length; row++) {
            for (var column = 0; column < this.map[0].length; column++) {
                var position = row + ', ' + column;
                var key = this.map[row][column];
                switch (key) {
                    case 0:
                        this.tiles.set(position,
                            new Tile('ground', position, this.groundTile)
                        );
                        break;
                    case 1:
                        this.tiles.set(position,
                            new Tile('wall', position, this.wallTile)
                        );
                        break;
                    case 2:
                        this.tiles.set(position,
                            new Tile('brick', position, this.brickTile)
                        );
                        break;
                }
            }
        }
    }
}
