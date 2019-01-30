const blue0 = "#7981FF";
const blue1 = "#323fcb";
const blue2 = "#1F287F";
const blue3 = "#3F4FFF";
const blue4 = "#101440";
const blue5 = "#3947E5";
const red0 = "#ea969d";
const red1 = "#e16973";
const green0 = "#B5FFD0";
const green1 = "#70e89d";
const gray0 = "#EDEDED";

export default {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: [100, 200, 300, 400, 500, 600, 700],
  colors: {
    blue: ["#7981FF", "#323fcb", "#1F287F","#3F4FFF", "#101440","#3947E5"],
    red: ["#ea969d", "#e16973"],
    green: ["#B5FFD0", "#70e89d"],
    gray: ["#EDEDED"]
  },
  borders: [0, "1px solid red"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: ["Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"],
    mono: ["Menlo, monospace"]
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  },
  cards: {
    student: {}
  },
  buttons: {
    primary: {
      color: "#fff",
      backgroundColor: blue0,
      "&:hover": {
        backgroundColor: blue1
      }
    },
    ["primary-outline"]: {
      color: blue0,
      backgroundColor: "transparent",
      border: `2px solid ${blue0}`,
      "&:hover": {
        color: "#fff",
        backgroundColor: blue0
      }
    },
    success: {
      color: "#fff",
      backgroundColor: green0,
      "&:hover": {
        backgroundColor: green1
      }
    },
    error: {
      color: "#fff",
      backgroundColor: red0,
      "&:hover": {
        backgroundColor: red1
      }
    }
  }
};
