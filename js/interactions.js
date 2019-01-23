var interactions = {
  towerSelected : undefined,
  buttonClicked: false,
  buttonIsNewTower: true,
  canvasClick: function(game){
    game.canvas.addEventListener('click', (e) => { //click en canvas
      this.mouseClick = [e.layerX, e.layerY]
      game.slots.forEach(function(slot, index){
        if(this.mouseClick[0] >= slot.x && this.mouseClick[0] < slot.x + slot.w &&
          this.mouseClick[1] >= slot.y && this.mouseClick[1] < slot.y + slot.h){
            if(slot.tower === undefined){ //si el slot no tiene torre
              if(this.buttonClicked === true){ //si ya hemos pulsado en el botón de colocar torre
                if(game.money < 50){
                  console.log("no hay pasta")
                }else{
                  this.buttonClicked = false
                  game.slots[index].tower = new Tower(game, game.slots[index].y + 16)
                  game.slots[index].level = 1
                  game.money -= 50
                }
                
                //TODO borrar flags (clearClick)
              }else{
                this.buttonClicked = false
                this.buttonIsNewTower = true
                this.towerSelected = undefined
              }
            }else{ //si sí que tiene torre
              if(this.buttonClicked === false){
                this.towerSelected = index 
                this.buttonClicked = false
                this.buttonIsNewTower = false
                game.Interface.level = game.slots[index].level
                game.Interface.levelInfo = game.slots[index].tower.levels[game.slots[index].level -1]
              }
              
              //TODO mostrar la torre como seleccionada
            }
          }
      }.bind(this)) //TODO que pasa si pinchas en cualquier otra area del canvas
    })
  },
  interfaceClick: function(game){
    document.getElementById("blue-tower-button").addEventListener('click', (e) => { //click en boton
      if(this.towerSelected === undefined){ //si no hay torre seleccionada        
        if(game.money < 50){ //TODO habrá que cambiarlo cuando haya más torres
          console.log("no hay pasta") //sustituirlo por un mensaje en pantalla
        }else{
          this.buttonClicked = true //vamos a colocar torre
          //TODO mostrar que el botón está pulsado
          //console.log("colocar torre")
        }
      } else{ //sí que hay torre seleccionada
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
    //comprobamos cual tiene la clase hidden
    //la intercambiamos
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
      //no se puede
      console.log("no se puede subir de nivel")
    }else{
      game.money -= 30
      game.slots[nTower].level++
      game.slots[nTower].tower.level = game.slots[nTower].level
      game.slots[nTower].tower.damage *= 1.3
      game.Interface.level = game.slots[nTower].level
      game.Interface.levelInfo = game.slots[nTower].tower.levels[game.slots[nTower].level -1]

    }
  }
}