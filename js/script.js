const outlineButtons = document.querySelectorAll('.outline-button')
const outlineCornerOffset = 50

outlineButtons.forEach(button => {
    drawButtonBorder(button, outlineCornerOffset)

    button.onmouseenter = () => outlineMouseEnterEvent(button)
    button.onmouseleave = () => outlineMouseLeaveEvent(button)
})

async function outlineMouseEnterEvent(button) {
    for (let cornerOffset = outlineCornerOffset; cornerOffset > 0; cornerOffset--) {
        drawButtonBorder(button, cornerOffset)
        await wait(1)
    }
}

async function outlineMouseLeaveEvent(button) {
    for (let cornerOffset = 0; cornerOffset < outlineCornerOffset; cornerOffset++) {
        drawButtonBorder(button, cornerOffset)
        await wait(1)
    }
}

function drawButtonBorder(button, cornerOffset) {
    const canvas = button.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const width = canvas.width
    const height = canvas.height

    const paths = [
        [cornerOffset, 0],
        [width, 0],
        [width, height - cornerOffset],
        [width - cornerOffset, height],
        [0, height],
        [0, cornerOffset]
    ]

    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.strokeStyle = "#fff"

    paths.forEach((path, index) => {
        const x = path[0]
        const y = path[1]

        if (index === 0) {
            ctx.moveTo(x, y)
        } else {
            ctx.lineTo(x, y)
        }
    })

    ctx.closePath()
    ctx.stroke()
}

function wait(milliseconds = 100) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    })
}
