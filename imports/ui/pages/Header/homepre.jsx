import React, { Component } from 'react';

export default class Homepre extends Component {

  constructor(props) {
    super(props)
    this.state = {status: 'dance'}
  }

  render() {
    return (
        <nav className="headerNav">
          <div className="leftNav">
              <ul className="headerSearch">
                  <li className="headerSearchRadiusLogo">
                      <a href="/" id="radiusLogo">
                      <span>SpaceTrades</span></a>
                  </li>
              </ul>
              <div className="searchBox">
                <i className="material-icons searchIcon">search</i><input type="text" id="search" className="search" placeholder="Name, Category" />
              </div>
          </div>
          <div className="rightNav">
              <ul className="headerAuth">
                  <li><a className="btn btn-primary" onClick={() => this.props.onChangeModal("on", "join")}>Join</a></li>
                  <li><a className="login" onClick={() => this.props.login()}>Login</a></li>
              </ul>
          </div>
        </nav>
      )
    }
}
