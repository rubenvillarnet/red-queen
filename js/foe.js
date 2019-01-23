function Foe(game){
  this.game = game
  this.w = Settings.foe.w
  this.h = Settings.foe.h
  this.color = Settings.foe.color
  this.healthColor = Settings.foe.healthColor
  this.x = this.game.canvas.width - this.w
  this.y = Math.floor((Math.random() * (this.game.Field.h - this.h )))
  this.health = Settings.waves["wave" + this.game.currentWave].health
  this.speed = Settings.waves["wave" + this.game.currentWave].speed
  this.money = Settings.waves["wave" + this.game.currentWave].money
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
  this.x -= this.speed
}