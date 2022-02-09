import React from "react"
import s from "./intervalScan.module.css"
import { connect } from "react-redux"
import {setIntervalActionCreator} from "../../redux/setIntervalReduser"


const IntervalScan = (props) => {

    const intervalSet = (item) => {
        props. intervalSetEx(item)
        
    }
    console.log(props.currentInterval)

    return (
        <div className={s.interval_container}>
            <p className={s.title_scan}>Интервал сканирования</p>
            {/* <div className={s.screen_interval}>1 мин</div> */}
            <div className={s.block_screen}>
                <p className={s.screen_interval}><span>{props.currentInterval}</span>мин</p>
                <div className={s.time_menu}>
                    {props.listIntervals.map((item, index) => <div key={index} className={s.item_intervals} onClick={() => intervalSet(item)} >{`${item} мин`}</div>)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listIntervals: state.intervalPage.listIntervals,
        currentInterval: state.intervalPage.currentInterval
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
         intervalSetEx : (item) => {
             dispatch(setIntervalActionCreator(item))
         }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntervalScan)