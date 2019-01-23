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
              this.debug()
              if(game.money < 50){
                console.log("no hay pasta")
              }else{
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
              this.debug()
              this.clearFlags(3)
            }
            else if(slot.tower != undefined /* && this.buttonClicked === true */){
              this.debug()
              this.towerSelected = index 
              this.buttonClicked = false
              this.buttonIsNewTower = false
              game.Interface.level = game.slots[index].level
              game.Interface.levelInfo = game.slots[index].tower.levels[game.slots[index].level -1]
            }else{
              this.debug()
              
            }
              //TODO mostrar la torre como seleccionada
        }else{
        }
      }.bind(this)) //TODO que pasa si pinchas en cualquier otra area del canvas
    })
  },
  interfaceClick: function(game){
    document.getElementById("blue-tower-button").addEventListener('click', () => {
      if(this.towerSelected === undefined){    
        this.debug() 
        if(game.money < 50){ //TODO habrá que cambiarlo cuando haya más torres
          console.log("no hay pasta") //TODO sustituirlo por un mensaje en pantalla
        }else{
          this.buttonClicked = true
          //TODO mostrar que el botón está pulsado
        }
      } else{
          this.debug()
          if(game.money < 30){ // TODO de momento se queda con un sólo valor
            console.log("no hay pasta") //sustituirlo por un mensaje en pantalla
          }else{
            this.upgradeTower(game,this.towerSelected)
          }
          //TODO definir cómo ampliar
          //TODO ampliar torre (estadísticas y aspecto)
      }
    })
  },

  checkButton: function(game){
    var btnZone = document.getElementById("blue-tower-button").childNodes
    var newBtn = btnZone[1]
    var upgradeBtn = btnZone[3]

    if(this.buttonIsNewTower === true){
      btnZone[1].classList.remove("hidden")
      btnZone[3].classList.add("hidden")
    }else{
      btnZone[1].classList.add("hidden")
      btnZone[3].classList.remove("hidden")
    }
  },
  upgradeTower: function(game,nTower){
    if(game.slots[nTower].level >= 4){
      console.log("no se puede subir de nivel")
    }else{
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