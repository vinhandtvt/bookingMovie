import { DAT_GHE, HUY_GHE } from "../constants/constants";

export const datGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: HUY_GHE,
    soGhe,
  };
};
