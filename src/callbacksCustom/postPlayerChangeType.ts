import { addPlayerToCostumeProtector } from "../costumes";
import g from "../globals";
import { getCurrentBaby } from "../utils";

export function main(player: EntityPlayer): void {
  if (!g.run.startedRunAsRandomBaby) {
    return;
  }

  const [, , valid] = getCurrentBaby();
  if (!valid) {
    return;
  }

  addPlayerToCostumeProtector(player);
}
