class Tile {
    constructor(typeOfTile, position, size, image) {
        this.collisionBox = new CollisionBox(position, new Vector2D(size, size));
        this.image = image;
        this.position = position;
        this.typeOfTile = typeOfTile;
    }
}
