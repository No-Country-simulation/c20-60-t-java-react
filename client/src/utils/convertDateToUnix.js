export function convertDateToUnix(date) {
  if (typeof date === 'number') return
  return Math.round(date / 1000)
}
