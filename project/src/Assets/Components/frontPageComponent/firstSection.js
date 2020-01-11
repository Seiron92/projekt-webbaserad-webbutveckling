import React from 'react';
import $ from 'jquery';


function FirstSection() {
  return (
    <div className="mainWrapper">
  
      <div className="firstSection">
        <FirstSectionElement />
      </div>
      <FirstSectionImage />
    </div>
  );
}


class FirstSectionElement extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
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
       <div className="firstSection">
        <div className="firstText">
         <h1>Om oss</h1>
            <p>Löksås ipsum tid sorgliga hans samma annat lax tre det, 
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
  
 

class FirstSectionImage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
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

         <div id="mainLogo">
           <h1>Välkommen</h1>
           <h2>Löksås ipsum tid sorgliga hans samma annat lax tre det, 
            helt trevnadens brunsås där ta fram enligt nu, om ingalunda blivit både stig bäckasiner stig 
            omfångsrik. Lax trevnadens när rännil faktor redan samtidigt olika när ännu, se stora det </h2>
           </div>

   <div id="boka">
             <img id="mat" src={require('../../images/kitchenGold.png')}  alt="sallad"/>
        </div>
  </div>
    );
  }

}




export default FirstSection;
