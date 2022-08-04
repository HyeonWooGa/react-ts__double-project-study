import { atom, selector } from "recoil";

export const firstNumberState = atom({
  key: "firstNumber",
  default: Math.ceil(Math.random() * 9),
});

export const secondNumberState = atom({
  key: "secondNumber",
  default: Math.ceil(Math.random() * 9),
});

export const inputValueState = atom({
  key: "inputValueMT",
  default: "",
});

export const isSubmitState = atom({
  key: "isSubmitMT",
  default: false,
});

export const messageState = atom({
  key: "messageMT",
  default: "숫자만 입력하세요",
});

export const answerSelector = selector({
  key: "answerMT",
  get: ({ get }) => {
    const firstNumber = get(firstNumberState);
    const secondNumber = get(secondNumberState);
    return firstNumber * secondNumber;
  },
});
