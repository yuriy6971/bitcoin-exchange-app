import {createStore, combineReducers} from "redux"
import  setIntervalReducer  from "./setIntervalReduser"
import BitcoinRateReducer from "./BitcoinRatereducer"


const rootReducer = combineReducers({
    intervalPage : setIntervalReducer,
    bitcoinPage : BitcoinRateReducer
})
const store = createStore(rootReducer)

export default store

