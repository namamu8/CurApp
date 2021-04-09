import './App.css';
import { Component } from 'react';
import Header from './Component/Header';
import HeaderContent from './Component/HeaderContent';
import Mid from './Component/Mid';
import { Route } from "react-router-dom";
import NewsMid from './Component/NewsMid';
import TransferMid from './Component/TransferMid';
import Footer from './Component/Footer';

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <HeaderContent />
        <Route exact path="/" component={Mid}/>
        <Route exact path="/content" component={Mid}/>
        <Route exact path="/news" component={NewsMid}/>
        <Route exact path="/transfer" component={TransferMid}/>
        <Footer />
      </div>
    );
  }
}

export default App;
