import {
  ApiRequest,
  ApiResponse,
} from "@/types/api";

export async function sendRequest(
  request: ApiRequest
): Promise<ApiResponse> {
  const startTime = performance.now();

  const response = await fetch(
    request.url,
    {
      method: request.method,
    }
  );

  const body =
    await response.json();

  const headers: Record<
    string,
    string
  > = {};

  response.headers.forEach(
    (value, key) => {
      headers[key] = value;
    }
  );

  const endTime = performance.now();

  return {
    status: response.status,
    statusText:
      response.statusText,
    headers,
    body,
    responseTime:
      Math.round(endTime - startTime),
  };
}