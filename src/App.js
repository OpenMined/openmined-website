import bg_ball_orange from './img/bg_ball_orange.png';
import bg_ball_blue from './img/bg_ball_blue.png';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import logo_openmined from './img/logo_openmined.png';
import Header from './components/Header';
import Intro from './components/Intro';
import Community from './components/Community';
import GetInvolved from './components/GetInvolved';
import Partnerships from './components/Partnerships';
import Collaborations from './components/Collaborations';
import Careers from './components/Careers';
import SWE from './components/SWE';
import SWEForm from './components/SWEForm';

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${bg_ball_blue}), url(${bg_ball_orange})`,
          backgroundPosition: 'left 200px, right 400px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />
        <main>
          <Routes>
            <Route
              key="home"
              exact
              path="/"
              element={
                <>
                  <Intro />
                  <Community />
                  <GetInvolved />
                  <Partnerships />
                  <Collaborations />
                </>
              }
            />
            <Route
              key="careers"
              path="/careers"
              element={
                <>
                  <Careers />
                </>
              }
            />
            <Route
              key="swe"
              path="/careers/software-engineer"
              element={
                <>
                  <SWE />
                </>
              }
            />
            <Route
              key="swe"
              path="/careers/software-engineer-form"
              element={
                <>
                  <SWEForm />
                </>
              }
            />
          </Routes>
        </main>

        <footer
          id="footer"
          className="flex justify-between items-center p-3 border-t mt-12"
        >
          <img
            src={logo_openmined}
            alt="OpenMined"
            className="h-auto max-h-full my-auto"
          />
          <a
            target="_blank"
            rel="noopener"
            href="https://slack.openmined.org/"
            className="text-right ml-auto"
          >
            Join us on Slack
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
