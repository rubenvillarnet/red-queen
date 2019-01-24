function Tower(game,argY){
  this.game = game
  this.w = Settings.tower.w
  this.h = Settings.tower.h
  this.x = Settings.tower.x
  this.y = argY
  this.color = Settings.tower.color
  this.levelColor = Settings.tower.levelColor
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

  ctx.beginPath()
  ctx.strokeStyle = this.color
  ctx.lineWidth = 1
  ctx.arc(32, this.y + 16, 400, 0, 2 * Math.PI, true)
  ctx.stroke()
  ctx.closePath()

  ctx.fillStyle = this.color
  ctx.fillRect(this.x, this.y, this.w, this.h )
  switch(level){
    case 1:
    ctx.fillStyle = this.levelColor
    ctx.fillRect(this.x, this.y, this.w, this.h )
    break
    case 2:
    ctx.fillStyle = this.levelColor
    ctx.fillRect(
      this.x + (this.w / 6), 
      this.y + (this.h / 6), 
      (this.w * 2) / 3, 
      (this.h * 2) / 3)
    break
    case 3:
    ctx.fillStyle = this.levelColor
    ctx.fillRect(
      this.x + (this.w / 3), 
      this.y + (this.h / 3), 
      this.w / 3, 
      this.h / 3 )
    break
    case 4:
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.w, this.h )
    break
  }
 
}

Tower.prototype.attack = function(){
  var inRange = undefined
  if(this.game.frames % this.fireRate === 0 && this.game.foes.length > 0){
    inRange = this.checkArea()
    if(inRange != undefined){
      this.shoot(inRange)
    }
  } 
}

Tower.prototype.checkArea = function(){
  var minDist = Settings.field.w
  var inRange = undefined
  this.game.foes.forEach(function(foe, index) {
    var dx = this.x - foe.x
    var dy = this.y - foe.y / 2
    var distance = Math.sqrt(dx * dx + dy * dy)
    if(distance <= this.range + (foe.w / 2)){
      if(distance < minDist){
        minDist = distance
        inRange = index
      }
    }
  }.bind(this))
  return inRange
}

Tower.prototype.shoot  = function(inRange){
  if (this.game.foes[inRange] === undefined)  return
  this.game.foes[inRange].health -= this.damage
  this.game.bullets.push(
    new Bullet(
      this.game,
      this.x + this.w,
      this.y,
      inRange,
      this.bullets.color,
      this.bullets.width,
      this.bullets.duration
    )
  )
}

  
