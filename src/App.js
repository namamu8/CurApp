import './App.css';
import { Component } from 'react';
import Header from './Component/Header';
import HeaderContent from './Component/HeaderContent';
import Mid from './Component/Mid';
import { Route, Link } from "react-router-dom";

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <HeaderContent />
        <Route exact path="/" component={Mid}/>
        <Route exact path="/content" component={Mid}/>
      </div>
    );
  }
}

export default App;
