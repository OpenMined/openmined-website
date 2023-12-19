import LinkButton from '../components/LinkButton';

export default () => {
  return (
    <section className="job-ad flex flex-col px-6 max-w-[1152px] mx-auto mb-6">
      <h2 className="font-bold mb-2">EU Policy Advisor (Remote)</h2>
      <p>
        <strong>Location:</strong> EU Remote
      </p>
      <p>
        <strong>Department:</strong> Policy
      </p>

      <br />
      <h3 className="text-2xl">Job Description</h3>
      <p>
        OpenMined is looking for an experienced EU Policy Advisor to join the
        organization's Policy team. The primary focus and responsibilities of
        the EU Policy Advisor will be to support deﬁning and implementing
        OpenMined's EU policy strategy. You will report to the Policy Lead.
      </p>
      <br />

      <LinkButton href="/#/careers/policy-advisor-eu-form">
        Apply Now!
      </LinkButton>

      <br />

      <h3 className="text-2xl">Responsibilities</h3>
      <p>will include but are not limited to:</p>

      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
        <li>
          Identify, assess, and realize EU policy opportunities that facilitate
          OpenMined's goals.
        </li>

        <li>Collaborate with other members of the Policy Team.</li>

        <li>
          Work cross-functionally with the Product, Pilots, and Engineering
          teams.
        </li>

        <li>
          Manage multi-stakeholder project teams toward a common set of
          outcomes.
        </li>

        <li>
          Maintain up-to-date knowledge of legislation and governmental events
          relevant to OpenMined's mission and track EU legislative and
          technology landscapes.
        </li>

        <li>
          Serve as a liaison between OpenMined and the EU and represent
          OpenMined in conversations with elected oﬃcials and other
          policymakers.
        </li>

        <li>Handle special projects and initiatives as assigned.</li>
      </ul>

      <br />
      <h3 className="text-2xl">Qualifications</h3>

      <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
        <li>Government experience.</li>
        <li>Knowledgeable about the DSA, DMA, and EU AI Act.</li>
        <li>Proﬁciency in English.</li>
        <li>Clear and effective communicator.</li>
        <li>
          Self-starter, intrinsically motivated, and conﬁdent operating
          autonomously while also being a good teammate.
        </li>

        <li>
          Preferred - A university degree or certiﬁcation in computer science,
          human-computer interaction, symbolic systems, data science, or a
          related ﬁeld, or equivalent professional technical experience.
        </li>
      </ul>
      <br />
      <p>
        While our core team is small, we are a very diverse organization that
        actively promotes equality, inclusion, and diversity. As such, the
        community contracts with full-time, part-time, and volunteer team
        members from around the world, including Asia, Oceania, Africa, Europe,
        South America, and North America. The continent with the largest
        person-budget holds 28%, the smallest 7%, and the median 14%. 58% of our
        budget funds members in the global south. Due to our highly global team,
        this position will likely need to take calls outside of standard working
        hours from time to time, and while the position is fully remote, it is
        required that the candidate work with at least 3 hours of overlap with
        GMT.
      </p>

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
      <LinkButton href="/#/careers/policy-advisor-eu-form">
        Apply Now!
      </LinkButton>
    </section>
  );
};
