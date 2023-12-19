import bg_ball_orange from './img/bg_ball_orange.png';
import bg_ball_blue from './img/bg_ball_blue.png';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './routes/Home';
import Careers from './routes/Careers';
import SWE from './routes/SWE';
import SWEForm from './routes/SWEForm';

import DSEU from './routes/DSEU';
import DSEUForm from './routes/DSEUForm';

import DD from './routes/DD';
import DDForm from './routes/DDForm';

import RS from './routes/RS';
import RSForm from './routes/RSForm';

import TPM from './routes/TPM';
import TPMForm from './routes/TPMForm';

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
              key="sweform"
              path="/careers/software-engineer-form"
              element={<SWEForm />}
            />
            <Route
              key="dseu"
              path="/careers/data-scientist-eu"
              element={<DSEU />}
            />
            <Route
              key="dseuform"
              path="/careers/data-scientist-eu-form"
              element={<DSEUForm />}
            />
            <Route
              key="dd"
              path="/careers/director-of-development"
              element={<DD />}
            />
            <Route
              key="ddform"
              path="/careers/director-of-development-form"
              element={<DDForm />}
            />
            <Route
              key="rs"
              path="/careers/research-scientist"
              element={<RS />}
            />
            <Route
              key="rsform"
              path="/careers/research-scientist-form"
              element={<RSForm />}
            />
            <Route
              key="tpm"
              path="/careers/technical-product-manager"
              element={<TPM />}
            />
            <Route
              key="tpmform"
              path="/careers/technical-product-manager-form"
              element={<TPMForm />}
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
