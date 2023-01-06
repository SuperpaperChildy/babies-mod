import {
  CollectibleType,
  ItemPoolType,
  ModCallback,
} from "isaac-typescript-definitions";
import { Callback } from "isaacscript-common";
import { getRandomCollectibleTypeFromPool } from "../../utils";
import { Baby } from "../Baby";

/** All items from the Angel Room pool. */
export class MongoBaby extends Baby {
  @Callback(ModCallback.PRE_GET_COLLECTIBLE)
  preGetCollectible(): CollectibleType | undefined {
    return getRandomCollectibleTypeFromPool(ItemPoolType.ANGEL);
  }
}
