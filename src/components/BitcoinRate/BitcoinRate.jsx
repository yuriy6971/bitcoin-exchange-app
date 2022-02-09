import React from "react"
import s from "./bitcoinRate.module.css"
import { connect } from "react-redux"
import {BitcoinRateActionCreator} from "../../redux/BitcoinRatereducer"
import *as axios from "axios"

class BitcoinRate extends React.Component {


    // componentDidMount(){
    //     setInterval(this.addElem,this.props.currentInterval)
    // }

     addElem = () => {
        let now = new Date()
     //   alert(`${now.getFullYear()}, ${now.getMonth()}, ${now.getDate()},   ${now.getHours()}: ${now.getMinutes()} `)
       let time  = `${now.getFullYear()}, ${now.getMonth()}, ${now.getDate()};  ${now.getHours()}: ${now.getMinutes()}`
       let rate = 148
      this.props.addRateBitcoin(time,rate)
    }

    //  addCoin = () => {
    //    axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest", {
    //       withCredentials :true,
    //        headers : {
    //            "X-CMC_PRO_API_KEY" : "ac9a9f62-685a-43f6-b662-a3f8daf61833"
    //        }


    //    })
    //    .then(response => {
    //        console.log(response.data.quote.price)
    //    })
    // }


   render(){ 
    return (
        <div className={s.container}>
            <div className={s.grid_container}>
                <div className={s.title_date_time}>Дата/Время</div>
                <div className={s.title_prise}>Цена</div>
                <div className={s.date_time}>
                    {this.props.timeRateBitcoins.map((item,index) => <div key = {index}>
                     {item.time}
                    </div>)}
                </div>
                <div className={s.prise}>
                    {this.props.timeRateBitcoins.map((item,index) => <div key = {index}>
                      {item.rate}
                    </div>)}
                </div>

            </div>
       
        </div>
    )
   }
}



const mapStateToProps = (state) => {
    return {
        timeRateBitcoins : state.bitcoinPage.timeRateBitcoins,
        currentInterval : state.intervalPage.currentInterval
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        addRateBitcoin : (time,rate) => {
            dispatch(BitcoinRateActionCreator(time,rate))
        }
    }
}

export default connect (mapStateToProps,mapDispatchToprops)(BitcoinRate)