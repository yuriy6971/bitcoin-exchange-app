const SET_INTERVAL_REQ = "SET_INTERVAL_REQ"

const initialState = {
    listIntervals : [1,15,30,60],
    currentInterval : 1
}

const setIntervalReducer = (state = initialState,action) => {
    switch(action.type){
        case SET_INTERVAL_REQ : 
        return {
            ...state,
            currentInterval : action.currentItem

        }

        default : return state
    }
}

 export const setIntervalActionCreator = (item) => {
    return {
        type : SET_INTERVAL_REQ,
        currentItem : item

    }
}


export default setIntervalReducer