import React, { Component } from 'react';
import logo from './logo.gif';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="nav justify-content-center">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menú</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Desayuno</a>
                <a class="dropdown-item" href="#">Otro</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Combos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Promociones</a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
