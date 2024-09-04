export function buildQuery(filters) {
  let query = '?'

  Object.keys(filters).forEach((field) => {
    if (field) query += field + '=' + field
  })

  return query
}
