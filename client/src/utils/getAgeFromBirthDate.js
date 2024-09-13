export function getAgeFromBirthDate(date) {
  const birthDate = date ?? undefined
  const todayTimestamp = Math.round(Date.now() / 1000)

  const ageInSeconds = todayTimestamp - birthDate
  const secondsInAYear = 60 * 60 * 24 * 365.25

  let fullAge = undefined
  let age = ageInSeconds / secondsInAYear

  if (age >= 1) {
    age = Math.floor(age)
    if (age === 1) fullAge = `${age} año`
    else fullAge = `${age} años`
  } else {
    age *= 12
    age = Math.floor(age)
    if (age === 1) fullAge = `${age} mes`
    else fullAge = `${age} meses`
  }

  return fullAge
}
