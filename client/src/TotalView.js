import React from "react";
import GameView from './GameView' ;
import UserManagerView from './UserManagerView';
import $ from 'jquery'
import axios from 'axios';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todos from './actions/reducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

export const store = createStore(todos, devToolsEnhancer())//

class TotalView extends React.Component{
    username = "";
    constructor(props){
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.state = {username:""};
    }
    handleChangeName = (name) => {
        this.username = name;
/*        axios.get('/api/get', {
            params:{name:name}
          })
          .then( response => { this.setState({username:response.data.result}); } ) // SUCCESS
          .catch( response => { console.log(response); } ); // ERROR
*/
          axios.post('/api/post', {
            name: name
          })
          .then( response => { this.setState({username:response.data.result})} ) // SUCCESS
          .catch( response => { console.log(response); } ); // ERROR
     
    }
    render(){
        return (
            <div className="totalView">
            <Provider store={store}>
            <UserManagerView username={this.username} changeNameHandler={this.handleChangeName}/>
                <GameView username={this.state.username}/>
            </Provider>
            </div>
        )
     }
}

export default TotalView;