import slide_1 from '../img/slide_1.jpg';

export default () => {
  const items = [
    { link: '/careers', buttonText: 'Careers' },
    { link: 'https://courses.openmined.org/', buttonText: 'Self Study' },
    {
      link: 'https://blog.openmined.org/work-on-ais-most-exciting-frontier-no-phd-required/',
      buttonText: '1:1 Mentorship',
    },
    { link: 'https://slack.openmined.org/', buttonText: 'OpenMined Slack' },
  ];

  return (
    <div className="get-involved-container max-w-[1152px] mb-16 md:mb-[144px] mx-auto">
      <div className="get-involved-buttons">
        <h2 className="mb-2">Get Involved</h2>
        {items.map(({ link, buttonText }) => (
          <a
            target="_blank"
            rel="noopener"
            href={link}
            className="button-link justify-between items-center"
          >
            <span>{buttonText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        ))}
      </div>
      <div className="get-involved-image">
        <img src={slide_1} alt="Get Involved" />
      </div>
    </div>
  );
};
