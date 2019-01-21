const blue0 = "#4a9eda";
const blue1 = "#0077cc";
const red0 = "#ea969d";
const red1 = "#e16973";
const green0 = "#46da84";
const green1 = "#00cc55";

export default {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: [100, 200, 300, 400, 500, 600, 700],
  colors: {
    blue: ["#4a9eda", "#0077cc", "#152338"],
    red: ["#ea969d", "#e16973"],
    green: ["#46da84", "#00cc55"]
  },
  borders: [0, "1px solid red"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: "Menlo, monospace"
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
