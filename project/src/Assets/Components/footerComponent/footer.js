import React from 'react';
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  return (
<FooterElement />
  );
}


class FooterElement extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  
  }

  render() {
    return (
      <div>
        <footer>
<div id="footerContainer">
  <div className="foot">
  <a href="#"><img src={require('../../images/logo.png')} alt="Logotyp"></img></a>
  </div>
  <div className="foot">
<h2>Hitta till oss</h2>
<ul>
<li>Storgatan 23</li>
<li>33 330 Storstaden</li>
<li><i className="fas fa-phone"></i> 0777-12345</li>
</ul>
  </div>
  <div className="foot">
<h2>Öppettider</h2>
<ul>
<li>Måndag-Söndag: 14:00 - 00:00 </li>

</ul>
  </div>
  <div id="bottomFoot">
  <p>	© Rebecca Seiron &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;A <a href="https://webuals.com/">Webuals</a> production</p>
  </div>
</div>
</footer>
</div>
    )}}


export default Footer;
