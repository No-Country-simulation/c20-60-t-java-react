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

export function buildAuthGETRequest(method = 'GET') {
  return {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }
}
