import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    return(
      <header id="header" class="alt">
        <h1>Pocket Guide</h1>
        <nav id="nav">
          <ul>
            <li>Home</li>
            <li><a href="#">My Page</a></li>
            <li><a href="/tours">Planning</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}