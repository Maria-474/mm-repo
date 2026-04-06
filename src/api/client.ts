export async function request<T>(url: string, signal?: AbortSignal): Promise<T> {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const result = await fetch(`${BASE_URL}${url}`, { signal })

  if (!result.ok) {
    throw new Error(`Request failed with status ${result.status}`)
  }

  return result.json()
}