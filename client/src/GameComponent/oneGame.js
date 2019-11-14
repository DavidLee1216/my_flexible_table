import React from 'react'
import PropTypes from 'prop-types'
import TileMatrix from './TileMatrix'
import {addItem} from '../actions'
import {toggleItem} from '../actions'
import { connect } from 'react-redux'
import store from '../TotalView'
import {test_show} from './TileMatrix'

class OneGame extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        var round = this.props.round;
        var name = this.props.name;
        var matrix_array = this.props.matrix_array;
        return (
        //            <TileMatrix matrix={matrix_array} items={items} toggleTodo={(id)=>toggleItem(id)} />
                <dir>
                    <TileMatrix matrix={matrix_array} name={name} round={round}></TileMatrix>
                </dir>
                )
    }
}
export default OneGame;
