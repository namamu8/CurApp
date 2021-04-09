import { Component } from 'react';

class Mid extends Component{
  render(){
    return(
      <div className="mid">
          <div className="content-mid">
            <h4>Bảng giá ngoại tệ hôm nay</h4>
          
          <div className="curTable">
          <iframe frameBorder="0" width="100%" 
            height="250px"
            src="https://www.tygia.com/api.php?column=1&title=0&chart=1&gold=0&rate=1&ngoaite=usd,jpy,chf,eur,gbp,aud&expand=0&color=B4D0D0&titlecolor=333333&bgcolor=ffffff&upcolor=00aa00&downcolor=bb0000&textcolor=333333&nganhang=VIETCOM&fontsize=80&ngay=">
          </iframe>
          </div>
          <h4>Bảng giá vàng hôm nay</h4>
          </div>
          <div className="curTable">
            <iframe frameBorder="0" width="100%" 
            height="250px"
            src="https://www.tygia.com/api.php?cols=1&amp;title=0&amp;chart=0&amp;gold=1&amp;rate=0&amp;expand=0&amp;color=FFFFFF&amp;titlecolor=333333&amp;nganhang=VIETCOM&amp;fontsize=80&amp;change=1&amp;css=%23SJC_N_ng{display:%20table-row%20!important;}#amp=1">
            </iframe>
          </div>
          
      </div>
    );
  }
}

export default Mid;