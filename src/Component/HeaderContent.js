import { Component } from 'react';
import Content from './Content/Content';
import Transfer from './Content/Transfer';
import News from './Content/News';

import { Route, Link } from "react-router-dom";

class HeaderContent extends Component{
  render(){
    return(
      <div className="header-content">
          <div className="banner">
            <h3>Ứng dụng tiền tệ uy tín hàng đầu Việt Nam :v</h3>
          </div>
          <Route exact path="/" component={Content}/>
          <Route exact path="/content" component={Content}/>
          <Route exact path="/transfer" component={Transfer}/>
          <Route exact path="/news" component={News}/>
          
      </div>
    );
  }
}

export default HeaderContent;