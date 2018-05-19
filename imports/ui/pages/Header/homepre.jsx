import React, { Component } from 'react';
import { connect } from 'react-redux';

class Homepre extends Component {

  login = () => {
    Meteor.loginWithFacebook({
      requestPermissions: ['user_friends', 'public_profile', 'email']
    }, function(err, result) {
      if (err == undefined) {
        setTimeout(function(){
          $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
            var options = {
              id: Meteor.user()._id,
              location: JSON.stringify(data, null, 2)
            }
            Meteor.call('updateUserCreation', options)
          });
        }, 5000);
      }
    })
  }

  componentDidMount() {
    $(".search").keypress(function(e) {
      if (e.key == "Enter") {
        var search = $(".search").val();
        FlowRouter.go("/search?q="+search);
      }
    });
  }

  render() {
    return (
        <nav className="headerNav">
          <div className="wholeNav">
            <div className="leftNav">
              <div className="iconLogo">
                <a href="/" className="radiusLogo">
                  <svg class='logo' xmlns="http://www.w3.org/2000/svg" width="100" height="28">
                    <text class="cls-1" x="0" y="50">SpaceTrades</text>
                  </svg>
                </a>
              </div>
              <div className="searchBox">
                <input type="text" className="search" placeholder="Search" autoFocus="True" /> <i className="material-icons searchIcon">search</i>
              </div>
            </div>
            <div className="rightNav">
              <ul className="headerAuth">
                  <li><a href="#" onClick={this.props.join}>Login</a></li>
              </ul>
              <ul className="headerAuth">
                  <li><a href="#" onClick={this.props.join}>Sign Up</a></li>
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
