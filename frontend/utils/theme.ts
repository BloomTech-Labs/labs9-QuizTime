const blue0 = "#7981FF";
const blue1 = "#323fcb";
const blue2 = "#1F287F";
const blue3 = "#3F4FFF";
const blue4 = "#101440";
const blue5 = "#3947E5";
const red0 = "#ea969d";
const red1 = "#e16973";
const red2 = "#7c0A02";
const green0 = "#B5FFD0";
const green1 = "#44c173";
const green2 = "#006400";
const gray0 = "#EDEDED";
const grey0 = "#d3d3d3";
const grey2 = "#a9a9a9";

export default {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: [100, 200, 300, 400, 500, 600, 700],
  colors: {
    blue: ["#7981FF", "#323fcb", "#1F287F", "#3F4FFF", "#101440", "#3947E5"],
    red: ["#ea969d", "#e16973", red2],
    green: ["#B5FFD0", "#70e89d", "#44c173", green2],
    gray: ["#EDEDED"]
  },
  borders: [0, "1px solid red"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: [
      "Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
    ],
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
      backgroundColor: blue1,
      border: `2px solid ${blue1}`,
      "&:hover": {
        backgroundColor: blue2,
        color: "#fff",
        border: `2px solid ${blue2}`
      }
    },
    primaryNoHover: {
      color: "#fff",
      backgroundColor: blue1
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
      backgroundColor: green1,
      "&:hover": {
        backgroundColor: green2
      }
    },
    successQ: {
      color: "#fff",
      backgroundColor: green2,
    },
    error: {
      color: "#fff",
      backgroundColor: red0,
      "&:hover": {
        backgroundColor: red1
      }
    },
    errorQ: {
      color: "#fff",
      backgroundColor: red1,
    },
    disabled: {
      color: "#fff",
      backgroundColor: grey0,
      "&:hover": {
        cursor: "not-allowed"
      }
    }
  }
};
