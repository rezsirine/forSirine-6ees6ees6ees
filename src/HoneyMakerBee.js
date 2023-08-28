import Bee from './Bee.js'

class HoneyMakerBee extends Bee {
  constructor() {
    super()
    this.age = 10
    this.job = 'make honey'
    this.honeyPot = 0
  }

  makeHoney() {
    return `honey pot now filled with ${this.honeyPot++}`
  }
  giveHoney() {
    if(this.honeyPot > 0) {
        return `honey pot now filled with ${--this.honeyPot}`
    }
    return 'no honey to give'
  }
}

export default HoneyMakerBee;
