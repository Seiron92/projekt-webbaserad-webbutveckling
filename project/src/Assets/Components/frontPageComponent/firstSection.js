import React from 'react';
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';


function FirstSection() {
  return (
    <div className="mainWrapper">
      <div className="firstSection">
        <FirstSectionElement />
      </div>
    </div>
  );
}


class FirstSectionElement extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      AOS.init({
        duration: 3000
      }) 
    }

    render() {
      return (
       
     <div id="about">
       <div className="firstSection">
       <img data-aos="fade-right" id="mat" src={require('../../images/kitchenGold.png')}  alt="sallad"/>
        <div className="firstText">

         <h1 data-aos="fade-down">Om oss</h1>
            <p data-aos="fade-up">Löksås ipsum tid sorgliga hans samma annat lax tre det, 
            helt trevnadens brunsås där ta fram enligt nu, om ingalunda blivit både stig bäckasiner stig 
            omfångsrik. Lax trevnadens när rännil faktor redan samtidigt olika när ännu, se stora det <br></br><br></br>
            kunde jäst sorgliga oss lax, hans kan kunde inom blev jäst från kanske. Hela dag björnbär 
            helt ta kunde att sitt sin tre, sitt träutensilierna för bra gör tiden är ordningens det, 
            trevnadens tre kom från se sin faktor verkligen.</p>
            </div>
            </div>
            </div>
      );
    }

  }
  





export default FirstSection;
