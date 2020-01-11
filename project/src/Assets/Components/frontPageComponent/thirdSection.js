import React from 'react';
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';


function ThirdSection() {
  return (
    <div className="mainWrapper2">

      <div className="thirdSection">
        <ThirdSectionElement />
      </div>
    
    </div>
  );
}


class ThirdSectionElement extends React.Component {
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
     
     <div id="menu">
           <h2>Meny</h2>
          <div className="part" id="part1">
              <div id="frame">
                  <h3>Förrätter</h3><br></br>
                 <div className="item">
                     <p>Gravad och lättrökt lax från Fröya med bakat päron, crème fraiche, quinoa samt päronte</p>
                     <p>Halstrad pilgrimsmussla från Fröya med blomkålskräm, picklad majrova samt brynt smör</p>
                     <p>Halstrad färsk anklever med mandelkräm, picklade lingon, brioche samt rostad anksås med lingon</p>
                     <p>Råbiff på svenskt nötkött med picklad gulbeta, Västervikssenapskräm, rostade macadamianötter samt friterat vaktelägg</p>
                     <p>Rostad jordärtskockssoppa med kräm på Svedjans ost, bakad jordärtskocka samt hösttryffel</p>
                 </div>
                 <div className="price"><p>129kr</p><br></br>
                 <p>149kr</p><br></br>
                 <p>135kr</p><br></br>
                 <p>149kr</p><br></br>
                 <p>149kr</p><br></br>
                 </div>
              </div>
          </div>
          <div className="part" id="part2">   <div id="frame2">
          <h3>Huvudrätter</h3>
          <div className="item">
                     <p>Ugnsbakad marulk med jordärtskocka, krispig pancetta, grillad svartrot samt pikant sås på rostade tomater</p>
                     <p>Smörbakad gösfilé från Ängsö med Irländsk hummer, kräm på palsternacka, savoykål samt Champagnesås</p>
                     <p>Helstekt blodduva från Vendée med bakad morot samt duvsås med grönpeppar och apelsin</p>
                     <p>Stekt rådjurssadel med rotsellerikräm, svamp från Hällestad, saltbakad rotselleri samt viltsås</p>
                     <p>Pumpa och hasselnötsfylld ravioli med rostad kålkräm, endive, picklad pumpa samt smörad äppelsås</p>
                     <p>Stekt rådjurssadel med rotsellerikräm, svamp från Hällestad, saltbakad rotselleri samt viltsås</p>
                 </div>
                 <div className="price"><p>289kr</p><br></br>
                 <p>309kr</p><br></br>
                 <p>389kr</p><br></br>
                 <p>319kr</p><br></br>
                 <p>289kr</p><br></br>
                 <p>289kr</p><br></br>
                 </div>
             
          </div></div>
          
          <div className="part" id="part3">   <div id="frame3">
              <h3>Desserter</h3>
              <div className="item">
                     <p>Cheesecake med citronbavaroise, rostad kokos samt vinbärssorbet</p>
                     <p>Yoghurtmousse med citronglass, rostad maräng samt citruste med fänkål</p>
                     <p>Bakad Carameliachoklad med pistage, saltkaramellmousse, honungskrisp samt färskostglass</p>
                     <p>Calvadosflamberade äpplen med vaniljparfait, hasselnötspraline, kavringskrisp samt äppelsorbet</p>
                     <p>Yoghurtmousse med citronglass, rostad maräng samt citruste med fänkål</p>
                     <p>Bakad Carameliachoklad med pistage, saltkaramellmousse, honungskrisp samt färskostglass</p>
                   
                 </div>
                 <div className="price"><p>189kr</p><br></br>
                 <p>169kr</p><br></br>
                 <p>189kr</p><br></br>
                 <p>219kr</p><br></br>
                 <p>169kr</p><br></br>
                 <p>189kr</p><br></br>
                 </div>
              </div></div>
             
            </div>
      );
    }

  }
  
 

export default ThirdSection;
