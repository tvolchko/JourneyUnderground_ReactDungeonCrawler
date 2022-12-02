// class Enemy {
//   constructor (att) {
//     this.enemyId = att.enemyId
//     this.name = att.name
//     this.hpCurrent = att.hp
//     this.hpTotal = att.hp
//     this.dmg = att.dmg
//     this.armor = att.armor
//     this.enemyImg = att.enemyImg
//     this.strength = att.strength
//     this.dexterity = att.dexterity
//     this.tempArmor = 0
//     this.mainAtk = att.mainAtk
//     this.secondaryAtk = att.secondaryAtk
//     this.weakAtk = att.weakAtk
//   }
// }

const slime = {
    enemyId: 0,
    name: 'Slime',
    strength: 2,
    dexterity: 3,
    intelligence: 5,
    hpCurrent: 14,
    hpTotal: 14,
    dmg: 2,
    armor: 15,
    enemyImg: require('../assets/purple_blob.png'),
    mainAtk: 'intelligence',
    secondaryAtk: 'dexterity',
    weakAtk: 'strength',
  }
  
  const goblin = {
    enemyId: 1,
    name: 'Goblin',
    strength: 2,
    dexterity: 4,
    intelligence: 1,
    hpCurrent: 50,
    hpTotal: 8,
    dmg: 4,
    armor: 14,
    enemyImg: require('../assets/goblin.png'),
    mainAtk: 'dexterity',
    secondaryAtk: 'strength',
    weakAtk: 'intelligence',
  }
  const enemyArr = [slime, goblin]

  export default enemyArr