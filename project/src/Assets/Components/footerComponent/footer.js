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
        <footer>
<h2>Fooooot</h2>
</footer>
</div>
    )}}


export default Footer;
