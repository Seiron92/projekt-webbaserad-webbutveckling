import React from 'react';
import './Assets/scss/main.css';
import './Assets/js/main';
import Header from './Assets/Components/headerComponent/header';
import Video from './Assets/Components/headerComponent/video';
import FirstSection from './Assets/Components/frontPageComponent/firstSection';
import SecondSection from './Assets/Components/frontPageComponent/secondSection';
import ThirdSection from './Assets/Components/frontPageComponent/thirdSection';
import FourthSection from './Assets/Components/frontPageComponent/fourthSection';
import Footer from './Assets/Components/footerComponent/footer';

function App() {
  return (
    <div className="App">
<Header />
<Video />
<FirstSection />
<ThirdSection />
<SecondSection />
<FourthSection />
<Footer />
    </div>
  );
}

export default App;
