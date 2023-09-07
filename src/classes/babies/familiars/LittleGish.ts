import type { CollectibleType } from "isaac-typescript-definitions";
import { ItemPoolType, ModCallback } from "isaac-typescript-definitions";
import { Callback } from "isaacscript-common";
import { Baby } from "../../Baby";
import { getRandomCollectibleTypeFromPool } from "../../features/GetRandomCollectibleTypeFromPool";

/** All items from the Curse Room pool. */
export class LittleGish extends Baby {
  @Callback(ModCallback.PRE_GET_COLLECTIBLE)
  preGetCollectible(
    _itemPoolType: ItemPoolType,
    _decrease: boolean,
    seed: Seed,
  ): CollectibleType | undefined {
    return getRandomCollectibleTypeFromPool(ItemPoolType.CURSE, seed);
  }
}
