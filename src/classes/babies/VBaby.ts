import { ModCallback } from "isaac-typescript-definitions";
import { Callback } from "isaacscript-common";
import { getBabyPlayerFromEntity } from "../../utils";
import { Baby } from "../Baby";

const RING_RADIUS = 5;

/** Electric ring tears. */
export class VBaby extends Baby {
  @Callback(ModCallback.POST_FIRE_TEAR)
  postFireTear(tear: EntityTear): void {
    const player = getBabyPlayerFromEntity(tear);
    if (player === undefined) {
      return;
    }

    player.FireTechXLaser(tear.Position, tear.Velocity, RING_RADIUS);
    tear.Remove();
  }
}
