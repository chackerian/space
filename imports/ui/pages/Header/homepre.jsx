import React, { Component } from 'react';
import { connect } from 'react-redux';

class Homepre extends Component {

  constructor(props) {
    super(props)
  }

  locater = () => {
    setTimeout(function(){
      $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
        var options = {
          id: Meteor.user()._id,
          location: JSON.stringify(data, null, 2)
        }
        Meteor.call('updateUserCreation', options)
      });
    }, 3000);
  }

  login = () => {
    Meteor.loginWithFacebook({}, function(err, result) {
      if (err == undefined) {
        locater()
      } else {
        console.log("failed to login")
      }
    })
  }

  render() {
    return (
        <nav className="headerNav">
          <div className="wholeNav">
            <div className="leftNav">
              <ul className="headerSearch">
                <li className="headerSearchRadiusLogo">
                    <a href="/" className="radiusLogo">
                      <span>SpaceTrades</span>
                    </a>
                </li>
              </ul>
              <div className="searchBox">
                <input type="text" id="search" className="search" placeholder="Search" autoFocus="True" /><i className="material-icons searchIcon">search</i>
              </div>
            </div>
            <div className="rightNav">
              <ul className="headerAuthPre headerAuth">
                  <li><a className="btn btn-primary" onClick={this.props.join}>Join</a></li>
                  <li><a className="login" onClick={this.login}>Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
      join: () => dispatch({type: 'JOIN'})
  };
};

export default connect(null, mapDispatchToProps)(Homepre)
