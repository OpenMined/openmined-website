import './App.css';

import icon_github from './img/icon_github.svg';
import icon_linkedin from './img/icon_linkedin.svg';
import icon_pencil from './img/icon_pencil.svg';
import icon_slack from './img/icon_slack.svg';
import icon_star from './img/icon_star.png';
import icon_x from './img/icon_x.svg';
import logo_aisi from './img/logo_aisi.png';
import logo_cciao from './img/logo_cciao.png';
import logo_deepmind from './img/logo_deepmind.png';
import logo_google from './img/logo_google.png';
import logo_meta from './img/logo_meta.png';
import logo_microsoft from './img/logo_microsoft.png';
import logo_openmined_wide_bw from './img/logo_openmined_wide_bw.png';
import logo_openmined from './img/logo_openmined.png';
import logo_unpetlab from './img/logo_unpetlab.png';
import logo_x from './img/logo_x.png';
import slide_1 from './img/slide_1.jpg';
import tile_ai_taskforce from './img/tile_ai_taskforce.png';
import tile_jacinda_ardern_openmined from './img/tile_jacinda_ardern_openmined.png';
import tile_us_exec_order from './img/tile_us_exec_order.png';

function App() {
  return (
    <div>
      <header
        id="header"
        className="flex justify-between items-center p-4 border-b"
      >
        <img
          id="header_logo"
          src={logo_openmined_wide_bw}
          alt="OpenMined"
        ></img>
        <div id="connect_logos" className="text-right ml-auto flex p-4">
          <span>CONNECT:</span>
          <a target="_blank" rel="noopener" href="https://slack.openmined.org/">
            <img src={icon_slack} className="svg-icon" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/OpenMined/pysyft"
          >
            <img src={icon_github} className="svg-icon" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/company/openmined/"
          >
            <img src={icon_linkedin} className="svg-icon" />
          </a>
          <a target="_blank" rel="noopener" href="https://x.com/openminedorg">
            <img src={icon_x} className="svg-icon" />
          </a>
        </div>
      </header>

      <main className="p-4">
        <div id="intro" className="mb-8">
          <img
            id="body_logo"
            src={logo_openmined}
            alt="OpenMined"
            className="items-center p-4"
          />
          <p className="mb-4" style={{ fontWeight: 'bold' }}>
            Over the last 20 years, a handful of AI algorithms have come to
            directly control over 12 billion hours a day of people's time,
            equating roughly to 9.3% of the waking human experience.
          </p>
          <p className="mb-4">
            Now, frontier AI systems are emerging with the potential to push
            beyond this 9.3% and enhance or automate all intellectual labor
            around the world with super intelligent capabilities. However, we
            are largely blind to AI's true effects upon the world because
            researchers can't access sufficient AI models or datasets at 1st,
            2nd, or 3rd parties.
          </p>
          <p>
            16,000+ members strong and 6+ years old, OpenMined is a non-profit
            on a mission to help AI researchers understand and predict AI's
            impact on society. By building AI governance infrastructure that
            helps researchers access production AI systems and datasets — to
            study AI's impact on the world.
          </p>
        </div>

        <h2 className="font-bold mb-2">Learn about the Community</h2>
        <div id="learn" className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="learn_panel flex flex-col p-4 h-full">
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/OpenMined/pysyft"
            >
              <img src={icon_github} className="svg-icon" />
              <h3>What</h3>
            </a>
            <p className="flex-grow">
              Check out our flagship Software PySyft on Github: Perform data
              science on data that remains in someone else's server
            </p>
            <br />
            <a
              target="_blank"
              rel="noopener"
              className="read-more-button mt-auto"
              href="https://github.com/OpenMined/pysyft"
            >
              PySyft on GitHub
            </a>
          </div>

          <div className="learn_panel flex flex-col p-4 h-full">
            <a
              target="_blank"
              rel="noopener"
              href="https://slack.openmined.org/"
            >
              <img src={icon_slack} className="svg-icon" />
              <h3>Where</h3>
            </a>
            <p className="flex-grow">
              Join our vibrant slack community with over 16,000+ members today!
            </p>
            <br />
            <a
              target="_blank"
              rel="noopener"
              className="read-more-button mt-auto"
              href="https://slack.openmined.org/"
            >
              Join Slack
            </a>
          </div>

          <div className="learn_panel flex flex-col p-4 h-full">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/company/openmined/"
            >
              <img src={icon_linkedin} className="svg-icon" />
              <h3>Who</h3>
            </a>
            <p className="flex-grow">
              We are hiring! Connect with us on Linkedin and see available job
              postings.
            </p>
            <br />
            <a
              target="_blank"
              rel="noopener"
              className="read-more-button mt-auto"
              href="https://www.linkedin.com/company/openmined/"
            >
              Apply Now
            </a>
          </div>
        </div>

        <div className="get-involved-container">
          <div className="get-involved-buttons">
            <h2>Get Involved</h2>
            <a
              target="_blank"
              rel="noopener"
              href="https://courses.openmined.org/"
              className="button-link"
            >
              <button>Self Study</button>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://blog.openmined.org/work-on-ais-most-exciting-frontier-no-phd-required/"
              className="button-link"
            >
              <button>1:1 Mentorship</button>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://slack.openmined.org/"
              className="button-link"
            >
              <button>Join</button>
            </a>
          </div>
          <div className="get-involved-image">
            <img src={slide_1} alt="Get Involved" />
          </div>
        </div>

        <h2 className="font-bold mb-2">Partnerships</h2>
        <div id="partnerships" className="p-4">
          <div className="main_partnerships flex justify-around">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.gov.uk/government/publications/ai-safety-institute-overview"
            >
              <img
                src={logo_aisi}
                alt="UK AI Safety Institute (Formerly UK Frontier AI Taskforce)"
              />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://unstats.un.org/bigdata/events/2022/unsc-un-pet-lab/index.cshtml"
            >
              <img src={logo_unpetlab} alt="UN PETLab" />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.christchurchcall.com/"
            >
              <img src={logo_cciao} alt="The Christchurch Call" />
            </a>
          </div>
          <div className="logo-container flex flex-wrap justify-around">
            <a target="_blank" rel="noopener" href="https://deepmind.google/">
              <img src={logo_deepmind} alt="DeepMind" />
            </a>
            <a target="_blank" rel="noopener" href="https://google.com/">
              <img src={logo_google} alt="Google" />
            </a>
            <a target="_blank" rel="noopener" href="https://microsoft.com/">
              <img src={logo_microsoft} alt="Microsoft" />
            </a>
            <a target="_blank" rel="noopener" href="https://meta.com/">
              <img src={logo_meta} alt="Meta" />
            </a>
            <a target="_blank" rel="noopener" href="https://x.com/">
              <img src={logo_x} alt="X" />
            </a>
          </div>
        </div>

        <p className="centered-paragraph">
          Thank you to our mission partners for coming together on the following
          collaborations
        </p>

        <div id="news" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="news_panel flex flex-col h-full">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.christchurchcall.com/"
            >
              <img
                src={tile_jacinda_ardern_openmined}
                alt="CCIAO"
                className="mb-2 mx-auto"
              />
            </a>
            <h3>Christchurch Call</h3>
            <p className="flex-grow">
              The Christchurch Call is a community of over 120 governments,
              online service providers, and civil society organisations acting
              together to eliminate terrorist and violent extremist content
              online.
            </p>
            <a
              target="_blank"
              rel="noopener"
              className="read-more-button mt-auto"
              href="https://www.christchurchcall.com/"
            >
              Read more
            </a>
          </div>
          <div className="news_panel flex flex-col h-full">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.gov.uk/government/publications/frontier-ai-taskforce-second-progress-report/frontier-ai-taskforce-second-progress-report"
            >
              <img
                src={tile_ai_taskforce}
                alt="UK Frontier AI Taskforce (Now UK AI Safety Institute)"
                className="mb-2 mx-auto"
              />
            </a>
            <h3>Frontier AI Taskforce</h3>
            <p className="flex-grow">
              The Taskforce is a start-up inside government, delivering on the
              mission given to us by the Prime Minister: to build an AI research
              team that can evaluate risks at the frontier of AI. We are now 18
              weeks old.
            </p>
            <a
              target="_blank"
              rel="noopener"
              className="read-more-button mt-auto"
              href="https://www.gov.uk/government/publications/frontier-ai-taskforce-second-progress-report/frontier-ai-taskforce-second-progress-report"
            >
              Read more
            </a>
          </div>
          <div className="news_panel flex flex-col h-full">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/"
            >
              <img
                src={tile_us_exec_order}
                alt="Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence"
                className="mb-2 mx-auto"
              />
            </a>
            <h3>White House Executive Order</h3>
            <p className="flex-grow">
              President Biden is issuing a landmark Executive Order to ensure
              that America leads the way in seizing the promise and managing the
              risks of artificial intelligence (AI).
            </p>
            <a
              target="_blank"
              rel="noopener"
              className="read-more-button mt-auto"
              href="https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/"
            >
              Read more
            </a>
          </div>
        </div>
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
