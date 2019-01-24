function Interface(game){
  this.game = game
  this.healthDOM = document.getElementById(Settings.interface.healthID)
  this.moneyDOM = document.getElementById(Settings.interface.moneyID)
  this.levelDom = document.getElementById(Settings.interface.levelID)
  this.damageDOM = document.getElementById(Settings.interface.damageID)
  this.rangeDOM = document.getElementById(Settings.interface.rangeID)
  this.priceDOM = document.getElementById(Settings.interface.priceID)
  this.waveDOM = document.getElementById(Settings.interface.waveID)
  this.messageDOM = document.getElementById(Settings.message.messageID)

  this.level = 1
  this.levelInfo = ["","","", ""]
  
}

Interface.prototype.render = function(){
    this.health()
    this.money()
    //this.nextRange()
    this.wave()
    this.message()

    if(this.level === 4){
      this.levelDom.innerHTML = "MAX"
      this.damageDOM.innerHTML = "-"
      this.priceDOM.innerHTML =  "-"

    }else{
      this.nextLevel()
      this.nextDamage()
      this.nextPrice()
    }
  
}

Interface.prototype.health = function(){
  ctx = this.game.ctx
  this.healthDOM.innerHTML = this.game.health
}

Interface.prototype.money = function(){
  ctx = this.game.ctx
  this.moneyDOM.innerHTML = this.game.money
}

Interface.prototype.nextLevel = function(){
  ctx = this.game.ctx
  this.levelDom.innerHTML = this.level +1
}

Interface.prototype.nextDamage = function(){
  ctx = this.game.ctx
  this.damageDOM.innerHTML = this.levelInfo[2]
}

Interface.prototype.nextRange = function(){
  ctx = this.game.ctx
  this.rangeDOM.innerHTML = "-"
}

Interface.prototype.nextPrice = function(){
  ctx = this.game.ctx
  this.priceDOM.innerHTML = this.levelInfo[1]
}

Interface.prototype.wave = function(){
  ctx = this.game.ctx
  this.waveDOM.innerHTML = this.game.currentWave
}

Interface.prototype.message = function(){
  if(Settings.message.message != undefined){
    this.messageDOM.classList.remove("hidden")
    this.messageDOM.innerHTML = Settings.message.message
    Settings.message.duration--

    if(Settings.message.duration === 0){
      this.messageDOM.classList.add("hidden")
    this.messageDOM.innerHTML = ""
    Settings.message.message = undefined
    Settings.message.duration = Settings.message.initialDuration
    }
  }
}


