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
            duration : 2000
          })
        $.fn.moveIt = function(){
            var $window = $(window);
            var instances = [];
            
            $(this).each(function(){
              instances.push(new moveItItem($(this)));
            });
            
            window.addEventListener('scroll', function(){
              var scrollTop = $window.scrollTop();
              instances.forEach(function(inst){
                inst.update(scrollTop);
              });
            }, {passive: true});
          }
          
          var moveItItem = function(el){
            this.el = $(el);
            this.speed = parseInt(this.el.attr('data-scroll-speed'));
          };
          
          moveItItem.prototype.update = function(scrollTop){
            this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
          };
          
          // Initialization
          $(function(){
            $('[data-scroll-speed]').moveIt();
          });
    }

    render() {
      return (
     
     <div>
              <div className="fourthSection" >
         
           <div id="kontakt">
           <h2>Kontakt</h2>
           <p>Löksås ipsum tid sorgliga hans samma annat lax tre det, 
            helt trevnadens brunsås där ta fram enligt nu, om ingalunda blivit både stig bäckasiner stig 
            omfångsrik. Lax trevnadens när rännil faktor redan samtidigt olika när ännu, se stora det <br></br><br></br>
            kunde jäst sorgliga oss lax, hans kan kunde inom blev jäst från kanske. Hela dag björnbär 
            helt ta kunde att sitt sin tre, sitt träutensilierna för bra gör tiden är ordningens det, 
            trevnadens tre kom från se sin faktor verkligen.</p>
    <div id="cnt">
   
               <input type="text" placeholder="Namn" id="ename"></input><br></br>
              
               <input placeholder="Epost" type="text" id="eppost"></input><br></br>
              
               <input placeholder="Ämne" type="text" id="subject"></input><br></br>
         
               <textarea placeholder="Meddelande" id="message"></textarea><br></br>
               <button id="send">Skicka</button>
               </div>
           </div>
           <img id="platting" src={require('../../images/soppa.jpg')}alt="platting"/>
           </div>
           
</div>     
      );
    }

  }
  
 

export default FourthSection;
