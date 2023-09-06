import {
  EntityPartition,
  GridEntityType,
  LevelStage,
} from "isaac-typescript-definitions";
import {
  CallbackCustom,
  DISTANCE_OF_GRID_TILE,
  ModCallbackCustom,
  getRoomListIndex,
  newRNG,
  onStage,
} from "isaacscript-common";
import { setInitialBabyRNG, spawnRandomPickup } from "../../utils";
import { Baby } from "../Baby";

interface PoopDescription {
  roomListIndex: int;
  gridIndex: int;
}

const v = {
  run: {
    rng: newRNG(),
  },

  level: {
    killedPoops: [] as PoopDescription[],
  },
};

/** Destroying poops spawns random pickups. */
export class AtePoopBaby extends Baby {
  v = v;

  /** There are almost no poops on The Chest. */
  override isValid(): boolean {
    return !onStage(LevelStage.DARK_ROOM_CHEST);
  }

  override onAdd(): void {
    setInitialBabyRNG(v.run.rng);
  }

  @CallbackCustom(
    ModCallbackCustom.POST_GRID_ENTITY_BROKEN,
    GridEntityType.POOP,
  )
  postGridEntityBrokenPoop(gridEntity: GridEntity): void {
    const gridIndex = gridEntity.GetGridIndex();
    const roomListIndex = getRoomListIndex();

    // First, check to make sure that we have not already destroyed this poop.
    const matchingPoop = v.level.killedPoops.find(
      (poopDescription) =>
        poopDescription.roomListIndex === roomListIndex &&
        poopDescription.gridIndex === gridIndex,
    );
    if (matchingPoop !== undefined) {
      return;
    }

    // Second, check to make sure that there is not any existing pickups already on the poop.
    const entities = Isaac.FindInRadius(
      gridEntity.Position,
      DISTANCE_OF_GRID_TILE,
      EntityPartition.PICKUP,
    );
    if (entities.length > 0) {
      return;
    }

    spawnRandomPickup(v.run.rng, gridEntity.Position);

    // Keep track of it so that we don't spawn another pickup on the next frame.
    v.level.killedPoops.push({
      roomListIndex,
      gridIndex,
    });
  }
}
