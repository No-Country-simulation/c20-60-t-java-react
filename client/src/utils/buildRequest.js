export function buildRequest(data, method = 'POST') {
  return {
    method,
    body: JSON.stringify(data),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }
}
