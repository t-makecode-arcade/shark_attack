// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000909010000000000000c1200000000000505040000000000000c000f120011000303020000000000000c0012000f00000808010000000000000c0000000000000505040000000000000c000f000010000303020000000000000c0000000000000707010000000000000c0000000f00000505040000000000000e000d0d0d0d0d030302000000000000000000141414140606010000000000000000001414141405050400000000000000000014151414030302000000000000000000000000030a0a010000000000000000000000001305050400000000000000000000000005030302000000000000000000000000000b0b0100000000000000000000000000`, img`
. . 2 . . . . . . 2 . . . . . . 
2 2 2 . . . . . . 2 . . . . . . 
2 2 2 . . . . . . 2 . . . . . . 
. . 2 . . . . . . 2 . . . . . . 
2 2 2 . . . . . . 2 . . . . . . 
2 2 2 . . . . . . 2 . . . . . . 
. . 2 . . . . . . 2 . . . . . . 
2 2 2 . . . . . . 2 . 2 2 2 2 2 
2 2 2 . . . . . . . . . 2 2 2 2 
. . 2 . . . . . . . . . 2 2 2 2 
2 2 2 . . . . . . . . . 2 2 2 2 
2 2 2 . . . . . . . . . . . . 2 
. . 2 . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,sprites.builtin.coral1,sprites.builtin.coral2,sprites.builtin.coral3,sprites.builtin.coral4,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight2,myTiles.tile10], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
