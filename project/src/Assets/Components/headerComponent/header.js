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
    var test = document.querySelector('.navigation--active');

    $(test).on('click',test,function(){
      hamburger.classList.remove('hamburger--active');
      nav.classList.remove('navigation--active');
  });
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
        <li className="navigation__item"><a href="#about">Om oss</a></li>
        <li className="navigation__item"><a href="#menu">Menu</a></li>
        <li className="navigation__item "><a id="bokbord" href="#scrollTo">Boka bord</a></li>
        <li className="navigation__item "><p id="dinaBokningar">Dina bokningar</p></li>
        <li className="navigation__item"><a href="#kontakt">Kontakt</a></li>
      </ul>
    </div>
  )
}
const Logo = () => {
  return (
    <div id="logo">
<a href="#"><img src={require('../../images/logo.png')} alt="Logotyp"></img></a>
</div>
  )
}


export default Header;
