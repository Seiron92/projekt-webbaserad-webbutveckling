import React from 'react';


function Header() {
  return (
      <div>
        <Background />
      </div>
    );
  }

  
  const Background = () => {
    return (
      <div>
<div id="headerImage" className="zoom">
<img id="test" src={require('../../images/newHeader.jpg')} alt="Header"></img>
</div>
    <div id="mainLogo" data-aos="fade-right">
    <h1>Välkommen</h1>
    <h2>Löksås ipsum tid sorgliga hans samma annat lax tre det, 
     helt trevnadens brunsås där ta fram enligt nu, om ingalunda blivit både stig bäckasiner stig 
     omfångsrik. Lax trevnadens när rännil faktor redan samtidigt olika när ännu, se stora det </h2>
    </div>
    </div>

  )
  }
  
  export default Header;