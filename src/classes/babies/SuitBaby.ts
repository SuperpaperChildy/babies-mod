import {
  EntityType,
  FireplaceVariant,
  GridEntityType,
  GridEntityXMLType,
  ItemPoolType,
  LevelStage,
  ModCallback,
  PickupVariant,
  StatueVariant,
} from "isaac-typescript-definitions";
import {
  Callback,
  CallbackCustom,
  ModCallbackCustom,
  asNumber,
  game,
  getCollectibleDevilHeartPrice,
  gridCoordinatesToWorldPosition,
  newRNG,
  onFirstFloor,
  onStageOrLower,
  spawnGridEntityWithVariant,
  spawnWithSeed,
} from "isaacscript-common";
import { mod } from "../../mod";
import {
  isPricedDevilRoomPoolCollectible,
  isRerolledCollectibleBuggedHeart,
  shouldTransformRoomType,
} from "../../utils";
import { Baby } from "../Baby";
import { getRandomCollectibleTypeFromPool } from "../features/GetRandomCollectibleTypeFromPool";

/** All special rooms are Devil Rooms. */
export class SuitBaby extends Baby {
  /**
   * Should only be valid if the floor has special rooms. Additionally, we don't want this to
   * interfere with resetting for an item.
   */
  override isValid(): boolean {
    return onStageOrLower(LevelStage.SHEOL_CATHEDRAL) && !onFirstFloor();
  }

  // 35
  @Callback(ModCallback.POST_PICKUP_UPDATE, PickupVariant.COLLECTIBLE)
  postPickupUpdateCollectible(pickup: EntityPickup): void {
    const collectible = pickup as EntityPickupCollectible;
    const room = game.GetRoom();
    const roomType = room.GetType();
    const player = Isaac.GetPlayer();

    if (!shouldTransformRoomType(roomType)) {
      return;
    }

    if (!isPricedDevilRoomPoolCollectible(collectible)) {
      return;
    }

    // If the price is not correct, update it. (We have to check on every frame in case the health
    // situation changes.)
    const price = getCollectibleDevilHeartPrice(collectible.SubType, player);
    if (collectible.Price !== asNumber(price)) {
      collectible.Price = price;
    }
  }

  /**
   * Rerolled collectibles turn into hearts, so delete the heart and manually create another
   * pedestal item.
   */
  // 35
  @Callback(ModCallback.POST_PICKUP_UPDATE, PickupVariant.HEART)
  postPickupUpdateHeart(pickup: EntityPickup): void {
    const room = game.GetRoom();
    const roomType = room.GetType();

    if (!shouldTransformRoomType(roomType)) {
      return;
    }

    if (isRerolledCollectibleBuggedHeart(pickup)) {
      pickup.Remove();

      const collectibleType = getRandomCollectibleTypeFromPool(
        ItemPoolType.DEVIL,
        pickup.InitSeed,
      );
      const collectible = mod.spawnCollectible(
        collectibleType,
        pickup.Position,
        pickup.InitSeed,
      );
      collectible.AutoUpdatePrice = false;
      collectible.Price = 15;
    }
  }

  // 71
  @Callback(ModCallback.PRE_ROOM_ENTITY_SPAWN)
  preRoomEntitySpawn(): [EntityType | GridEntityXMLType, int, int] | undefined {
    const room = game.GetRoom();
    const roomType = room.GetType();

    if (shouldTransformRoomType(roomType)) {
      return [GridEntityXMLType.EFFECT, 0, 0];
    }

    return undefined;
  }

  @CallbackCustom(ModCallbackCustom.POST_NEW_ROOM_REORDERED)
  postNewRoomReordered(): void {
    const room = game.GetRoom();
    const roomType = room.GetType();
    const isFirstVisit = room.IsFirstVisit();
    const roomSeed = room.GetSpawnSeed();
    const player = Isaac.GetPlayer();

    // Ignore some special rooms.
    if (!isFirstVisit || !shouldTransformRoomType(roomType)) {
      return;
    }

    const rng = newRNG(roomSeed);
    const collectibleType = getRandomCollectibleTypeFromPool(
      ItemPoolType.DEVIL,
      rng,
    );
    const position = gridCoordinatesToWorldPosition(6, 4);
    const collectible = mod.spawnCollectible(collectibleType, position, rng);
    collectible.AutoUpdatePrice = false;
    collectible.Price = getCollectibleDevilHeartPrice(collectibleType, player);

    // Spawn the Devil Statue.
    const oneTileAboveCenterGridIndex = 52;
    spawnGridEntityWithVariant(
      GridEntityType.STATUE,
      StatueVariant.DEVIL,
      oneTileAboveCenterGridIndex,
    );

    // Spawn the two fires.
    const firePositions = [
      gridCoordinatesToWorldPosition(3, 1),
      gridCoordinatesToWorldPosition(9, 1),
    ];
    for (const firePosition of firePositions) {
      spawnWithSeed(
        EntityType.FIREPLACE,
        FireplaceVariant.NORMAL,
        0,
        firePosition,
        rng,
      );
    }
  }
}
