const blue0 = "#4a9eda";
const blue1 = "#0077cc";
const red0 = "#ea969d";
const red1 = "#e16973";
const green0 = "#46da84";
const green1 = "#00cc55";

export default {
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
	colors: {
		blue0,
		blue1,
		red0,
		red1,
		green1
	},
	space: [0, 4, 8, 16, 32, 64, 128, 256],
	fonts: {
		sans: "system-ui, sans-serif",
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
