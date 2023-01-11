import { CollectibleType } from "isaac-typescript-definitions";
import {
  game,
  getRoomStageID,
  getRoomVariant,
  log,
  ModCallbackCustom,
  repeat,
} from "isaacscript-common";
import { updateCachedAPIFunctions } from "../cache";
import { NUM_SUCCUBI_IN_FLOCK } from "../constants";
import { g } from "../globals";
import { mod } from "../mod";
import { GlobalsRunBabyTears } from "../types/GlobalsRunBabyTears";
import { GlobalsRunRoom } from "../types/GlobalsRunRoom";
import { getCurrentBaby } from "../utilsBaby";

export function init(): void {
  mod.AddCallbackCustom(ModCallbackCustom.POST_NEW_ROOM_REORDERED, main);
}

function main() {
  updateCachedAPIFunctions();

  const gameFrameCount = game.GetFrameCount();
  const stage = g.l.GetStage();
  const stageType = g.l.GetStageType();
  const roomStageID = getRoomStageID();
  const roomVariant = getRoomVariant();
  const roomSeed = g.r.GetSpawnSeed();

  log(
    `MC_POST_NEW_ROOM (Babies Mod) - ${roomStageID}.${roomVariant} (on stage ${stage}.${stageType}) (game frame ${gameFrameCount})`,
  );

  // Reset room-related variables
  g.run.room = new GlobalsRunRoom(roomSeed);

  // Reset baby-specific variables
  g.run.babyCountersRoom = 0;
  g.run.babyTears = new GlobalsRunBabyTears();

  // Handle items that are not tied to specific babies.
  resetFlockOfSuccubi();

  // Do nothing if we are not a baby.
  const [babyType] = getCurrentBaby();
  if (babyType === -1) {
    return;
  }

  stopDrawingBabyIntroText();
}

function stopDrawingBabyIntroText() {
  if (g.run.drawIntro) {
    g.run.drawIntro = false;
  }
}

function resetFlockOfSuccubi() {
  if (!g.run.flockOfSuccubi) {
    return;
  }
  g.run.flockOfSuccubi = false;

  repeat(NUM_SUCCUBI_IN_FLOCK, () => {
    g.p.RemoveCollectible(CollectibleType.SUCCUBUS);
  });
}
