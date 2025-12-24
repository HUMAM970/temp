import axios, { AxiosResponse } from "axios";

export const api = axios.create({
	baseURL: "http://localhost:8080",
	timeout: 10000,
	withCredentials: true,
	headers: {
		"Content-Type": "application/text",
	},
});

async function getHealth(): AxiosResponse {
	const response = await api.get("/health");

	if (response.status !== 200) {
		const res = await api.get("/health");
	}
}

api.interceptors.response.use(
	async (response: AxiosResponse) => {
		if (response.config.url?.endsWith("/health")) {
			console.log("Health check successful! Running custom logic...");
			await api.get("/notfound");
		}
		return response;
	},
	(error) => {
		console.error("Error:", error);
		return Promise.reject(error);
	},
);
