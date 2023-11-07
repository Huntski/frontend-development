import {renderOutlineButtons} from "./OutlineButton.js"
import {renderCutBorders} from "./CutBorder.js"

/**
 * Renders all borders within the HTML page, which are defined by an specific CSS.
 *  - OutlineButton
 *  - CutBorder
 */
export function renderBorders() {
    renderOutlineButtons()
    renderCutBorders()
}

/**
 * Draw the canvas lines.
 * @param element
 * @param canvas
 * @param paths
 */
export function drawCanvasLines(element, paths = [], width = 2, color = "#B1BAC5") {
    const canvas = element.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    // Clear the canvas.
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath()
    ctx.lineWidth = width
    ctx.strokeStyle = color

    // Draw each path given as array.
    paths.forEach((path, index) => {
        const x = path[0], y = path[1]

        if (index === 0) {
            ctx.moveTo(x, y)
        } else {
            ctx.lineTo(x, y)
        }
    })

    ctx.closePath()
    ctx.stroke()
}

window.addEventListener('resize', rerenderCanvasSize)
window.addEventListener('load', rerenderCanvasSize)

function rerenderCanvasSize() {
    renderBorders()
}
