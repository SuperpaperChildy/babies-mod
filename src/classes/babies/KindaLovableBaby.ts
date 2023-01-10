import { CardType } from "isaac-typescript-definitions";
import {
  CallbackCustom,
  isFirstPlayer,
  ModCallbackCustom,
  spawnCard,
  VectorZero,
} from "isaacscript-common";
import { Baby } from "../Baby";

/** Spawns a Lovers card on hit. */
export class KindaLovableBaby extends Baby {
  @CallbackCustom(ModCallbackCustom.ENTITY_TAKE_DMG_PLAYER)
  entityTakeDmgPlayer(player: EntityPlayer): boolean | undefined {
    if (!isFirstPlayer(player)) {
      return undefined;
    }

    spawnCard(CardType.LOVERS, player.Position, VectorZero, player);

    return undefined;
  }
}
