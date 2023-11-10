import bg_ball_orange from './img/bg_ball_orange.png';
import bg_ball_blue from './img/bg_ball_blue.png';

import logo_openmined from './img/logo_openmined.png';
import Header from './components/Header';
import Intro from './components/Intro';
import Community from './components/Community';
import GetInvolved from './components/GetInvolved';
import Partnerships from './components/Partnerships';
import Collaborations from './components/Collaborations';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg_ball_blue}), url(${bg_ball_orange})`,
        backgroundPosition: 'left 200px, right 400px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <main>
        <Intro />
        <Community />
        <GetInvolved />
        <Partnerships />
        <Collaborations />
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
  );
}

export default App;
