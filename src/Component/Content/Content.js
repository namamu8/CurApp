import { Component } from 'react';
import {Link} from 'react-router-dom';

class Content extends Component{
  constructor(props){
    super(props);
    this.state = {
      amount: 1,
      a: {},
      from: 'USD',
      to: 'VND'
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
  onChangeFrom = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var to = this.state.to;
    this.setState({
      from : value
    });
    this.httpGet(value,to);
  }
  onChangeTo = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var from = this.state.from;
    this.setState({
      to : value
    });
    this.httpGet(from,value);
  }
  async componentDidMount() { 
    await fetch('https://free.currconv.com/api/v7/convert?q=USD_VND&compact=ultra&apiKey=b4c360ee037050a09fdc') 
    .then(res => res.json()) 
    .then((data) => { this.setState({ a: data }) }) 
    .catch(console.log)
  }

  httpGet = (from,to) =>
  {
    fetch('https://free.currconv.com/api/v7/convert?q='+from+'_'+to+'&compact=ultra&apiKey=b4c360ee037050a09fdc') 
      .then(response => response.json())
      .then((responseJson) => { this.setState({ a: responseJson }) }) 
      .catch(console.log)
  }

  ex = () =>{
    let to = this.state.to;
    let from = this.state.from;
    let str = from+"_"+to;
    let amount = this.state.amount;
    let a = this.state.a[str];
    let b = a*amount;
    document.getElementsByClassName("s")[0].innerHTML=amount+" "+from+" -> "+b.toLocaleString()+" "+to;
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
                                <select className="form-control" onChange={this.onChangeFrom}>
                                    <option value="USD">USD - US Dollar</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="INR">INR</option>
                                    <option value="CNY">CNY</option>
                                    <option value="COP">COP</option>
                                    <option value="COU">COU</option>
                                    <option value="EGP">EGP</option>
                                    <option value="ETB">ETB</option>
                                    <option value="JPY">JPY</option>
                                    <option value="CAD">CAD</option>
                                    <option value="SGD">SGD</option>
                                    <option value="CHF">CHF</option>
                                    <option value="MYR">MYR</option>
                                </select>
                        </div>
                        <div id="in" className="to">
                                <select className="form-control" onChange={this.onChangeTo}>
                                    <option value="VND">VND - Vietnamese dong</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="INR">INR</option>
                                    <option value="CNY">CNY</option>
                                    <option value="COP">COP</option>
                                    <option value="COU">COU</option>
                                    <option value="EGP">EGP</option>
                                    <option value="ETB">ETB</option>
                                    <option value="JPY">JPY</option>
                                    <option value="CAD">CAD</option>
                                    <option value="SGD">SGD</option>
                                    <option value="CHF">CHF</option>
                                    <option value="MYR">MYR</option>
                                </select>
                        </div>
                      </div>
                      <button type="button" onClick={this.ex} className="btn btn-primary">Convert</button>
                      <div><span className="s"></span></div>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}

export default Content;