console.log('linked')
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
            ctx.fillRect(this.x, this.y, this.width, this,height)
        }
    }
}
const rambo = new Crawler(5, 5, '#blue', 40, 100)
console.log(rambo)
rambo.render()