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
    ctx = this.game.ctx
    this.healthDOM.innerHTML = this.game.health
    this.moneyDOM.innerHTML = this.game.money
    //this.nextRange()
    this.waveDOM.innerHTML = this.game.currentWave
    this.message()

    if(this.level === 4){
      this.levelDom.innerHTML = "MAX"
      this.damageDOM.innerHTML = "-"
      this.priceDOM.innerHTML =  "-"

    }else{
      this.levelDom.innerHTML = this.level +1
      this.damageDOM.innerHTML = this.levelInfo[2]
      this.priceDOM.innerHTML = this.levelInfo[1]
    }
  
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


