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