import {
  GridEntityXMLType,
  PickupVariant,
  RoomType,
} from "isaac-typescript-definitions";

export const MOD_NAME = "The Babies Mod";

/** The version is updated automatically by IsaacScript. */
export const VERSION = "1.6.0";

export const FADED_BLUE = Color(0, 0, 1, 0.7);
export const FADED_RED = Color(1, 0, 0, 0.7);
export const FADED_YELLOW = Color(1, 1, 0, 0.7);

export const NUM_SUCCUBI_IN_FLOCK = 10;

export const ROOM_TYPES_TO_NOT_TRANSFORM: ReadonlySet<RoomType> = new Set([
  RoomType.DEFAULT, // 1
  // I AM ERROR rooms should not be converted so that they have a way to escape.
  RoomType.ERROR, // 3
  RoomType.BOSS, // 5
  // Devil Rooms don't need to be converted because they are already Devil Rooms.
  RoomType.DEVIL, // 14
  // Dungeons cannot be converted because they need to have the ladder.
  RoomType.DUNGEON, // 16
  // Big rooms should not be converted.
  RoomType.BOSS_RUSH, // 17
  RoomType.BLACK_MARKET, // 22
  // The mechanic should not interfere with progressing in Greed Mode.
  RoomType.GREED_EXIT, // 23
  // The mechanic should not interfere with getting to Repentance floors.
  RoomType.SECRET_EXIT, // 27
  // The mechanic should not apply to in-between battle rooms.
  RoomType.BLUE, // 28
]);

export const PICKUP_VARIANTS_IMMUNE_TO_BABY_EFFECTS: ReadonlySet<PickupVariant> =
  new Set([
    PickupVariant.COLLECTIBLE, // 100
    PickupVariant.SHOP_ITEM, // 150
    PickupVariant.BIG_CHEST, // 340
    PickupVariant.TROPHY, // 370
    PickupVariant.BED, // 380
  ]);

export const GRID_ENTITY_REPLACEMENT_EXCEPTIONS: ReadonlySet<GridEntityXMLType> =
  new Set([
    GridEntityXMLType.PRESSURE_PLATE,
    GridEntityXMLType.TRAPDOOR,
    GridEntityXMLType.CRAWL_SPACE,
  ]);
