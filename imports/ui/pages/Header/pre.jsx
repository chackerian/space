import React, { Component } from 'react';

export default class Pre extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="headerNav">
          <div className="leftNav">
              <ul className="headerSearch">
                  <li className="headerSearchRadiusLogo"><a href="/" id="radiusLogo">
                  <span>SpaceTrades</span></a>
                  </li>
              </ul>
              <input type="text" id="search" className="search" placeholder="Name, Category" />
          </div>

          <div className="rightNav">
              <ul className="headerCat">
                  <li className="headerDropDownShow navGeneral clickDropper headerDropApparel">
                      <span>Apparel</span>
                      <ul className="headerDropDownNav">
                          <a href="/search?q=Bags"><li>Bags</li></a>
                          <a href="/search?q=Belts"><li>Belts</li></a>
                          <a href="/search?q=Hoodies"><li>Hoodies</li></a>
                          <a href="/search?q=Jackets"><li>Jackets</li></a>
                          <a href="/search?q=Jeans"><li>Jeans</li></a>
                          <a href="/search?q=Shorts"><li>Shorts</li></a>
                          <a href="/search?q=Tees"><li>Tees</li></a>
                          <a href="/search?q=Other"><li>Other</li></a>
                      </ul>
                  </li>

                  <li className="headerDropDownShow navGeneral clickDropper headerDropElectronics">
                      <span>Electronics</span>
                      <ul className="headerDropDownNav">
                          <a href="/search?q=Phones"><li>Phones</li></a>
                          <a href="/search?q=Tablets"><li>Tablets</li></a>
                          <a href="/search?q=Computers"><li>Computers</li></a>
                          <a href="/search?q=Games"><li>Games</li></a>
                          <a href="/search?q=Headphones"><li>Headphones</li></a>
                          <a href="/search?q=Other"><li>Other</li></a>
                      </ul>
                  </li>
                  <li className="headerDropDownShow navGeneral clickDropper headerDropShoes">
                      <span>Shoes</span>
                      <ul className="headerDropDownNav">
                          <a href="/search?q=Asics"><li>Asics</li></a>
                          <a href="/search?q=Addidas"><li>Addidas</li></a>
                          <a href="/search?q=Converse"><li>Converse</li></a>
                          <a href="/search?q=Nike"><li>Nike</li></a>
                          <a href="/search?q=Jordan"><li>Jordan</li></a>
                      </ul>
                  </li>
                  <li className="headerNotDrop"><a href="#">Other</a></li>
                  <li className="headerNotDrop headerHelp"><a href="/help">Help</a></li>
              </ul>
              <ul className="headerAuth">
                  <li><a className="modJoinTrigger btn btn-primary">Join</a></li>
                  <li><a className="login">Login</a></li>
              </ul>
          </div>
      </nav>
      )
    }

}
