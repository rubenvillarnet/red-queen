function Tower(game,argY){
  this.game = game
  this.w = Settings.tower.w
  this.h = Settings.tower.h
  this.x = Settings.tower.x
  this.y = argY
  this.color = Settings.tower.color
  this.textColor = Settings.tower.textColor
  this.damage = Settings.tower.damage
  this.range = Settings.tower.range
  this.fireRate = Settings.tower.fireRate
  this.price = Settings.tower.price
  this.levels = Settings.tower.levels
  this.bullets = {
    color: Settings.tower.bullets.color,
    width: Settings.tower.bullets.width,
    duration: Settings.tower.bullets.duration
  }
}

Tower.prototype.render = function(level){
  ctx = this.game.ctx
  ctx.fillStyle = this.color
  ctx.fillRect(this.x, this.y, this.w, this.h )
  ctx.fillStyle = this.textColor
  ctx.font= "20px sans-serif"
  ctx.fillText(level, this.x+10, this.y+20 )
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
        this.bullets.color,
        this.bullets.width,
        this.bullets.duration,
        ))
  }
  
}
