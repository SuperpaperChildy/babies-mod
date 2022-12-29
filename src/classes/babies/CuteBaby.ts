import { CacheFlag, ModCallback } from "isaac-typescript-definitions";
import {
  Callback,
  CallbackCustom,
  ModCallbackCustom,
  repeat,
} from "isaacscript-common";
import { g } from "../../globals";
import { Baby } from "../Baby";

/** -1 damage per pickup taken. */
export class CuteBaby extends Baby {
  @Callback(ModCallback.EVALUATE_CACHE, CacheFlag.DAMAGE)
  evaluateCacheDamage(player: EntityPlayer): void {
    repeat(g.run.babyCounters, () => {
      player.Damage--;
    });
  }

  @CallbackCustom(ModCallbackCustom.POST_PICKUP_COLLECT)
  postPickupCollect(): void {
    g.run.babyCounters++;
    g.p.AddCacheFlags(CacheFlag.DAMAGE);
    g.p.EvaluateItems();
  }
}
