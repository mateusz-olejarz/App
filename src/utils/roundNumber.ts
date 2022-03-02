export const roundNumber = (value: number, decimalPoints: number): number => {
    return parseFloat(value.toFixed(decimalPoints))
}