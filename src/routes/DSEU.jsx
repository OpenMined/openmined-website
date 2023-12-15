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
        engaging with various institutions, to help create what we think will be
        the internet of the future.
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
      <LinkButton href="/#/careers/data-scientist-eu-form">
        Apply Now!
      </LinkButton>
    </section>
  );
};
