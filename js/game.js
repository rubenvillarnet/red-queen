var Game = {
  canvas: undefined,
  ctx: undefined,
  frames: 0,
  fps: 0,
  health: 0,
  money: 0,
  currentWave: 1,
  foes: [],
  bullets: [],
  slots: [],
  towers: [],

  start: function(){
    
    this.setAll()

    this.intervalID = setInterval(function(){
      this.frames++
      this.clear()
      Interactions.checkButton()
      this.renderAll()
      this.slots.forEach(function(slot){
        if(slot.tower != undefined){
          slot.tower.render(slot.level)
          slot.tower.attack()
        }
      })
      
      this.manageFoes()
      this.checkHealth()
      this.checkGameOver()


    }.bind(this), 1000 / this.fps)
  },

  setAll: function(){
    this.canvas = document.getElementById(Settings.game.canvasID)
    this.ctx = this.canvas.getContext("2d")
    this.fps = Settings.game.fps
    this.health = Settings.game.health
    this.money = Settings.game.money
    this.currentWave = 1
    this.foes = []
    this.bullets = []
    this.slots = []
    this.towers = []

    this.fillSlots()
    Interactions.canvasClick(this)
    Interactions.interfaceClick(this)
    this.Field = new Field(this)
    this.Interface = new Interface(this)
    this.Field.render()
    this.foes.push(new Foe(this))
  },

  renderAll: function(){
    this.Field.render()

    this.Interface.render()
    this.bullets.forEach(function(bullet) {
      bullet.render()
    })
  },

  clear: function(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
    this.clearBullets()
    this.clearFoes()
  },

  manageFoes: function(){
    this.foes.forEach(foe => {
      foe.render()
      foe.move()
    });
    if(this.frames % Settings.waves["wave" + this.currentWave].foesRate === 0)
    {
      this.foes.push(new Foe(this))
      
    }

    if(this.frames >= Settings.waves["wave" + this.currentWave].maxFrames){
      this.frames = 0
      this.currentWave++
    }
  },

  clearFoes: function () {
    this.foes.forEach(function(foe){
      if(foe.health <= 0){
        this.money += foe.money
        sound.kill.play()
      }
    }.bind(this))
    
    this.foes = this.foes.filter(function (foe) {
      return foe.x > 0 && foe.health > 0 ;
    });
  },

  checkHealth: function(){
    this.foes.forEach(function(foe){
      if(foe.x <= 0) {
        this.health--
        sound.kill.play()
      } 
      
    }.bind(this))
  },

  clearBullets: function(){
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
      this.gameOver()
    }
  },

  gameOver: function(){
    sound.gameOver.play()
    Settings.game.gameOver = true
    ctx = this.ctx
    ctx.fillStyle = "rgba(80, 5, 70, 0.80)"
    ctx.fillRect(0, 0, Settings.field.w, Settings.field.h)
    ctx.fillStyle = "#fff"
    ctx.font = "100px Orbitron"
    ctx.fillText("GAME OVER", 170, 300)
    ctx.fillRect(242, 370, 550, 120)
    ctx.fillStyle = Settings.slot.strokeStyle
    ctx.font = "40px Orbitron"
    ctx.fillText("PLAY AGAIN?", 365, 420)
    ctx.font = "20px Orbitron"
    ctx.fillText("CLICK IN THE SCREEN TO CONTINUE", 322, 470)
    this.Interface.healthDOM.innerHTML = "0"
    this.canvas.addEventListener("click", (e) => {
      if(Settings.game.gameOver === true){
        Settings.game.gameOver = false
        sound.start.play()
        this.start()
      }
    })
  },
  startScreen: function(canvas, ctx){
    ctx.fillStyle = Settings.slot.strokeStyle
    ctx.fillRect(0, 0, Settings.field.w, Settings.field.h)
    ctx.fillStyle = "#fff"
    ctx.font = "100px Orbitron"
    ctx.fillText("RED QUEEN", 170, 250)
    ctx.fillText("HYPOTHESIS", 130, 350)
    ctx.font = "30px Orbitron"
    ctx.fillText("CLICK IN THE SCREEN TO START", 230, 450)
    canvas.addEventListener("click", function(){
      document.getElementById("top-values").style.visibility = "visible"
      document.getElementById("message-box").style.visibility = "visible"
      document.getElementById("waves-counter").style.visibility = "visible"
      document.getElementById("gui-bottom").style.visibility = "visible"

      if(Settings.game.gameStarted === false){
        Settings.game.gameStarted = true
        sound.start.play()
        this.start()
      }
      
    }.bind(this))
  }
}