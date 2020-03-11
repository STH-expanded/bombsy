var firstLevel = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 2, 0, 0, 1],
    [1, 0, 1, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1],
    [1, 2, 2, 2, 0, 2, 0, 2, 1, 2, 2, 2, 0, 2, 2, 2, 1],
    [1, 0, 1, 2, 1, 2, 1, 0, 2, 0, 1, 0, 1, 2, 1, 0, 1],
    [1, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 1],
    [1, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 2, 1],
    [1, 0, 2, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 1],
    [1, 0, 1, 0, 1, 2, 1, 2, 1, 2, 1, 0, 1, 0, 1, 2, 1],
    [1, 2, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 0, 2, 2, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 2, 1, 0, 1, 0, 1, 2, 1, 2, 1, 0, 1, 0, 1],
    [1, 2, 2, 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 2, 2, 2, 1],
    [1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1],
    [1, 0, 0, 2, 2, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

class Level {
    constructor(map, groundTile, wallTile, brickTile) {
        this.map = map;
        this.tileSize = 16;
        this.groundTile = groundTile;
        this.wallTile = wallTile;
        this.brickTile = brickTile;
        this.tiles = new Map();
        this.solidTiles = [];
    }

    fillMap = (display, game) => {
        this.solidTiles = [];
        for (var row = 0; row < this.map.length; row++) {
            for (var column = 0; column < this.map[0].length; column++) {
                var key = this.map[row][column];
                var position = new Vector2D(row * this.tileSize, column * this.tileSize);
                let tile;
                switch (key) {
                    case 0:
                        tile = new Tile('ground', position, this.tileSize, this.groundTile);
                        // console.log(game.zoom);
                        this.tiles.set(position, tile);
                        break;
                    case 1:
                        tile = new Tile('wall', position, this.tileSize, this.wallTile);
                        this.tiles.set(position, tile);
                        this.solidTiles.push(tile.collisionBox);
                        break;
                    case 2:
                        tile = new Tile('brick', position, this.tileSize, this.brickTile);
                        this.tiles.set(position, tile);
                        this.solidTiles.push(tile.collisionBox);
                        break;
                }
            }
        }

        // Parse Tiles in map to Array of CollisionBox
    }
    
}
