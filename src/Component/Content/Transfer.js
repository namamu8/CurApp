import { Component } from 'react';
import {Link} from 'react-router-dom';

class Transfer extends Component{
  render(){
    return(
      <div className="par-transfer">
          <div className="title">
              <div className="convert">
                <Link to="/content">
                  <i className="fas fa-exchange-alt"></i>
                  <span> Converter</span>
                </Link>
              </div>
              <div className="transfer action">
                <Link to="/transfer">
                  <i className="far fa-money-bill-alt"></i>
                  <span> Transfer</span>
                </Link>
              </div>
              <div className="news">
                <Link to="/news">
                  <i className="far fa-newspaper"></i>
                  <span> News</span>
                </Link>
              </div>

          </div>
          <div className="transfer-contain">
            <div className="introduce-about-transfer">
              <h4>Dịch vụ chuyển tiền uy tín hàng đầu</h4>
              <div className="icon">
                <i className="fas fa-arrow-circle-right"></i>
              </div>
            </div>
            <div className="list-select-transfer">
              <h6><i className="far fa-check-circle"></i> Chấp nhận nhiều phương thức thanh toán</h6>
              <h6><i className="far fa-check-circle"></i> Tiền đến ngay trong ngày</h6>
              <h6><i className="far fa-check-circle"></i> Giao dịch minh bạch</h6>
              <h6><i className="far fa-check-circle"></i> Phí giao dịch thấp chỉ với 0,1%</h6>
              <div className="pttt">
                <i className="fab fa-cc-visa"></i>
                <i className="fas fa-university"></i>
                <i className="fas fa-plane"></i>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Transfer;