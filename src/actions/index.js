export const EXPLORE_ROOM = 'EXPLORE_ROOM' // These just prevent accidental mispellings
export const CLIMB_FLOOR = 'CLIMB_FLOOR'
export const LOOT_ROOM = 'LOOT_ROOM'
export const BEGIN_COMBAT = 'BEGIN_COMBAT'
export const COMBAT_ACTION = 'COMBAT_ACTION'
export const END_COMBAT = 'END_COMBAT'
export const SUBMIT_CHARACTER = 'SUBMIT_CHARACTER'


export const exploreRoom = (rmId, mapId) => {
    return ({ type: EXPLORE_ROOM, payload: [rmId, mapId]})
}

export const lootRoom = (itemId) => {
    return({ type: LOOT_ROOM, payload: [itemId]})
}

export const beginCombat = (enemyId) => {
    return({type: BEGIN_COMBAT, payload: enemyId})
}

export const combatAction = (enemy, player) => {
    return({type: COMBAT_ACTION, payload: [enemy, player]})
}

export const endCombat = () => {
    return({type: END_COMBAT})
}

export const submitCharacter = (char, inv) => {
    return({type: SUBMIT_CHARACTER, payload: [char, inv]})
}