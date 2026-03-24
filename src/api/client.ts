export async function request<T>(url: string): Promise<T> {
  const result = await fetch(`https://hp-api.onrender.com/api${url}`)

  if (!result.ok) {
    throw new Error('Ошибка запроса')
  }

  return result.json()
}