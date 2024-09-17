export function getImageData(event) {
  const file = event.target.files[0]
  const displayUrl = URL.createObjectURL(file)
  return { file, displayUrl }
}
