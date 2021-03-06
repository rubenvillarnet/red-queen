function Bullet(game, x, y, foe, color, width, duration){
  this.game = game
  this.x = x
  this.y = y + 16
  this.foe = foe
  this.color = color
  this.width = width
  this.duration = duration
}

Bullet.prototype.render = function(){
  var foe = this.foe
  if(this.game.foes[foe]){
    this.x2 = this.game.foes[foe].x
    this.y2 = this.game.foes[foe].y + Settings.foe.h /2
    ctx = this.game.ctx
    ctx.beginPath()
    ctx.lineWidth = this.width
    ctx.strokeStyle = this.color
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.x2, this.y2)
    ctx.stroke()
    ctx.closePath()
    ctx.lineWidth = 2
    this.duration--
  }
}
