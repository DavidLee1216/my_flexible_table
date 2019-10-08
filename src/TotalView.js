import React from "react";
import GameView from './GameView' ;
import UserManagerView from './UserManagerView';
class TotalView extends React.Component{
    render(){
        return (
            <div className="totalView">
            <UserManagerView/>
            <GameView/>
            </div>
        )
     }
}

export default TotalView;