function Field(game){
  this.game = game
  this.w = Settings.field.w
  this.h = Settings.field.h
  this.color = Settings.field.color

}

Field.prototype.render = function(){
  var ctx = this.game.ctx
  ctx.fillStyle = this.color
  ctx.fillRect(0, 0, this.w, this.h)
  this.grid()
  this.slots()
}

Field.prototype.grid = function(){
  var ctx = this.game.ctx
  ctx.lineWidth = 1
  ctx.strokeStyle = Settings.field.gridColor

  for(var i = Settings.field.gridWH; i < Settings.field.w; i += Settings.field.gridWH){
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i,Settings.field.h)
    ctx.stroke()
    ctx.closePath()
  }
  for(var j = Settings.field.gridWH; j < Settings.field.h; j += Settings.field.gridWH){
    ctx.beginPath()
    ctx.moveTo(0, j)
    ctx.lineTo(Settings.field.w, j)
    ctx.stroke()
    ctx.closePath()
  }
}

Field.prototype.slots = function(){
  var ctx = this.game.ctx

  

  for(var i = 16, slotSelected = 0; i <= 608; i+=64, slotSelected++){
    ctx.fillStyle = Settings.slot.fillStyle
    ctx.strokeStyle = Settings.slot.strokeStyle
    ctx.lineWidth = 4
    ctx.strokeRect(16, i , 32, 32)
    ctx.fillRect(16, i , 32, 32)

    if(slotSelected === Settings.slot.slotSelected){
      tower = this.game.slots[slotSelected].tower
      ctx.fillStyle = Settings.slot.selectedFillStyle
      ctx.strokeStyle = Settings.slot.selectedStrokeStyle
      ctx.fillRect(tower.x - tower.w / 4, tower.y - tower.h / 4, tower.w + tower.x, tower.h + tower.h / 2)
      ctx.strokeRect(tower.x - tower.w / 4, tower.y - tower.h / 4, tower.w + tower.x, tower.h + tower.h / 2)
    }
  }
}