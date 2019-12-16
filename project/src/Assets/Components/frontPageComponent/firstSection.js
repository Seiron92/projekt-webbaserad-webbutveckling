import React from 'react';
import $ from 'jquery';


function FirstSection() {
  return (
    <div className="mainWrapper">
      <FirstSectionImage />
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
        <div className="firstText" data-scroll-speed="0">
         
            <p>Löksås ipsum tid sorgliga hans samma annat lax tre det, 
            helt trevnadens brunsås där ta fram enligt nu, om ingalunda blivit både stig bäckasiner stig 
            omfångsrik. Lax trevnadens när rännil faktor redan samtidigt olika när ännu, se stora det 
            kunde jäst sorgliga oss lax, hans kan kunde inom blev jäst från kanske. Hela dag björnbär 
            helt ta kunde att sitt sin tre, sitt träutensilierna för bra gör tiden är ordningens det, 
            trevnadens tre kom från se sin faktor verkligen.</p>
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
             <img src={require('../../images/food.png')} id="sallad" data-scroll-speed="-2" alt="sallad"/>
          </div>
    );
  }

}




export default FirstSection;
