export const isWidthLessThan = (x: number) => window.innerWidth < x
export const getGap = (container: HTMLElement) =>
  Number(getComputedStyle(container).gap.replace('px', ''))

export const conditionalRound = (number: number, precision: number): number => {
  const nextInt = Math.ceil(number)
  console.log(nextInt - number)
  if (nextInt - number <= precision / 100) {
    return nextInt
  }
  const int = Math.floor(number)
  return int
}
