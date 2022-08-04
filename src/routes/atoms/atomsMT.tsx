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
  key: "inputValue",
  default: "",
});

export const isSubmitState = atom({
  key: "isSubmit",
  default: false,
});

export const messageState = atom({
  key: "message",
  default: "숫자만 입력하세요",
});

export const answerSelector = selector({
  key: "answer",
  get: ({ get }) => {
    const firstNumber = get(firstNumberState);
    const secondNumber = get(secondNumberState);
    return firstNumber * secondNumber;
  },
});
