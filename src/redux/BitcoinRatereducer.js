const ADD_TIME_BITCOIN = "ADD_TIME_BITCOIN"


const initialState = {
     timeRateBitcoins : [],
    count : 1 
}

const BitcoinRateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TIME_BITCOIN:

            const objBitcoin = {
              id : state.count,
              time : action.currentTime,
              rate : action.currenRate
            }
            return {
                ...state,
                timeRateBitcoins : [...state.timeRateBitcoins,objBitcoin],
                count : state.count + 1
            }

        default: return state
    }
}

export const BitcoinRateActionCreator = (time, rate) => {
    return {
        type: ADD_TIME_BITCOIN,
        currentTime: time,
        currenRate: rate
    }
}



export default BitcoinRateReducer