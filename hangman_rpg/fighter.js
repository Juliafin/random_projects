function Fighter (name) {
  this.name = name;
  this.maxHitpoints = 10
  this.currentHitpoints = 10
  this.alive = true
  this.usePotion = function () {
    console.log(this.name + " drinks a potion.")
    if (this.currentHitpoints >= 8 && this.currentHitpoints < 10) {
      this.currentHitpoints = 10
      console.log(this.name + " recovers " + (this.maxHitpoints - this.currentHitpoints) + " hitpoints." )
    } else {
      this.currentHitpoints += 3
      console.log(this.name + " recovers 3 hitpoints.")
    }
  }
  this.physicalAttack = function(target) {
    var damage = Math.floor(Math.random() * 4) + 1;
    target.currentHitpoints -= damage;
    console.log(`${this.name} attacks ${target.name} for ${damage} hitpoints.`)
    this.checkifAlive(target)
  }

  this.checkifAlive = function (target) {
    if (target.currentHitpoints <= 0 ) {
      target.alive = false
      console.log(target.name + " has passed out.")
    }
  }
}

var sam = new Fighter('Sam')
var brad = new Fighter('Brad')

sam.physicalAttack(brad)
console.log(sam)
brad.physicalAttack(sam)
console.log(brad)
sam.usePotion()
console.log(sam)
brad.physicalAttack(sam)
sam.physicalAttack(brad)
sam.physicalAttack(brad)
sam.physicalAttack(brad)
sam.physicalAttack(brad)
sam.physicalAttack(brad)
sam.physicalAttack(brad)
sam.physicalAttack(brad)
brad.usePotion
console.log(brad)
console.log(sam)

console.log(sam)