// Core
export const create = (stoneCount = 0) => stoneCount
export const getStoneCount = (pit) => pit

// Api
export const addStone = (pit) => 
    create(
        getStoneCount(pit) + 1
    )
