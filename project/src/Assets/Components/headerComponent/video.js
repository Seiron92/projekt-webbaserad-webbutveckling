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
<div id="headerImage" className="zoom">
<img id="test" src={require('../../images/newHeader.jpg')} alt="Header"></img>
</div>

  )
  }
  
  export default Header;