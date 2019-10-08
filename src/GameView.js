import React from "react"
import './GameView.css'

var tiles = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10];
var tile_pos = {"pos":[{"x":0, "y":0}]};
var matrix_array = [[]];
  
function Create2DArray(rows) {
    var arr = [];
  
    for (var i=0;i<rows;i++) {
       arr[i] = [];
    }
  
    return arr;
}

function matrix( rows, cols, defaultValue){

    var arr = [];
  
    // Creates all lines:
    for(var i=0; i < rows; i++){
  
        // Creates an empty line
        arr.push([]);
  
        // Adds cols to the empty line:
        arr[i].push( new Array(cols));
  
        for(var j=0; j < cols; j++){
          // Initializes:
          arr[i][j] = defaultValue;
        }
    }
    
  return arr;
}
class Tile extends React.Component{
    constructor(props){
        super(props);

    }
    handleClick = () => {

    }
    render(){
        return(
            <div className="tileCell"></div>
        )
    }
}
class TileRow extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick = (e) => {

    }
    render(){
        const listItems = this.props.arr.map((array)=>
        <Tile></Tile>);
        return(
            <div className="tileRow">{listItems}</div>
        )
    }
}
class TileMatrix extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick = (e) => {

    }
    render(){
        const listItems = this.props.matrix.map((array)=>
            <TileRow arr={array}></TileRow>);
        return(
            <div className="tileMatrix">{listItems}</div>
        )
    }
}
function test(...arg){
 //   const x = [1, 0, true, false, '', 'a'].filter(Number)
    alert(typeof arg)
}
export default class GameView extends React.Component{
    constructor(props){
        super(props);
        this.state = {round:10, succ:0};
    }
    handleClick = e => {
        if(e)
        {
            this.setState({succ:1});
            this.state.round++;
        }
        else{
            this.state.succ = 0;
        }
    }
    render(){
  //      test();
        matrix_array = matrix(this.state.round, this.state.round, 0);
        return(
            <div className="GameView">
                <TileMatrix matrix={matrix_array}></TileMatrix>
            </div>
         )
    }
}