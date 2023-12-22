import LinkButton from '../components/LinkButton';

export default () => {
  return (
    <section className="job-ad flex flex-col px-6 max-w-[1152px] mx-auto mb-6">
      <h2 className="font-bold mb-2">Applied Research Scientist (Remote)</h2>
      <p>
        <strong>Location:</strong> Remote (GMT-4 to GMT+3)
      </p>
      <p>
        <strong>Department:</strong> Product
      </p>

      <br />
      <h3 className="text-2xl">Job Description</h3>
      <p>
        As an Applied Research Scientist, your primary responsibility will be to
        lead our Research Reproducibility program. This innovative program aims
        to demonstrate the effectiveness of OpenMined's premier software,
        PySyft, in enhancing research reproducibility. PySyft's unique
        capability enables independent researchers to replicate studies using
        sensitive data that must remain confidential, thereby potentially
        revolutionizing the pace of research advancements.
      </p>
      <br />

      <LinkButton href="/#/careers/research-scientist-form">
        Apply Now!
      </LinkButton>

      <br />

      <h3 className="text-2xl">Responsibilities</h3>
      <p>In this pivotal role, you will:</p>

      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
        <li>
          <strong>Build Global Academic Partnerships: </strong>
          Establish and nurture collaborative relationships with leading
          academic institutions worldwide.
        </li>

        <li>
          <strong>Lead Reproducibility Initiatives: </strong>Lead the
          publication of reproducibility studies across various research
          domains, showcasing the practical applications and benefits of PySyft.
        </li>

        <li>
          <strong>Drive Technological Integration: </strong>Blend cutting-edge
          technology with traditional research methodologies, thereby
          contributing to more reliable and impactful scientific discoveries.
        </li>
      </ul>

      <br />
      <h3 className="text-2xl">Qualifications</h3>

      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
        <li>
          PhD or Master’s degree in Computer Science, Data Science, Statistics,
          or a related field.{' '}
        </li>
        <li>
          Demonstrated experience in conducting scientific research and in
          publishing research papers.
        </li>
        <li>
          Familiarity with research methodologies and reproducibility standards.
        </li>
        <li>
          Strong project management skills with the ability to lead projects and
          collaborate with diverse stakeholders.
        </li>
        <li>
          Strong networking and relationship-building skills, particularly in an
          academic or research-focused environment.
        </li>
        <li>
          Excellent written and verbal communication skills. Ability to explain
          complex technical concepts to non-expert audiences.
        </li>
      </ul>
      <br />
      <h3 className="text-l">Not required, but likely a very good fit:</h3>

      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
        <li>
          Enthusiasm for exploring and solving complex scientific problems.
        </li>
        <li>
          Eagerness to contribute to the scientific community and make a
          meaningful impact through innovative research methodologies and
          technologies.
        </li>
        <li>
          Prior work in collaboration with academic institutions or in
          cross-disciplinary research teams.
        </li>
        <li>
          Knowledge of privacy-enhancing technologies or understanding of data
          privacy and security regulations relevant to research
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
      <LinkButton href="/#/careers/research-scientist-form">
        Apply Now!
      </LinkButton>
    </section>
  );
};
