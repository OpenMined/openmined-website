import logo_openmined from '../img/logo_openmined.png';

export default () => (
  <div
    id="intro"
    className="flex flex-col gap-4 px-6 py-2 md:mx-auto items-center max-w-[688px] mb-16 md:mb-[180px]"
  >
    <img
      src={logo_openmined}
      alt="OpenMined"
      className="h-[90px] w-[90px] items-center mb-4"
    />
    <p className="mb-4 font-medium text-2xl leading-9 text-[#2D2B3A]">
      We facilitate access to digital information that normally can't be accessed
      by providing free open source software to help external researchers ask questions
      about non-public information, and the owners of non-public information to answer them without
      divulging anything else.
    </p>
    <p className="font-[Roboto] font-normal">
      Over the last 20 years, a handful of AI algorithms have come to directly
      guide over 12 billion hours a day of people's time, equating roughly to
      9.3% of the waking human experience.
    </p>    
    <p className="font-[Roboto] font-normal">
      Now, frontier AI systems are emerging with the potential to push beyond
      this 9.3% and enhance or automate intellectual labor around the world
      with superintelligent capabilities. However, we are largely blind to AI's
      full effect upon the world because researchers can't sufficiently access AI
      models or datasets at 1st or 3rd parties.
    </p>
    <p className="font-[Roboto] font-normal">
      16,000+ members strong and 6+ years old, OpenMined is a non-profit on a
      mission to help AI researchers understand and predict AI's impact on
      society. We do this by building AI governance infrastructure using privacy enhancing technologies that helps researchers access
       AI systems and datasets — to study AI's impact on the world.
    </p>

    <div className="get-involved-buttons">
    <a
      target="_blank"
      rel="noopener"
      href="/#/careers"
      className="button-link justify-between items-center"
    >
      <span>We're Hiring</span>
    </a>
  </div>
  </div>

);
