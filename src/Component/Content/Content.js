import { Component } from 'react';
import {Link} from 'react-router-dom';

class Content extends Component{
  constructor(props){
    super(props);
    this.state = {
      amount: ''
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    });
  }
  render(){
    var {amount} = this.state;
    return(
      <div className="content">
          <div className="title">
              <div className="convert action">
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
              <div className="news">
                <Link to="/news">
                  <i className="far fa-newspaper"></i>
                  <span> News</span>
                </Link>
              </div>

          </div>
          <div className="converter">
              <form className="form-group">
                  <div className="form">
                      <div className="label">
                        <div id="label">Amount</div>
                        <div id="label">From</div>
                        <div id="label">To</div>
                      </div>

                      <div className="in">
                        <div id="in" className="amount">
                            <input type="decimal" autoComplete="off"
                            placeholder="$ 1.0"
                            className="form-control" name="amount"
                             value={amount} onChange={this.onChange}/>
                        </div>
                        <div id="in" className="from">
                                <select className="form-control">
                                    <option>USD - US Dollar</option>
                                    <option>EUR</option>
                                    <option>GBP</option>
                                </select>
                        </div>
                        <div id="in" className="to">
                                <select className="form-control">
                                    <option>VND - Vietnamese dong</option>
                                    <option>EUR</option>
                                    <option>GBP</option>
                                </select>
                        </div>
                      </div>
                      <button type="button" className="btn btn-primary">Convert</button>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}

export default Content;