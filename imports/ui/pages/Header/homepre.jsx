import React, { Component } from 'react';
import { store } from '../../layouts/body/layouts.jsx';
import { connect } from 'react-redux';

class Homepre extends Component {

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
                <input type="text" id="search" className="search" placeholder="Search" autoFocus="True" /><i className="material-icons searchIcon">search</i>
              </div>
            </div>
            <div className="rightNav">
              <ul className="headerAuthPre headerAuth">
                  <li><a className="btn btn-primary" onClick={() => store.dispatch({ type: 'JOIN'})}>Join</a></li>
                  <li><a className="login" onClick={() => store.dispatch({ type: 'LOGIN'})}>Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      )
    }
}

export default connect()(Homepre)
