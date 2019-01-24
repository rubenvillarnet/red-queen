var Settings = {
  game: {
    gameStarted: false,
    canvasID: "canvas",
    fps: 60,
    health: 10,
    money: 300
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
    color: "#9C398F",
    levelColor: "#500546",
    damage: 1,
    range: 400,
    fireRate: 60,
    price: 50,
    levels: [
      [0.3, 30, "30%"],
      [0.3, 30, "30%"],
      [0.3, 30, "30%"]
    ],
    bullets: {
      color: "#F8EE70",
      width: 2,
      duration: 30 
    }
  },
  foe: {
    w: 32,
    h: 32, 
    color: "rgba(104, 253, 248, 0.23)",
    healthColor: "rgba(104, 253, 248, 1)",
  },
  waves: {
    wave1:{
      maxFrames: 1800,
      foesRate: 230,
      health: 10,
      speed: 1,
      money: 10
    },
    wave2:{
      maxFrames: 1800,
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
  message: {
    message: undefined,
    duration: 120,
    initialDuration: 120,
    messageID: "message"
  },
  field: {
    w: 1024,
    h: 640,
    color: "#000",
    gridWH: 32,
    gridColor: "rgba(99, 117, 248, 0.46)"
    },
  slot:{
    w: 64,
    h: 64,
    slotSelected: undefined,
    fillStyle: "rgba(80, 5, 70, 0.24)",
    strokeStyle: "#500546",
    selectedFillStyle: "rgba(99, 117, 248, 0.34)",
    selectedStrokeStyle: "rgba(99, 117, 248, 1)"

  },
  debug:{
    interacions: false
  }
}

