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
      Over the last 20 years, a handful of AI algorithms have come to directly
      control over 12 billion hours a day of people's time, equating roughly to
      9.3% of the waking human experience.
    </p>
    <p className="font-[Roboto] font-normal">
      Now, frontier AI systems are emerging with the potential to push beyond
      this 9.3% and enhance or automate all intellectual labor around the world
      with super intelligent capabilities. However, we are largely blind to AI's
      true effects upon the world because researchers can't access sufficient AI
      models or datasets at 1st, 2nd, or 3rd parties.
    </p>
    <p className="font-[Roboto] font-normal">
      16,000+ members strong and 6+ years old, OpenMined is a non-profit on a
      mission to help AI researchers understand and predict AI's impact on
      society.
    </p>
    <p className="font-[Roboto] font-normal">
      By building AI governance infrastructure that helps researchers access
      production AI systems and datasets — to study AI's impact on the world.
    </p>
  </div>
);
