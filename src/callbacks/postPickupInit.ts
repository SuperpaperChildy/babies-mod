import { ModCallback, PickupVariant } from "isaac-typescript-definitions";
import { mod } from "../mod";
import { CollectibleTypeCustom } from "../types/CollectibleTypeCustom";
import { getCurrentBaby } from "../utils";
import { postPickupInitBabyFunctionMap } from "./postPickupInitBabyFunctionMap";

export function init(): void {
  mod.AddCallback(ModCallback.POST_PICKUP_INIT, main);
}

function main(pickup: EntityPickup) {
  const [babyType] = getCurrentBaby();
  if (babyType === -1) {
    return;
  }

  // All baby effects should ignore the Checkpoint.
  if (
    pickup.Variant === PickupVariant.COLLECTIBLE &&
    pickup.SubType === (CollectibleTypeCustom.CHECKPOINT as int)
  ) {
    return;
  }

  const postPickupInitBabyFunction =
    postPickupInitBabyFunctionMap.get(babyType);
  if (postPickupInitBabyFunction !== undefined) {
    postPickupInitBabyFunction(pickup);
  }
}
