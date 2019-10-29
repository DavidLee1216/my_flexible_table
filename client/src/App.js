import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import TotalView from './TotalView';
import styled from 'styled-components';

const AppWrapper = styled.div`
 display: flex;
// justify-content: center;
// align-items: center;
 height: 100vh;
 background-color: #282c34;
`

const Header = styled.header`
  padding: 20px;
  font-family: Helvetica;
`

const MainMessage = styled.p`
  font-size: 50px;
  color: white;
  :hover {
    color:  red;
  }
`

const Link = styled.a`
  color: #61dafb;
  text-decoration: none;
  
  :hover {
    color: white;
  }
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>
          <MainMessage>
            MY SAMPLE REACT APP!
          </MainMessage>
          <TotalView/>
         </Header>
      </AppWrapper>
    );
  }
}

export default App;
