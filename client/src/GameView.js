import React from "react"
import './GameView.css'
import { connect } from 'react-redux'
import { newUserGame } from './actions'
import { Round } from './actions'
import rootReducer from './actions/reducer'
import InitGame from "./GameContainer/InitGame"

var tiles = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10];
var tile_pos = {"pos":[{"x":0, "y":0}]};
var matrix_array = [[]];


function Create2DArray(rows) { // for 2D array test
    var arr = [];
  
    for (var i=0;i<rows;i++) {
       arr[i] = [];
    }
  
    return arr;
}

function test(...arg){
 //   const x = [1, 0, true, false, '', 'a'].filter(Number)
    alert(typeof arg)
}

export default class GameView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
  //      test();
  //      matrix_array = matrix(this.state.round, this.state.round, 0);
        var username = this.props.username;
//        <InitGame name={this.props.username}/>
        return(
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <InitGame name={username}/>
                <h3 style={{color:"blue"}}>{this.props.username}</h3>
            </div>
         )
    }
}
