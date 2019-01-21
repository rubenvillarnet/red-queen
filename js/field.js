function Field(game){
  this.game = game
  this.w = 1024
  this.h = 640
  this.color = "#222"

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
    ctx.strokeRect(32, i , 32, 32)
    ctx.fillRect(32, i , 32, 32)
  }
}