import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Careers from './routes/Careers';
import SWE from './routes/SWE';
import DSEU from './routes/DSEU';
// import TPM from './routes/TPM';
import GI from './routes/GI';
// import TPMForm from './routes/TPMForm';
import GIForm from './routes/GIForm';
import DSEUForm from './routes/DSEUForm';
import SWEForm from './routes/SWEForm';

import logo_openmined from './img/logo_openmined.png';
import bg_ball_orange from './img/bg_ball_orange.png';
import bg_ball_blue from './img/bg_ball_blue.png';

function App() {
  const careerForms = [
    { name: 'software-engineer', component: <SWE />, form: <SWEForm /> },
    { name: 'data-scientist', component: <DSEU />, form: <DSEUForm /> },
    { name: 'data-scientist-eu', component: <DSEU />, form: <DSEUForm /> },
    // {
    //   name: 'technical-product-manager',
    //   component: <TPM />,
    //   form: <TPMForm />,
    // },
    { name: 'general-interest', component: <GI />, form: <GIForm /> },
  ];

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
            {careerForms.map((entry) => (
              <>
                <Route
                  key={entry.name}
                  path={`/careers/${entry.name}`}
                  element={entry.component}
                />
                {entry.form ? (
                  <Route
                    key={`${entry.name}-form`}
                    path={`/careers/${entry.name}-form`}
                    element={entry.form}
                  />
                ) : null}
              </>
            ))}
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
