import randomColor from "randomcolor";

export function getRandomColor(size = 1) {
  const colors = [];
  for (let i = 0; i < size; i++) {
    colors.push(randomColor());
  }
  return colors;
}
