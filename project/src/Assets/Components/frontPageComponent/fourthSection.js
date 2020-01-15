import React from 'react';
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';


function FourthSection() {
  return (
    <div className="mainWrapper4">
        <FourthSectionElement />
    </div>
  );
}


class FourthSectionElement extends React.Component {
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
     
     <div>
              <div className="fourthSection" >
         
           <div data-aos="fade-down" id="kontakt">
           <h2>Kontakt</h2>
           <p>Löksås ipsum tid sorgliga hans samma annat lax tre det, 
            helt trevnadens brunsås där ta fram enligt nu, om ingalunda blivit både stig bäckasiner stig 
            omfångsrik. Lax trevnadens när rännil faktor redan samtidigt olika när ännu, se stora det <br></br><br></br>
            kunde jäst sorgliga oss lax, hans kan kunde inom blev jäst från kanske. Hela dag björnbär 
            helt ta kunde att sitt sin tre, sitt träutensilierna för bra gör tiden är ordningens det, 
            trevnadens tre kom från se sin faktor verkligen.</p>
    <div data-aos="fade-right" id="cnt">
   
               <input type="text" placeholder="Namn" id="ename"></input><br></br>
              
               <input placeholder="Epost" type="text" id="eppost"></input><br></br>
              
               <input placeholder="Ämne" type="text" id="subject"></input><br></br>
         
               <textarea placeholder="Meddelande" id="message"></textarea><br></br>
               <button id="send">Skicka</button>
               </div>
           </div>
           <img data-aos="fade-up" id="platting" src={require('../../images/soppa.jpg')}alt="platting"/>
           </div>
           
</div>     
      );
    }

  }
  
 

export default FourthSection;
