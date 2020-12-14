
function getDealTime(time) {
  const date = time ? new Date(time) : new Date()

  const getYear = date.getFullYear()
  const getMonths = date.getMonth() + 1
  const getDay = date.getDate()
  const getHours = date.getHours()
  const getMinutes = date.getMinutes()
  const getSeconds = date.getSeconds()

  const year = getYear
  const month = getMonths < 10 ? `0${getMonths}` : getMonths
  const day = getDay < 10 ? `0${getDay}` : getDay
  const hours = getHours < 10 ? `0${getHours}` : getHours
  const minutes = getMinutes < 10 ? `0${getMinutes}` : getMinutes
  const seconds = getSeconds < 10 ? `0${getSeconds}` : getSeconds

  return {
    year,
    month,
    day,
    hours,
    minutes,
    seconds
  }
}
