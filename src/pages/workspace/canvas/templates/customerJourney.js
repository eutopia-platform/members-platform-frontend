export default {
  width: 0.1,
  spacing: 0.01,
  boxes: [
    [0, 0, 1, 0.2],
    [0, 0.2, 0.3, 0.5],
    [0.3, 0.2, 0.7, 0.15],
    [0.3, 0.2 + 0.15, 0.7 / 3, 0.5 - 0.15],
    [0.3 + 0.7 / 3, 0.2 + 0.15, 0.7 / 3, 0.5 - 0.15],
    [0.3 + (0.7 / 3) * 2, 0.2 + 0.15, 0.7 / 3, 0.5 - 0.15],
    [0, 0.7, 1, 0.25],
    [0, 0.95, 1, 0.25],
  ],
}
