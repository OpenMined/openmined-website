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
        Formed in 2017, OpenMined is a fully distributed, diverse open-source
        community of over 16,000 engineers, researchers, community organizers,
        product managers, writers, teachers, and enthusiasts actively creating
        open-source software, online courses, and impact pilots with strategic
        partners. Our open-source software includes industry-leading private AI
        tools (such as PySyft, PyDP, TenSEAL, and others). Our course platform
        has enrolled over 12,000 students since launching in 2021, and we have
        several impact projects running within major governments, enterprises,
        and academic labs.
      </p>
      <br />
      <p>
        If successful, our software will lead to a 1000x increase in the amount
        of data available across scientiﬁc ﬁelds, public services, and
        industrial applications, driving a decade of breakthroughs across all of
        science and industry. Furthermore, this software will lead to a new
        ecosystem of tools for promoting AI governance and set the standard
        driving all major enterprises to make their algorithms open for external
        audit. This will be accomplished by building software for{' '}
        <a href="https://arxiv.org/pdf/2012.08347.pdf" target="_blank">
          structured transparency
        </a>
        . Using our software, a scientist in one organization can use data in
        another organization to answer a question without acquiring a copy of
        the information they're studying. The implications of this breakthrough
        will be signiﬁcant; a researcher in any discipline will be able to
        leverage all relevant data throughout society, as opposed to being
        limited to the data their particular organization has created or
        acquired.
      </p>

      <br />
      <p>
        We view this transition as analogous to the creation of a new layer of
        the internet, one ﬁlled with non-public information capable of answering
        some of life's most important questions. Our most important mission is
        to ensure that such a vast distributed network of information is
        stewarded in the public interest, avoiding key failure modes such as
        private monopoly. This is a nuanced strategy with various policy
        implications. Aspects of this strategy will be discussed during the
        hiring process.
      </p>

      <br />
      <LinkButton href="/#/careers/policy-advisor-eu-form">
        Apply Now!
      </LinkButton>
    </section>
  );
};
