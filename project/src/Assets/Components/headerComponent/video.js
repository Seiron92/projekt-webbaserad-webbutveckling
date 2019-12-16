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
      <video autoPlay loop muted>
  <source src="videos/steak.mp4" type="video/mp4"/>
  </video>
  )
  }
  
  export default Header;