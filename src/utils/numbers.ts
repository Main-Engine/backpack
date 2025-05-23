export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const kFormatter = (num: number) => {
  return Math.abs(num) > 999
    ? `${(Math.sign(num) * (Math.abs(num) / 1000)).toFixed(1)}k`
    : Math.sign(num) * Math.abs(num)
}

export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`
}

export const formatSeconds = (miliSeconds: number) => {
  const seconds = Math.floor(miliSeconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes ? `${minutes}m ` : ''}${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}s`
}

export const formatSecondsAnalog = (miliSeconds: number) => {
  if (miliSeconds <= 0) return '0:00'

  const seconds = Math.floor(miliSeconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes ? `${minutes}:` : '0:'}${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
}

export const formatCoordinate = (coord: number) => {
  // return coord
  return parseFloat(coord.toFixed(8))
}
