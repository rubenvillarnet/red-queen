function Field(game){
  this.game = game
  this.w = Settings.field.w
  this.h = Settings.field.h
  this.color = Settings.field.color

}

Field.prototype.render = function(){
  ctx = this.game.ctx
  ctx.fillStyle = this.color
  ctx.fillRect(0, 0, this.w, this.h)
  this.slots()
}

Field.prototype.slots = function(){
  ctx = this.game.ctx
  for(var i = 16; i <= 608; i+=64){
    ctx.fillStyle = "rgba(4, 0, 255, 0.1"
    ctx.strokeStyle = "#0400FF"
    ctx.strokeRect(16, i , 32, 32)
    ctx.fillRect(16, i , 32, 32)
  }
}