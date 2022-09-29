const colors = [
  "#ff9800",
  "#9c27b0",
  "#009688",
  "#f55336",
  "#3f51b5",
  "#2196f3",
  "#00bcd5",
  "#795558",
];

const default_options = [
  {
    name: "local",
    color: colors[0],
    matches: ["localhost", "127.0.0.1"],
  },
  {
    name: "dev",
    color: colors[1],
    matches: ["*dev*"],
  },
  {
    name: "test",
    color: colors[2],
    matches: ["*test*"],
  },
  {
    name: "uat",
    color: colors[2],
    matches: ["*uat*"],
  },
];
