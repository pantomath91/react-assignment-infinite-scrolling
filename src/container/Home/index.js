import React, { Component } from "react";
import Login from "../../components/Login";
import Header from "../../layout/Header";
import ImagesScroll from '../../ImagesScroll/ImagesScroll';
import { connect } from "react-redux";

class Home extends Component {  

  render() {
    const loginprops = this.props.loginReducer;
    return (
      <React.Fragment>
        { (!loginprops.login) &&
            <Login />
        }
         
        { (loginprops.login) &&
        
            <React.Fragment>
              <Header />
              <ImagesScroll/>
            </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginReducer: state.loginReducer
  };
};

export default connect(mapStateToProps)(Home);
