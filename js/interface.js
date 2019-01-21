function Interface(game){
  this.game = game
  this.healthDOM = document.getElementById("health")
  
  this.moneyDOM = document.getElementById("money")
}

Interface.prototype.health = function(){
  ctx = this.game.ctx
  this.healthDOM.innerHTML = this.game.health
}

Interface.prototype.money = function(){
  ctx = this.game.ctx
  this.moneyDOM.innerHTML = this.game.money
}