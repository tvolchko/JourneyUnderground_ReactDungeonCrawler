export const EXPLORE_ROOM = 'EXPLORE_ROOM'
export const CLIMB_FLOOR = 'CLIMB_FLOOR'
export const LOOT_ROOM = 'LOOT_ROOM'


export const exploreRoom = (rmId, mapId) => {
    return ({ type: EXPLORE_ROOM, payload: [rmId, mapId]})
}

export const lootRoom = (itemId) => {
    return({ type: LOOT_ROOM, payload: [itemId]})
}
