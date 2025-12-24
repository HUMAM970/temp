const BACKEND_URL = "http://localhost:8080";

export const api = {
	request: request,
	get: () => 0,
	post: () => 1,
};

async function request(endpoint: string, options: RequestInit) {
	const url = BACKEND_URL + endpoint;

	const { headers: userHeaders, ...remainingOptions } = options;

	const finalHeaders = new Headers();
	finalHeaders.set("Content-Type", "application/json");
	finalHeaders.set("Accept", "application/json");
	finalHeaders.set("X-Request-ID", crypto.randomUUID());

	if (userHeaders) {
		Object.entries(userHeaders).forEach(([key, value]) => {
			finalHeaders.set(key, value);
		});
	}

	const reqInit: RequestInit = {
		mode: "cors",
		headers: finalHeaders,
		...remainingOptions,
	};

	const request = new Request(url, reqInit);
	const response = await fetch(request);

	if (!response.ok) {
		throw new Error(`Network response was not ok: ${response.statusText}`);
	}

	return response;
}

export async function get(
	endpoint: string,
	options?: Omit<RequestInit, "method" | "body">,
) {
	return await request(endpoint, { ...options, method: "GET" });
}

export async function post(
	endpoint: string,
	options?: Omit<RequestInit, "method">,
) {
	return await request(endpoint, { ...options, method: "POST" });
}

export async function patch(
	endpoint: string,
	options?: Omit<RequestInit, "method">,
) {
	return await request(endpoint, { ...options, method: "PATCH" });
}
