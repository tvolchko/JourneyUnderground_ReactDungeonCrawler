import potionImg from '../assets/Potion.png'
import keyImg from '../assets/Key.png'

class Item {
    constructor (att) {
      this.itemId = att.itemId
      this.imgSrc = att.imgSrc
    }
    useItem () {

    }
    // loot () {
    //   const invSpot = `item${player.inventory.length + 1}`
    //   player.inventory.push(this)
    //   document.getElementById(invSpot).src = this.imgSrc
    //   roomArr[player.room].treasurePresent = null
    // }
  }
class Potion extends Item {
    constructor (att) {
        super(att)
    }

    useItem (slot) {
        // player.hpCurrent = player.hpTotal
        // player.inventory.splice(slot, 1)
        // document.getElementById('cSheetHealth').innerHTML = `${player.hpCurrent}/${player.hpTotal}`
        // for (let i = 1; i < 6; i++) {
        // document.getElementById(`item${i}`).src = ''
        // }
        // player.inventory.forEach((item, index) => {
        // const invSpot = `item${index + 1}`
        // document.getElementById(invSpot).src = item.imgSrc
        // })
    }
}
const key = new Item({
    name: 'key',
    itemId: 0,
    imgSrc: require('../assets/Key.png')
  })
  const potion = new Potion({
    name: 'potion',
    itemId: 1,
    imgSrc: require('../assets/Potion.png')
  
  })
  export const itemArr = [key, potion]