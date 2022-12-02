class Enemy {
  constructor (att) {
    this.enemyId = att.enemyId
    this.name = att.name
    this.hpCurrent = att.hp
    this.hpTotal = att.hp
    this.dmg = att.dmg
    this.armor = att.armor
    this.enemyImg = att.enemyImg
    this.strength = att.strength
    this.dexterity = att.dexterity
    this.constitution = att.constitution
    this.tempArmor = 0
  }
}

const slime = new Enemy({
    enemyId: 0,
    name: 'Slime',
    strength: 2,
    dexterity: 3,
    intelligence: 5,
    hp: 14,
    dmg: 2,
    armor: 12,
    enemyImg: require('../assets/purple_blob.png'),
    mainAttk: 'intelligence',
    secondaryAtk: 'dexterity',
    weakAtk: 'strength',
  })
  
  const goblin = new Enemy({
    enemyId: 1,
    name: 'Goblin',
    strength: 2,
    dexterity: 4,
    intelligence: 1,
    hp: 8,
    dmg: 4,
    armor: 14,
    enemyImg: require('../assets/goblin.png'),
    mainAttk: 'dexterity',
    secondaryAtk: 'strength',
    weakAtk: 'magic',
  })
  const enemyArr = [slime, goblin]

  export default enemyArr