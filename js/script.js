window.onload = function(){
  var canvas = document.getElementById(Settings.game.canvasID)
  var ctx = this.canvas.getContext("2d")

  Game.startScreen(canvas, ctx)
}