import {drawCanvasLines} from "./Canvas.js"

const cutBorder = document.querySelectorAll('.cut-border')

export function renderCutBorders() {
    cutBorder.forEach(element => {
        drawCutBorder(element)
    })
}

function drawCutBorder(element) {
    const canvas = element.querySelector('canvas:first-child')

    const rect = canvas.getBoundingClientRect()

    const width = canvas.width
    const height = canvas.height

    canvas.width = rect.width
    canvas.height = rect.height

    const offset = rect.width / 100 * 8
    const padding = rect.width / 100 * 5

    const paths = [
        [padding, 0],
        [width - padding - offset, 0],
        [width - padding, offset],
        [width - padding, height],
        [padding, height],
        [padding, padding]
    ]

    drawCanvasLines(element, paths, 1)
}
