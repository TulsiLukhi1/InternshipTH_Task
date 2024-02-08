import randomColor from "randomcolor";

export function getInitialRandomColor(size = 1) {
  const colors = randomColor({count : size});
  return colors;
}
