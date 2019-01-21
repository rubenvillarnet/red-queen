function Bullet(game, x1, y1, x2, y2, color, width, duration){
  this.game = game
  this.x1 = x1
  this.y1 = y1
  this.x2 = x2
  this.y2 = y2
  this.color = color
  this.width = width
  this.duration = duration
}

Bullet.prototype.render = function(){
  ctx = this.game.ctx
  ctx.beginPath()
  ctx.strokeStyle = this.color
  ctx.moveTo(this.x1, this.y1)
  ctx.lineTo(this.x2, this.y2)
  ctx.stroke()
  ctx.closePath()
  this.duration--
}
