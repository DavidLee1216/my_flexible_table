import React from 'react'
import { connect } from 'react-redux'
import { newUserGame } from '../actions'
import {Round} from '../actions'
import {addItem} from '../actions'
import {toggleItem} from '../actions'
import OneGame from '../GameComponent/oneGame'
import {setTimer} from '../GameComponent/TileMatrix'
import {set_test_show} from '../GameComponent/TileMatrix'

const OneGamePrep = ({round, name, matrix_array, newUserGame, round_start}) => {
    if(name==='')
        return(<div style={{color:'rgb(255, 255, 255)'}}
         onClick={()=>{
             newUserGame(name)
            }}>Please select name</div>)
    if(round==0)
        return(
            <div>
                <button onClick={()=>{round_start(name, round+1)
                    setTimer()
                }}>START</button>
            </div>
        )
    return(
    <div>
        <button onClick={()=>{
            round_start(name, 1)
            setTimer()
            }}>START</button>
        <OneGame round={round} name={name} matrix_array={matrix_array}></OneGame>
    </div>
)}

const getRound = items => {
    if(items.length > 0)
    {
        return items[items.length-1].round;
    }
    else
        return 0;
}

const getMatrix = items => {
    if(items.length > 0)
    {
        return items[items.length-1].matrix
    }
    else
        return [[]]
}
const mapStateToProps = (state, ownProps) => ({
    round: getRound(state.newRound),
    name: ownProps.name,
    matrix_array: getMatrix(state.newRound)
})

const mapDispatchToProps = (dispatch) => ({
    newUserGame: (name) => dispatch(newUserGame(name)),
    round_start: (name, round) => dispatch(Round(name, round)),
//    addItem: (name, round, i, j) => dispatch(addItem(name, round, i, j)),
//    toggleItem: (id) => dispatch(toggleItem(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OneGamePrep)

