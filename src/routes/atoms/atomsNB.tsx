import { atom } from "recoil";

export const answerState = atom({
  key: "answerNB",
  default: "000",
});

export const inputValueState = atom({
  key: "inputValueNB",
  default: "",
});

export const attemptState = atom({
  key: "attemptNB",
  default: 0,
});

export const isSubmitState = atom({
  key: "isSubmitNB",
  default: false,
});

export const detailState = atom({
  key: "detailNB",
  default: "디테일",
});

export const ballState = atom({
  key: "ballNB",
  default: 0,
});

export const strikeState = atom({
  key: "strikeNB",
  default: 0,
});

export const detailListState = atom({
  key: "detailListNB",
  default: [""],
});
