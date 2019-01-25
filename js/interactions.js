var Interactions = {
  towerSelected : undefined,
  buttonClicked: false,
  buttonIsNewTower: true,
  canvasClick: function(game){
    game.canvas.addEventListener('click', (e) => {
      this.mouseClick = [e.layerX, e.layerY]
      game.slots.forEach(function(slot, index){
        if(this.mouseClick[0] >= slot.x && this.mouseClick[0] < slot.x + slot.w &&
          this.mouseClick[1] >= slot.y && this.mouseClick[1] < slot.y + slot.h){
            if(slot.tower === undefined && this.buttonClicked === true){
              Settings.slot.slotSelected = undefined
              this.debug()
              if(game.money < 50){
                console.log("no hay pasta")
              }else{
                sound.newTower.volume = 0.4
                sound.newTower.play()
                this.buttonClicked = false
                this.towerSelected = index
                game.slots[index].tower = new Tower(game, game.slots[index].y + 16)
                game.slots[index].level = 1
                game.money -= 50
                this.buttonClicked = false
                this.buttonIsNewTower = true
                this.towerSelected = undefined
              }
            }
            else if(slot.tower == undefined && this.buttonClicked === false){
              Settings.slot.slotSelected = undefined
              this.debug()
              this.clearFlags(3)
            }
            else if(slot.tower != undefined ){
              this.debug()
              this.towerSelected = index 
              this.buttonClicked = false
              this.buttonIsNewTower = false
              game.Interface.level = game.slots[index].level
              game.Interface.levelInfo = game.slots[index].tower.levels[game.slots[index].level -1]
              Settings.slot.slotSelected = index
            }else{
              this.debug()
              
            }
              //TODO mostrar la torre como seleccionada
        }else if(this.mouseClick[0] > slot.x + slot.w ){
          this.clearFlags()
        }
      }.bind(this)) //TODO que pasa si pinchas en cualquier otra area del canvas
    })
  },
  interfaceClick: function(game){
    document.getElementById("purple-tower-button").addEventListener('click', () => {
      if(this.towerSelected === undefined){
        Settings.slot.slotSelected = undefined    
        this.debug() 
        if(game.money < 50){ //TODO habrá que cambiarlo cuando haya más torres
          Settings.message.message = "insufficient funds"
          sound.noMoney.play()
        }else{
          this.buttonClicked = true
        }
      } else{
          this.debug()
          if(game.money < 30){ // TODO de momento se queda con un sólo valor
            Settings.message.message = "insufficient funds"
            sound.noMoney.play()
          }else{
            this.upgradeTower(game,this.towerSelected)
          }
      }
    })
  },

  checkButton: function(game){
    var btnZone = document.getElementById("purple-tower-button")
    var childBtn = btnZone.childNodes

    if(this.buttonIsNewTower === true){
      if(this.buttonClicked === true){
        btnZone.classList.add("yellow-bg")
        btnZone.classList.remove("purple-bg")
      }else{
        btnZone.classList.add("purple-bg")
        btnZone.classList.remove("yellow-bg")
      }
      childBtn[1].classList.remove("hidden")
      childBtn[3].classList.add("hidden")
      
    }else{
      childBtn[1].classList.add("hidden")
      childBtn[3].classList.remove("hidden")
      btnZone.classList.add("yellow-bg")
      btnZone.classList.remove("purple-bg")
    }
  },
  upgradeTower: function(game,nTower){
    if(game.slots[nTower].level >= 4){
      Settings.message.message = "max level reached!!"
      sound.noMoney.play()
    }else{
      sound.upgrade.play()
      game.money -= 30
      game.slots[nTower].level++
      game.slots[nTower].tower.level = game.slots[nTower].level
      game.slots[nTower].tower.damage *= 1.3
      game.Interface.level = game.slots[nTower].level
      game.Interface.levelInfo = game.slots[nTower].tower.levels[game.slots[nTower].level -1]

    }
  },
  clearFlags: function(num){
    this.buttonClicked = false
    this.buttonIsNewTower = true
    this.towerSelected = undefined
    if(Settings.debug.interacions === true){
      console.log("se limpian flags " + num)
    }
  },
 debug: function(){
    if(Settings.debug.interacions === true){
      console.log(
        `Pulsado: ${this.buttonClicked} 
        NuevaTorre: ${this.buttonIsNewTower} 
        Torre: ${this.towerSelected}`)
    }
  }
}