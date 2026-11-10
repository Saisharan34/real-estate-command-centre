import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink:"#17211f", muted:"#718078", canvas:"#f5f7f4", forest:"#176b50", mint:"#e5f2eb", line:"#e6ebe7" }, boxShadow: { soft:"0 12px 35px rgba(20,40,30,.06)" } } }, plugins: [] };
export default config;
