function Foe(game){
  this.game = game
  this.w = 32
  this.h = 32
  this.color = "#D22727"
  this.healthColor = "#fff"
  this.x = this.game.canvas.width - this.w
  this.y = Math.floor((Math.random() * (this.game.Field.h - this.h )))
  this.health = 10
  this.money = 10
  this.maxHealth = this.health
}

Foe.prototype.render = function(){
  ctx = this.game.ctx
  ctx.fillStyle = this.color
  ctx.fillRect(this.x, this.y, this.w, this.h )
  ctx.fillStyle = this.healthColor
  ctx.fillRect(this.x, this.y, (this.w / this.maxHealth) * this.health, 6)
}

Foe.prototype.move = function(){
  this.x--
}