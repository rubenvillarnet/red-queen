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
    priceID: "nxt-lvl-cost"
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
  field: {
    w: 1024,
    h: 640,
    color: "#222"
  },
  slot:{
    w: 64,
    h: 64
  }
}

