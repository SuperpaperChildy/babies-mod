import { CollectibleType, SoundEffect } from "isaac-typescript-definitions";
import {
  CallbackCustom,
  isFirstPlayer,
  ModCallbackCustom,
  removeCollectibleFromItemTracker,
  sfxManager,
} from "isaacscript-common";
import { g } from "../../globals";
import { Baby } from "../Baby";

const GRANTED_COLLECTIBLE_TYPES = [
  CollectibleType.GOAT_HEAD, // 215
  CollectibleType.DUALITY, // 498
] as const;

/** Guaranteed Devil Room + Angel Room after N hits. */
export class GoatBaby extends Baby {
  override onRemove(): void {
    for (const collectibleType of GRANTED_COLLECTIBLE_TYPES) {
      g.p.RemoveCollectible(collectibleType);
    }
  }

  @CallbackCustom(ModCallbackCustom.ENTITY_TAKE_DMG_PLAYER)
  entityTakeDmg(player: EntityPlayer): boolean | undefined {
    if (!isFirstPlayer(player)) {
      return undefined;
    }

    const numHits = this.getAttribute("requireNumHits");

    g.run.babyCounters++;
    if (g.run.babyCounters >= numHits && !g.run.babyBool) {
      g.run.babyBool = true;
      sfxManager.Play(SoundEffect.SATAN_GROW);

      for (const collectibleType of GRANTED_COLLECTIBLE_TYPES) {
        player.AddCollectible(collectibleType);
        removeCollectibleFromItemTracker(collectibleType);
      }
    }

    return undefined;
  }
}
