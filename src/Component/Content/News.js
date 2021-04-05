import { Component } from 'react';
import {Link} from 'react-router-dom';

class News extends Component{
  render(){
    return(
      <div className="par-news">
          <div className="title">
              <div className="convert">
                <Link to="/content">
                  <i className="fas fa-exchange-alt"></i>
                  <span> Converter</span>
                </Link>
              </div>
              <div className="transfer">
                <Link to="/transfer">
                  <i className="far fa-money-bill-alt"></i>
                  <span> Transfer</span>
                </Link>
              </div>
              <div className="news action">
                <Link to="/news">
                  <i className="far fa-newspaper"></i>
                  <span> News</span>
                </Link>
              </div>
          </div>
          <div className="news-content">
            <div className="news-menu">
              <div className="news-items">
                <div className="news-items-img"><img src="img/news1.jpg" alt=""/></div>
                <div className="news-items-text">
                  <b>Thu nhập dịch vụ tăng trưởng cao, HDBank lãi hơn 5.800 tỉ đồng sau kiểm toán</b>
                  <br/><br/><span>4 giờ trước</span>
                </div>
              </div>
              <div className="news-items">
                <div className="news-items-img"><img src="img/news1.jpg" alt=""/></div>
                <div className="news-items-text">
                  <b>Thu nhập dịch vụ tăng trưởng cao, HDBank lãi hơn 5.800 tỉ đồng sau kiểm toán</b>
                  <br/><br/><span>4 giờ trước</span>
                </div>
              </div>
              <div className="news-items">
                <div className="news-items-img"><img src="img/news1.jpg" alt=""/></div>
                <div className="news-items-text">
                  <b>Thu nhập dịch vụ tăng trưởng cao, HDBank lãi hơn 5.800 tỉ đồng sau kiểm toán</b>
                  <br/><br/><span>4 giờ trước</span>
                </div>
              </div>
            </div>
            <div className="news-display">
              <div className="news-display-img"><img src="img/news1.jpg" alt=""/></div>
              <b>Thu nhập dịch vụ tăng trưởng cao, HDBank lãi hơn 5.800 tỉ đồng sau kiểm toán</b>
                  <br/><span>4 giờ trước</span>
            </div>
          </div>
      </div>
    );
  }
}

export default News;