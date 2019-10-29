import React from "react";
import GameView from './GameView' ;
import UserManagerView from './UserManagerView';
import $ from 'jquery'
import axios from 'axios';

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
            <UserManagerView username={this.username} changeNameHandler={this.handleChangeName}/>
            <GameView username={this.state.username}/>
            </div>
        )
     }
}

export default TotalView;