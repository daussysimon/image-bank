
export const randomNumber = () => {
  const number =  Math.random()* (10000 - 1000) + 1
  return number.toFixed();
}
