import { log, setLogFunctionsGlobal } from "isaacscript-common";
import { MAX_BABY_TYPE } from "./constants";
import { g } from "./globals";

/** Associated with the "babydebug" command. */
function debugCode() {
  // Add code here.
}

export function debugFunction(): void {
  setLogFunctionsGlobal();

  log("Entering debug function.");
  debugCode();
  log("Exiting debug function.");

  print("Executed debug function.");
}

export function setDebugBaby(params: string, restart: boolean): void {
  // Check to see if this is a valid baby number.
  let babyNum = tonumber(params);
  if (
    babyNum === undefined ||
    babyNum < 0 ||
    babyNum > (MAX_BABY_TYPE as int)
  ) {
    babyNum = undefined;
  }

  g.debugBabyNum = babyNum;
  Isaac.ConsoleOutput(`Set debug baby to be: ${babyNum}\n`);

  if (restart) {
    Isaac.ExecuteCommand("restart");
  }
}
