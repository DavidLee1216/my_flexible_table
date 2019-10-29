import React from "react";
import GameView from './GameView' ;
import UserManagerView from './UserManagerView';
class TotalView extends React.Component{
    username = "";
    constructor(props){
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.state = {username:""};
    }
    handleChangeName = (name) => {
        this.username = name;
        this.setState({username:name});
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