import React from "react"
import {connect} from 'react-redux'
import {toggleItem} from '../actions'
import '../GameView.css'
import {Round} from '../actions'
import { newUserGame } from '../actions'
import {Reset} from '../actions'
import PropTypes from 'prop-types'
import $ from 'jquery'

var cntToFind = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var max_round = 12
var score = 0;

var test_show = true;

export const setTimer = () => {
    test_show = true;
    setTimeout(
        ()=>set_test_show(),
      3000
    );
}
export const set_test_show = () => {
    test_show = false;
}
$(".tileCell").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
  });
const Tile = ({val, name, round, row, col, items, onClick, round_start, newUserGame, Reset}) => {
    var clicked = false;
    if(test_show==false)
    {
        for(var i=0; i<items.length; i++)
        {
            if(items[i].row===row && items[i].col===col)
            {
                clicked = true;
                break;
            }
        }
    }
    else
    {
        if(val == 1)
            clicked = true;
    }
    return(
        <div className="tileCell"
            onClick={
                ()=>{
                    if(clicked || test_show)
                        return;
                    score += (val*cntToFind[round-1]);
                    onClick(row, col)
                    if(round==max_round && (items.length+1)==cntToFind[round-1] && val==1)
                    {
                        alert('당신의 점수는 '+score+'입니다.')
                        newUserGame(name)
                        Reset(name)
                        score = 0
                        setTimer()
                        round_start(name, 1)
                    }
                    else if((items.length+1)==cntToFind[round-1] && val==1)
                    {
                        Reset(name)
                        setTimer()
                        round_start(name, round+1)
                    }    
                    if(val!==1){
                        alert('당신의 점수는 '+score+'입니다.')
                        newUserGame(name)
                        Reset(name)
                        setTimer()
                        score = 0
                        round_start(name, 1)
                    }
                }
            }
            style={{background: clicked ? 'rgb(255, 0, 0)': 'rgb(199, 245, 214)'}}
            >
                {val}
            </div>
    )
}

const TileRowShow = ({arr, row, name, round, items, test, toggleItem, round_start, newUserGame, Reset}) => {
    var j = 0
    var i = row
    test_show = test;
 //   const listItems = arr.map((val)=>
 //    <Tile val={val} row={i} col={j++} items={items} onClick={()=>toggleItem(name, round, i, j)}></Tile>);
    var listItems = []
    for(j = 0; j < arr.length; j++)
    {
        var val = arr[j]
        var item = <Tile val={val} name={name} round={round} row={i} col={j} items={items} round_start={round_start} newUserGame={name=>newUserGame(name)} Reset={name=>Reset(name)} onClick={(i, j)=>toggleItem(name, round, i, j)}></Tile>
        listItems.push(item)
    }
    return(
        <div className="tileRow">{listItems}</div>
    )
}

const getItems = (items, name, round) => {
    return items.filter(i => (i.name===name && i.round===round && i.row!=-1 && i.col!=-1))
}

const mapStateToProps = (state, ownProps) => ({
    items: getItems(state.items, ownProps.name, ownProps.round),
    arr: ownProps.arr,
    row: ownProps.row,
    name: ownProps.name,
    round: ownProps.round,
    test: ownProps.test
})

const mapDispatchToProps = (dispatch) => ({
    toggleItem: (name, round, row, col) => dispatch(toggleItem(name, round, row, col)),
    newUserGame: (name) => dispatch(newUserGame(name)),
    Reset: (name) => dispatch(Reset(name)),
    round_start: (name, round) => dispatch(Round(name, round))
})

const TileRow = connect(
    mapStateToProps,
    mapDispatchToProps
)(TileRowShow)

export default class TileMatrix extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: test_show}
    }
    componentDidMount() {
        setTimeout(()=>this.show_test(), 3000);
        setInterval(()=>this.updateShow(), 100);
    }
    show_test(){
        test_show = false;
//        this.setState({show: test_show});
    }
    updateShow(){
        this.setState({show: test_show});
    }
    render(){
        var i = 0;
        var name = this.props.name;
        var round = this.props.round;

        const listItems = this.props.matrix.map((array)=>
            <TileRow arr={array} row={i++} name={name} round={round} test={test_show}></TileRow>);
        return(
            <div className="tileMatrix">{listItems}</div>
        )
    }
}
