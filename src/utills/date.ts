export const formatDate = (time: number) => {
  const year = new Date(time).getFullYear()
  const month = new Date(time).getMonth() + 1
  const date = new Date(time).getDate()
  return `${date}-${month}-${year}`
}
