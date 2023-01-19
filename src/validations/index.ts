export const min = (num: number) => (v: string) => {
  if (v.length < num) {
    return `${num}자 이상으로 작성해주세요.`;
  } else {
    return "";
  }
};

export const max = (num: number) => (v: string) => {
  if (v.length > num) {
    return `${num}자 이하로 작성해주세요.`;
  } else {
    return "";
  }
};
