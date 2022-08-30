console.log('linked')
// ====================== Game Flow ======================= //
// Clear the canvas => shrek alive? => render shrek, check for collision => render donkey
// ====================== Global DOM / Variables ======================= //
let movement = document.getElementById('movement')
let game = document.getElementById('game')
let score = document.getElementById('score')
let status = document.getElementById('status')
let shrek
let donkey
// ====================== SETUP FOR CANVAS RENDERING ======================= //
const ctx = game.getContext('2d')
game.setAttribute('height', getComputedStyle(game)['height'])
game.setAttribute('width', getComputedStyle(game)['width'])
// ====================== ENTITIES ======================= //
class Crawler {
    constructor(x, y, color, width, height) {
        this.x = x
        this.y =y
        this.color = color
        this.width = width
        this.height = height
        this.alive = true

        this.render = function() {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}
// ====================== KEYBOARD INTERACTION LOGIC ======================= //
const movementHandler = (e) => {
    console.log(`movement: ${e.key}`)
}
// ====================== PAINT INITIAL SCREEN ======================= //
// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', function(e) {
    shrek = new Crawler(10, 20, '#00ff00', 20, 20)
    donkey = new Crawler(100, 100, '#ff0000', 40, 80)
    // const runGame = this.setInterval(gameLoop, 120)
})
document.addEventListener('keydown', movementHandler)
