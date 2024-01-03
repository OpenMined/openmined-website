import LinkButton from '../components/LinkButton';

export default () => {
  return (
    <section className="job-ad flex flex-col px-6 max-w-[1152px] mx-auto mb-6">
      <h2 className="font-bold mb-2">Technical Product Manager (Remote)</h2>
      <p>
        <strong>Location:</strong> Global Remote (GMT-4 to GMT+3)
      </p>
      <p>
        <strong>Department:</strong> Product
      </p>

      <br />
      <h3 className="text-2xl">Job Description</h3>

      <p>
        As a Technical Product Manager, you will be responsible for leading the
        development and execution of our remote data science and networking
        product,{' '}
        <a href="https://github.com/OpenMined/PySyft" target="_blank">
          PySyft
        </a>{' '}
        (9.1K Github stars, currently deployed at Microsoft, United Nations, and
        more). You will drive the product direction and roadmapping,
        collaborating with Engineers, UX Designers and UX Researchers to deliver
        a high-quality product that meets our users' needs.
      </p>
      <br />
      <p>
        In this role, you will have a front seat in interfacing with OpenMined's
        strategic partners in government, academia and industry. You will work
        closely with them to collect new product priorities, align on a
        deployment strategy and ensure a successful integration with PySyft.
        This is a unique opportunity to build infrastructure that was never
        created before and get involved with cutting edge R&D projects.
      </p>
      <br />

      <LinkButton href="/#/careers/technical-product-manager-form">
        Apply Now!
      </LinkButton>

      <br />

      <h3 className="text-2xl">Key Responsibilities</h3>
      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
        <li>
          <strong>Roadmap Management:</strong> Develop and maintain a product
          roadmap that is aligned with OpenMined's objectives and aligned with
          the requirements of our partners.
        </li>
        <li>
          <strong>PySyft Development:</strong> Oversee the entire product
          development lifecycle, from concept to launch. Define product
          requirements, craft user stories, and ensure product quality.
        </li>
        <li>
          <strong>Cross-functional Collaboration:</strong> Work closely with
          engineering, design, research, and other teams to ensure successful
          development and launch. Lead cross-functional projects and drive
          project execution.
        </li>
        <li>
          <strong>User-focused Development:</strong> Develop a deep
          understanding of PySyft users' needs through research, feedback, and
          data analysis. Use insights to make informed product decisions and
          improvements.
        </li>
        <li>
          <strong>Metrics and KPIs:</strong> Define and track key performance
          indicators (KPIs) to measure product success. Use data to drive
          decisions and continuously improve products.
        </li>
      </ul>

      <br />
      <h3 className="text-2xl">Qualifications</h3>
      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
        <li>
          Bachelor's or Master's degree in a relevant field, such as Computer
          Science, Data Science, or a related discipline.
        </li>
        <li>
          Proven track record (2+ years) working as a Data Scientist, ML
          Engineer, or Software Engineer, working on conducting data science
          projects or training & deploying Machine Learning models, utilizing
          Python, common data science tools (Pandas, Numpy, scikit) and/or ML
          libraries (PyTorch/Tensorflow, JAX)
        </li>
        <li>
          Proven track record working as a Product Manager (2+ years), with a
          strong focus on technical products, ideally building software
          development tools.
        </li>
        <li>
          Mission focused, ready to operate in a fast-paced, dynamic
          environment.
        </li>
        <li>Strong leadership, communication, and collaboration skills.</li>
        <li>Strong analytical and problem-solving abilities.</li>
      </ul>

      <br />
      <h3 className="text-l">Not required, but likely a very good fit:</h3>

      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
        <li>
          Experience with Agile and product management tools (e.g., Jira,
          Trello).
        </li>
        <li>Knowledge of privacy-enhancing technologies.</li>
        <li>
          Passion or experience working with AI Safety or language models.
        </li>
        <li>Contributions to open-source projects.</li>
      </ul>
      <br />
      <h3 className="text-2xl">About OpenMined</h3>
      <p>
        Over the last 20 years, a handful of AI algorithms have come to directly
        guide over 12 billion hours a day of people's time, equating roughly to
        9.3% of the waking human experience.
      </p>
      <br />
      <p>
        Now, frontier AI systems are emerging with the potential to push beyond
        this 9.3% and enhance or automate intellectual labor around the world
        with superintelligent capabilities. However, we are largely blind to
        AI's full effect upon the world because researchers can't sufficiently
        access AI models or datasets at 1st or 3rd parties.
      </p>
      <br />

      <p>
        16,000+ members strong and 6+ years old, OpenMined is a non-profit on a
        mission to help AI researchers understand and predict AI's impact on
        society. We do this by building AI governance infrastructure using
        privacy enhancing technologies that helps researchers access AI systems
        and datasets — to study AI's impact on the world.
      </p>
      <br />

      <p>
        We think this external access problem is really really important, and
        we've started on solving the first step, AI auditing. If you want to
        help solve this problem and unlock 1000x more data in every scientific
        field, we'd love to talk to you.
      </p>
      <br />
      <LinkButton href="/#/careers/technical-product-manager-form">
        Apply Now!
      </LinkButton>
    </section>
  );
};
