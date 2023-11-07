import {wait} from "../Utils.js"
import {drawCanvasLines} from "./Canvas.js"

const outlineCornerOffset = 50

export function renderOutlineButtons() {
    const outlineButtons = document.querySelectorAll('.reveal-button')

    outlineButtons.forEach(button => {
        drawButtonBorder(button, outlineCornerOffset)

        button.onmouseenter = () => outlineMouseEnterEvent(button)
        button.onmouseleave = () => outlineMouseLeaveEvent(button)
    })
}

/**
 * Mouse enter event.
 * @param button
 * @returns {Promise<void>}
 */
async function outlineMouseEnterEvent(button) {
    for (let cornerOffset = outlineCornerOffset; cornerOffset > 0; cornerOffset--) {
        drawButtonBorder(button, cornerOffset)
        await wait(1)
    }
}

/**
 * Mouse leave event.
 * @param button
 * @returns {Promise<void>}
 */
async function outlineMouseLeaveEvent(button) {
    for (let cornerOffset = 0; cornerOffset < outlineCornerOffset; cornerOffset++) {
        drawButtonBorder(button, cornerOffset)
        await wait(1)
    }
}

/**
 * Draw the button border.
 * @param button
 * @param cornerOffset
 */
function drawButtonBorder(button, cornerOffset) {
    const canvas = button.querySelector('canvas')

    const width = canvas.width
    const height = canvas.height

    canvas.width = width
    canvas.height = height

    const paths = [
        [cornerOffset, 0],
        [width, 0],
        [width, height - cornerOffset],
        [width - cornerOffset, height],
        [0, height],
        [0, cornerOffset]
    ]

    drawCanvasLines(button, paths, 3, "#fff")
}
