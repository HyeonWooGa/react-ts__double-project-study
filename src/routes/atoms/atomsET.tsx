import { atom } from "recoil";

export const wordState = atom({
  key: "word",
  default: "바다",
});

export const inputValueState = atom({
  key: "inputValueET",
  default: "",
});

export const messageState = atom({
  key: "messageET",
  default: "",
});
