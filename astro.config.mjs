import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import tailwindcss from '@tailwindcss/vite'
// https://astro.build/config
export default defineConfig({
	vite :{
		plugins: [
			tailwindcss(),
		  ],
	},
	site: "https://rstradesleedsltd.com",
	integrations: [icon(), sitemap()],
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Albert Sans",
				cssVariable: "--font-albert-sans",
				weights: ["100-900"],
				styles: ["normal"],
				subsets: ["latin"],
				fallbacks: ["sans-serif"]
			},
			{
				provider: fontProviders.google(),
				name: "Barlow",
				cssVariable: "--font-barlow",
				weights: ["400", "500", "600"],
				styles: ["normal"],
				subsets: ["latin"],
				fallbacks: ["sans-serif"]
			}
		]
	}
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           