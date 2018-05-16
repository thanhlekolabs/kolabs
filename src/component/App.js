import React, { Component } from 'react';
import Home from './home/home';
import About from './about/about';
import Working from './working/working';
import Skill from './skill/skill';
import Feedback from './feedback/feedback';
import Whychoose from './whychoose/whychoose';
import Team from './team/team';
import Career from './career/career';
import Contact from './contact/contact';
import Aside from './aside/aside'
const {Top,Header,Content} = Home
class App extends Component {
  render() {
    return (
      <div className="App">
        		<header className="header">
              <Top/>
              <Header/>
              <Content/>
            </header>
            <main className="main">
              <About/>
              <Working/>
              <Skill/>
              <Whychoose/>
              <Feedback/>
              <Team/>
              <Career/>
            </main>
            <footer className="footer">
              <Contact/>
            </footer>
            <Aside/>
      </div>
    );
  }
}
export default App;
