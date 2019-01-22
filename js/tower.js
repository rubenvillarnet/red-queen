function Tower(game,argY){
  this.game = game
  this.w = 32
  this.h = 32
  this.x = 16
  this.y = argY
  this.color = "#0400FF"
  this.textColor = "#FFF"
  this.damage = 1
  this.range = 0
  this.fireRate = 60
  this.price = 50
  this.level = 1
  this.levels = [
    [0.3, 30, "30%", 2],
    [0.3, 30, "30%", 3],
    [0.3, 30, "30%", 4]
]
}

Tower.prototype.render = function(){
  ctx = this.game.ctx
  ctx.fillStyle = this.color
  ctx.fillRect(this.x, this.y, this.w, this.h )
  ctx.fillStyle = this.textColor
  ctx.font= "20px sans-serif"
  ctx.fillText(this.level, this.x+10, this.y+20 )
}

Tower.prototype.shoot = function(){
  if(this.game.frames % this.fireRate === 0 && this.game.foes.length > 0){
    this.game.foes[0].health -= this.damage
    this.game.bullets.push(
      new Bullet(
        this.game,
        this.x + this.w,
        this.y + this.h / 2,
        this.game.foes[0].x,
        this.game.foes[0].y + this.game.foes[0].h /2,
        "#ffffff",
        2,
        30,
        this.fireRate
        ))
  }
  
}
