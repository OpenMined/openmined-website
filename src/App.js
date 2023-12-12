import bg_ball_orange from './img/bg_ball_orange.png';
import bg_ball_blue from './img/bg_ball_blue.png';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './routes/Home';
import SWE from './routes/SWE';
import Careers from './routes/Careers';
import SWEForm from './routes/SWEForm';

import logo_openmined from './img/logo_openmined.png';

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${bg_ball_blue}), url(${bg_ball_orange})`,
          backgroundPosition: 'left 200px, right 400px',
          backgroundRepeat: 'no-repeat',
        }}
        className="min-h-screen flex flex-col"
      >
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route key="home" exact path="/" element={<Home />} />
            <Route key="careers" path="/careers" element={<Careers />} />
            <Route
              key="swe"
              path="/careers/software-engineer"
              element={<SWE />}
            />
            <Route
              key="swe"
              path="/careers/software-engineer-form"
              element={<SWEForm />}
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
