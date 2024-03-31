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
      We facilitate access to non-public data, AIs, and APIs.
    </p>
    <p className="font-[Roboto] font-normal">
      Access to non-public data, AIs, and APIs is hard because of concerns like privacy, security, and IP. If you need more access, or you need to offer more access to others, we we build free, open-source, privacy enhancing software that can help. 
    </p>
    <p className="font-[Roboto] font-normal">
      16,000+ members strong and 6+ years old, OpenMined is a non-profit on a
      mission to help researchers access the most important information in the world, and use it to answer the most important questions in the world. 
      We do this by building a new kind of web server, PySyft, which can empower one person to use data owned by another to answer a question — without obtaining a copy of the data. We think it's going to lead to 1000x more data in every scientific field. Come join us.
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
