/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},

			colors: {
				faisal_dev_Sky: "#C3EBFA",
				faisal_dev_SkyLight: "#EDF9FD",
				faisal_dev_Purple: "#CFCEFF",
				faisal_dev_PurpleLight: "#F1F0FF",
				faisal_dev_Yellow: "#FAE27C",
				faisal_dev_YellowLight: "#FEFCE8",
				faisal_dev_SeaGreen: "#A2E8DC",
				faisal_dev_SeaGreenLight: "#E4FAF6",
				faisal_dev_Coral: "#FFB3A7",
				faisal_dev_CoralLight: "#FFEDEA",
				faisal_dev_BlueGray: "#C9D3E2",
				faisal_dev_BlueGrayLight: "#EFF2F6",
				faisal_dev_Mint: "#B2F5EA",
				faisal_dev_MintLight: "#E6FFFA",
			},
		},
	},
	plugins: [],
};
export default config;
