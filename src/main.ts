import {
  initModFeatures,
  log,
  setLogFunctionsGlobal,
  setTracebackFunctionsGlobal,
} from "isaacscript-common";
import { babiesCheckValid } from "./babiesCheckValid";
import * as evaluateCache from "./callbacks/evaluateCache";
import * as entityTakeDmgPlayer from "./callbacksCustom/entityTakeDmgPlayer";
import * as postGameStartedReordered from "./callbacksCustom/postGameStartedReordered";
import type { Baby } from "./classes/Baby";
import { BabySelection } from "./classes/features/BabySelection";
import {
  CostumeProtector,
  initCostumeProtector,
} from "./classes/features/CostumeProtector";
import { DrawBabyIntro } from "./classes/features/DrawBabyIntro";
import { DrawBabyNumber } from "./classes/features/DrawBabyNumber";
import { DrawTempIcon } from "./classes/features/DrawTempIcon";
import { DrawVersion } from "./classes/features/DrawVersion";
import { GetRandomCollectibleTypeFromPool } from "./classes/features/GetRandomCollectibleTypeFromPool";
import { PseudoRoomClear } from "./classes/features/PseudoRoomClear";
import { RemoveMappingBaby } from "./classes/features/RemoveMappingBaby";
import { Shockwaves } from "./classes/features/Shockwaves";
import { SoftlockPrevention } from "./classes/features/SoftlockPrevention";
import { IS_DEV, MOD_NAME, VERSION } from "./constants";
import type { RandomBabyType } from "./enums/RandomBabyType";
import { enableExtraConsoleCommandsBabiesMod } from "./extraConsoleCommands";
import type { BabyDescription } from "./interfaces/BabyDescription";
import { mod } from "./mod";
import { BABIES } from "./objects/babies";
import { BABY_CLASS_MAP } from "./objects/babyClassMap";

const MOD_FEATURES = [
  BabySelection,
  CostumeProtector,
  DrawBabyIntro,
  DrawBabyNumber,
  DrawTempIcon,
  DrawVersion,
  GetRandomCollectibleTypeFromPool,
  PseudoRoomClear,
  RemoveMappingBaby,
  Shockwaves,
  SoftlockPrevention,
] as const;

export function main(): void {
  if (IS_DEV) {
    setLogFunctionsGlobal();
    setTracebackFunctionsGlobal();
    mod.saveDataManagerSetGlobal();
  }

  welcomeBanner();
  babiesCheckValid();

  initCostumeProtector();
  registerCallbacksMain();
  registerCallbacksCustom();
  initModFeatures(mod, MOD_FEATURES);
  initBabyClassMap(); // This must be after all normal callback registration.
  enableExtraConsoleCommandsBabiesMod();
}

function welcomeBanner() {
  const welcomeText = `${MOD_NAME} ${VERSION} initialized.`;
  const hyphens = "-".repeat(welcomeText.length);
  const welcomeTextBorder = `+-${hyphens}-+`;
  log(welcomeTextBorder);
  log(`| ${welcomeText} |`);
  log(welcomeTextBorder);
}

function registerCallbacksMain() {
  evaluateCache.init(); // 8
}

function registerCallbacksCustom() {
  entityTakeDmgPlayer.init();
  postGameStartedReordered.init();
}

/**
 * We want to only instantiate the baby classes after the normal callbacks have been registered.
 * This is because we need to cache some API calls in order to prevent crashes.
 */
function initBabyClassMap() {
  for (const [babyTypeString, babyRaw] of Object.entries(BABIES)) {
    const babyType = babyTypeString as unknown as RandomBabyType;
    const baby = babyRaw as BabyDescription;

    if (baby.class !== undefined) {
      // eslint-disable-next-line new-cap
      const babyClass = new baby.class(babyType, baby) as Baby;
      babyClass.init();

      const babyClassMap = BABY_CLASS_MAP as Map<RandomBabyType, Baby>;
      babyClassMap.set(babyType, babyClass);
    }
  }
}
