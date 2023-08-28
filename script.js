let lastRenderTime = 0
const snakeSpeed = 1
function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime = lastRenderTime) / 1000
    if (secondsSinceLastRender > 1 / snakeSpeed) return 
    
    console.log("render")
    lastRenderTime = currentTime

    update()
    draw()
}
window.requestAnimationFrame(main)

