var Settings = {
  game: {
    canvasID: "canvas",
    fps: 60,
    health: 10,
    money: 100
  },
  interface: {
    healthID: "health",
    moneyID: "money",
    levelID: "next-level",
    damageID: "nxt-lvl-damage",
    rangeID: "nxt-lvl-range",
    priceID: "nxt-lvl-cost",
    waveID: "wave"
  },
  tower: {
    w: 32,
    h: 32,
    x: 16,
    color: "#0400FF",
    textColor: "#FFF",
    damage: 1,
    range: 0,
    fireRate: 60,
    price: 50,
    levels: [
      [0.3, 30, "30%"],
      [0.3, 30, "30%"],
      [0.3, 30, "30%"]
    ],
    bullets: {
      color: "#ffffff",
      width: 2,
      duration: 30 
    }
  },
  foe: {
    w: 32,
    h: 32, 
    color: "#D22727",
    healthColor: "#ffffff",
  },
  waves: {
    wave1:{
      maxFrames: 3600 * 3,
      foesRate: 230,
      health: 10,
      speed: 1,
      money: 10
    },
    wave2:{
      maxFrames: 3600 * 3,
      foesRate: 190,
      health: 14,
      speed: 1.5,
      money: 13
    },
    wave3:{
      maxFrames: undefined,
      foesRate: 140,
      health: 17,
      speed: 1.9,
      money: 15
    }
  },
  field: {
    w: 1024,
    h: 640,
    color: "#222"
  },
  slot:{
    w: 64,
    h: 64
  },
  debug:{
    interacions: true
  }
}

