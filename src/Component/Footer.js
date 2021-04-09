import { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <div className="footer-content">
          <div className="infomation">
            <span className="info-til">Infomation</span><br/><br/>
            <span className="info-cont">Email: namamu6@gmail.com</span><br/>
            <span className="info-cont">Phone: 012345678</span><br/>
            <span className="info-cont">Adress: Ha Dong - Ha Noi</span>
          </div>
          <div className="service">
              <span className="info-til">Service</span><br/><br/>
              <span className="info-cont">Currency Exchange</span><br/>
              <span className="info-cont">Transfer</span><br/>
              <span className="info-cont">News</span>
          </div>
          <div className="social">
              <span className="info-til">Our Social</span><br/><br/>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-instagram-square"></i>
          </div>
          <p className="last">© 2021.namamu6.CurrencyApp</p>
        </div>
      </div>
    );
  }
}

export default Footer;