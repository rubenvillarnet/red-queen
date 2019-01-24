function Slot(game, y){
  this.game = game
  this.w = Settings.slot.w
  this.h = Settings.slot.h
  this.x = 0
  this.y = y
  this.tower = undefined
  this.level = 0
}

Slot.prototype.drawZone = function(){
  ctx = this.game.ctx
  ctx.fillStyle = Settings.slot.fillStyle
  ctx.strokeStyle = Settings.slot.strokeStyle
  ctx.strokeRect(this.x, this.y, this.w, this.h)
  ctx.fillRect(this.x, this.y, this.w, this.h)
}