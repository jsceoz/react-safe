import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Friend from './components/friend/FriendPageComponent';
import { Router, Route, hashHistory } from 'react-router';
import Message from './components/message/MessagePageComponent';
import Mine from  './components/mine/MinePageComponent';
import Header from './components/public/HeaderComponent';
import Footer from './components/public/FooterComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tab from './components/map/MapTabComponent';
import LoginBox from  './components/loginpage/LoginBoxComponent';
import Chat from './components/chat/ChatPageComponent';

// Render the main component into the dom

ReactDOM.render((
  <MuiThemeProvider>
    <div>
        <Router history={hashHistory}>

        <Route path="/" component={LoginBox}/>
        <Route path="/map" component={App}/>
        <Route path="/friend" component={Friend}/>
        <Route path="/message" component={Message}/>
        <Route path="/mine" component={Mine}/>
        <Route path="/chat" component={Chat}/>
        <Route path="/ttt" component={Tab}/>

        </Router>
    </div>
  </MuiThemeProvider>
), document.getElementById('app'))

//ReactDOM.render(<App />, document.getElementById('app'));
