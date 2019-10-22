import React, { Component } from 'react';
import Header from './Components/header/header';
import About from './Components/about/about';
import Resume from './Components/resume/resume';
import Portfolio from './Components/portfolio/portfolio';
import Testimonials from './Components/testimonial/testimonial';
import ContactMe from './Components/contactMe/contactMe';
import Footer from "./Components/footer/footer";
import resumeData from "./Data/resumeData";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData = {resumeData}/>
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactMe />
        <Footer />
       
      </div>
    );
  }
}
export default App;
