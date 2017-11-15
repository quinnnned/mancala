export const reset = () => {
    return {
        type: "RESET"
    }
}

export const move = (pitNumber) => {
    return {
        type: "MOVE",
        pitNumber
    }
}