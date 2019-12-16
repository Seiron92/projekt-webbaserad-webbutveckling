import React from 'react';
import $ from 'jquery';


function Header() {
  return (
    <div id="header-wrapper">
      <div id="header">
        <Logo />
        <Button />
        <Navigation />
        <ChangeBkgColor />
      </div>
    </div>
  );
}

class ChangeBkgColor extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isTop: true,

  };

  componentDidMount() {

    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        const menu = document.querySelector('#header-wrapper');
        menu.classList.toggle('header-wrapper--active');
        this.setState({ isTop })
      }
    })
  }

  render() {
    return (

      <div
        style={{
          height: "100%",
          width: "100%",

        }}
      />

    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
  }

  render() {

    return (
      <button className="hamburger" onClick={this.handleClick}>
        <span className="hamburger__box">
          <span className="hamburger__inner"></span>
        </span>
      </button>
    );
  }
}


const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item"><a href="">Hem</a></li>
        <li className="navigation__item"><a href="">Menu</a></li>
        <li className="navigation__item"><a href="">Boka bord</a></li>
        <li className="navigation__item"><a href="">Kontakt</a></li>
      </ul>
    </div>
  )
}
const Logo = () => {
  return (

    <img src="#" alt="logo"></img>

  )
}


export default Header;
