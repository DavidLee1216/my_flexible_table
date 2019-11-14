let ItemId = 0
let round = 0

export const addItem = (name, round, row, col) => ({
    type: 'ADD_ITEM',
    id: ++ItemId,
    name,
    round,
    row,
    col
})

export const toggleItem = (name, round, row, col) => ({
    type: 'TOGGLE_ITEM',
    name,
    round,
    row,
    col
})

export const newUserGame = (name) => ({
    type: "NEW_USER_GAME",
    name: name,
    round: round = 0
})

export const Round = (name, round) => ({
    type: 'ROUND',
    name: name,
    round: round,
})

export const Reset = (name) => ({
    type: 'RESET',
    name: name
})