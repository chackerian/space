import React, { Component } from 'react';

export default class Homepre extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <nav className="headerNav">
          <div className="wholeNav">
            <div className="leftNav">
              <ul className="headerSearch">
                  <li className="headerSearchRadiusLogo">
                      <a href="/" className="radiusLogo">
                      <span>SpaceTrades</span></a>
                  </li>
              </ul>
              <div className="searchBox">
                <input type="text" id="search" className="search" placeholder="Search" autofocus="True" /><i className="material-icons searchIcon">search</i>
              </div>
            </div>
            <div className="rightNav">
              <ul className="headerAuthPre headerAuth">
                  <li><a className="btn btn-primary" onClick={() => this.props.onChangeModal("on", "join")}>Join</a></li>
                  <li><a className="login" onClick={() => this.props.login()}>Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      )
    }
}
