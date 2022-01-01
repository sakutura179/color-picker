import { CHANGE_COLOR, CHANGE_SIZE } from "./constants";

const changeColor = color => ({
    type: CHANGE_COLOR,
    color
})

const changeSize = (change) => ({
    type: CHANGE_SIZE,
    change
})

export { changeColor, changeSize };