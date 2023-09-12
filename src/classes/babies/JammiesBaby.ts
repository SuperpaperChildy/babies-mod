import {
  addRoomClearCharge,
  CallbackCustom,
  ModCallbackCustom,
} from "isaacscript-common";
import { Baby } from "../Baby";

/** Extra charge on room clear. */
export class JammiesBaby extends Baby {
  @CallbackCustom(ModCallbackCustom.POST_ROOM_CLEAR_CHANGED, true)
  postRoomClearChangedTrue(): boolean | undefined {
    const player = Isaac.GetPlayer();
    addRoomClearCharge(player);

    return undefined;
  }
}
