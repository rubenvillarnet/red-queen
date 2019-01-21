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
    this.health = 100
    this.money = 100

    this.fillSlots()
    this.canvas.addEventListener('click', (e) => {
      this.mouseClick = [e.clientX, e.clientY]
      this.slots.forEach(function(slot, index){
        if(this.mouseClick[0] >= slot.x && this.mouseClick[0] < slot.x + slot.w &&
          this.mouseClick[1] >= slot.y && this.mouseClick[1] < slot.y + slot.h){
            console.log(index)
          }
      }.bind(this))
    })
    this.Field = new Field(this)
    this.Interface = new Interface(this)
    this.Field.render()
    this.foes.push(new Foe(this))
    this.Tower = new Tower(this)

    this.intervalID = setInterval(function(){
      this.frames++

      this.clearScr()
      this.Field.render()
      
      this.Tower.render()
      this.Tower.shoot()
      
      this.Interface.health()
      this.Interface.money()

      this.foes.forEach(foe => {
        foe.render()
        foe.move()
      });

      this.checkBullets()
      this.bullets.forEach(bullet => {
        bullet.render()
      })

      

      this.checkHealth()
      this.clearFoes()

      if(this.frames > 899) this.frames = 0

      if(this.frames % 300 === 0)
      {
        this.foes.push(new Foe(this))
      }
    }.bind(this), 1000 / this.fps)
  },

  clearScr: function(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
  },

  clearFoes: function () {
    lengthBefore = this.foes.length
    this.foes = this.foes.filter(function (foe) {
      return foe.x > 0 && foe.health > 0 ;
    });
    this.money += 10 * (lengthBefore - this.foes.length)
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
  }
}