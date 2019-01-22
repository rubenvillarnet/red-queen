Game = {
  canvas: undefined,
  ctx: undefined,
  frames: 0,
  fps: 0,
  health: 0,
  money: 0,
  foes: [],
  bullets: [],
  slots: [],
  mouseX: 0,
  mouseY: 0,
  towers: [],

  start: function(){
    this.canvas = document.getElementById("canvas")
    this.ctx = this.canvas.getContext("2d")
    this.fps = 60
    this.health = 10
    this.money = 100

    this.fillSlots()
    interactions.canvasClick(this)
    interactions.interfaceClick(this)
    this.Field = new Field(this)
    this.Interface = new Interface(this)
    this.Field.render()
    this.foes.push(new Foe(this))

    this.intervalID = setInterval(function(){
      this.frames++

      interactions.checkButton()

      this.clearScr()
      this.Field.render()
      this.slots.forEach(function(slot){
        if(slot.tower != undefined){
          slot.tower.render()
          slot.tower.shoot()
        }
      })
      
      this.slots.forEach(function(slot){
        slot.drawZone()
      })
      this.Interface.render()

      

      this.checkBullets()
      this.bullets.forEach(bullet => {
        bullet.render()
      })

      this.foes.forEach(foe => {
        foe.render()
        foe.move()
      });
      

      this.checkHealth()
      this.clearFoes()
      this.checkGameOver()

      if(this.frames > 899) this.frames = 0

      if(this.frames % 230 === 0)
      {
        this.foes.push(new Foe(this))
      }

    }.bind(this), 1000 / this.fps)
  },

  clearScr: function(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
  },

  clearFoes: function () {
    this.foes.forEach(function(foe){
      if(foe.health <= 0){
        this.money += foe.money
      }
    }.bind(this))
    this.foes = this.foes.filter(function (foe) {
      return foe.x > 0 && foe.health > 0 ;
    });
  },

  checkHealth: function(){
    this.foes.forEach(function(foe){
      if(foe.x === 0)  this.health--
    }.bind(this))
  },

  checkBullets: function(){
    this.bullets = this.bullets.filter(function(bullet){
      return bullet.duration > 0
    })
  },

  fillSlots: function(){
    for(var i = 0; i < 640; i += 64){
      this.slots.push(new Slot(this, i))
    }
  },

  checkGameOver: function(){
    if(this.health <= 0){
      clearInterval(this.intervalID)
      console.log("surprise mudafacka")
    }
  }
}