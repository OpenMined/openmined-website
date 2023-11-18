import slide_1 from '../img/slide_1.jpg';

export default () => {
  const items = [
    { link: 'https://courses.openmined.org/', buttonText: 'Self Study' },
    {
      link: 'https://blog.openmined.org/work-on-ais-most-exciting-frontier-no-phd-required/',
      buttonText: '1:1 Mentorship',
    },
    { link: 'https://slack.openmined.org/', buttonText: 'Join OpenMined' },
  ];

  return (
    <div className="get-involved-container max-w-[1152px] mb-16 md:mb-[144px] mx-auto">
      <div className="get-involved-buttons">
        <h2 className="mb-2">Get Involved</h2>
        {items.map(({ link, buttonText }) => (
          <a target="_blank" rel="noopener" href={link} className="button-link">
            {buttonText}
          </a>
        ))}
      </div>
      <div className="get-involved-image">
        <img src={slide_1} alt="Get Involved" />
      </div>
    </div>
  );
};
