import LinkButton from '../components/LinkButton';

export default () => {
  return (
    <section className="job-ad flex flex-col px-6 max-w-[1152px] mx-auto mb-6">
      <h2 className="font-bold mb-2">Applied Data Scientist (Remote)</h2>
      <p>
        <strong>Location:</strong> EU Remote
      </p>
      <p>
        <strong>Department:</strong> Product
      </p>

      <br />
      <h3 className="text-2xl">Job Description</h3>

      <p>
        As an Applied Data Science, you will take the lead in building novel
        applications of remote data science via PySyft, ranging from auditing
        proprietary AI systems in alignment with most recent regulatory calls
        for auditing artificial intelligence-powered platforms (
        <a
          href="https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/13626-Digital-Services-Act-conducting-independent-audits_en"
          target="_blank"
        >
          1
        </a>
        ,{' '}
        <a
          href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/"
          target="_blank"
        >
          2
        </a>
        ) to conducting research studies on non-public data. Further, you get
        the chance to pilot your application directly with relevant
        organizations and educate the stakeholders on your solution.
      </p>
      <br />
      <p>
        Unlike typical Data Scientist roles, where you work with pre-existing
        libraries - this role gives you the chance to directly contribute on the
        product side, based on your unique experience and learnings from
        engaging with various institutions.
      </p>
      <br />

      <LinkButton href="/#/careers/data-scientist-eu-form">
        Apply Now!
      </LinkButton>

      <br />

      <h3 className="text-2xl">Responsibilities</h3>
      <p>In this role, you will be responsible for:</p>

      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
        <li>
          Design and create data science & machine learning use cases for our
          flagship library
        </li>
        <li>
          Collaborate with organizations across the globe to pilot and implement
          these use-cases, ensuring seamless integration and successful
          deployment.
        </li>
        <li>
          Work closely with stakeholders from product and engineering to iterate
          on PySyft's core functionality and bring significant improvements to
          data governance and remote data science experience, based on feedback
          from pilot partners
        </li>
        <li>
          Produce technical documentation to support grassroots adoption of the
          use cases you develop
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
          Have 2+ years experience working as a Data Scientist, ML Engineer, or
          Software Engineer, working on conducting data science projects or
          training & deploying machine learning models, utilizing Python, common
          data science tools (Pandas, Numpy, scikit) and/or ML libraries
          (PyTorch/Tensorflow, JAX)
        </li>
        <li>Strong technical writing skills</li>
        <li>
          Excellent communication and advocacy skills to effectively educate and
          drive the implementation of our pilots with external partners
        </li>
        <li>
          Excellent listening and interpersonal skills to understand and address
          users' specific requirements.
        </li>
      </ul>

      <br />
      <h3 className="text-l">Not required, but likely a very good fit:</h3>

      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
        <li>
          Knowledge of deploying using Kubernetes (K8s) or Docker/Podman, and
          willingness to learn more in this space
        </li>
        <li>Knowledge of privacy-enhancing technologies</li>
        <li>
          Passion or experience working with AI Safety or language models.
        </li>
        <li>Contributions to open-source projects</li>
        <li>Strong presentation and public speaking skills</li>
        <li>
          Familiarity working with cloud platforms (e.g., AWS, Azure, Google
          Cloud).
        </li>
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
      <LinkButton href="/#/careers/data-scientist-eu-form">
        Apply Now!
      </LinkButton>
    </section>
  );
};
