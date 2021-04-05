import { Component } from 'react';

class Header extends Component{
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".scroll").className = "scroll nav-action";
    } else {
      document.querySelector(".scroll").className = "scroll";
    }
  };
  render(){
    
    return(
      <div className="scroll">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand logo" href="/"><i className="far fa-snowflake" /> <span>CrF</span> </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Application</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News Feed</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button type="button" className="btn btn-outline-light sign-in">Sign In</button>
              <button className="btn btn-primary sign-up" type="submit">Sign Up</button>
            </form>
          </div>
        </nav>
      </div>
      
    );
  }
}

export default Header;
