import React from 'react';
import './Assets/scss/main.css';
import './Assets/js/main';
import Header from './Assets/Components/headerComponent/header';
import Video from './Assets/Components/headerComponent/video';
import FirstSection from './Assets/Components/frontPageComponent/firstSection';
import Footer from './Assets/Components/footerComponent/footer';
//import logo from './logo.svg';



function App() {
  return (
    <div className="App">



<Header />
<Video />
<FirstSection />
<Footer />


    </div>
  );
}


export default App;
