import icon_github from '../img/icon_github.svg';
import icon_linkedin from '../img/icon_linkedin.svg';
import icon_slack from '../img/icon_slack.svg';

export default () => {
  const items = [
    {
      heading: 'What',
      link: 'https://github.com/OpenMined/pysyft',
      icon: icon_github,
      text: "Check out our flagship software PySyft on Github: Perform data science on data that remains in someone else's server",
      buttonText: 'PySyft on GitHub',
    },
    {
      heading: 'Where',
      link: 'https://slack.openmined.org/',
      icon: icon_slack,
      text: 'Join our vibrant slack community with over 16,000+ members today!',
      buttonText: 'Join Slack',
    },
    {
      heading: 'Who',
      link: '/#/careers',
      icon: icon_linkedin,
      text: 'We are hiring! Connect with us on Linkedin and see available job postings.',
      buttonText: 'Apply Now',
    },
  ];

  return (
    <section className="flex flex-col px-6 gap-12 max-w-[1152px] mx-auto mb-16 md:mb-[144px]">
      <h2 className="font-bold mb-2">Learn about PySyft</h2>
      <div id="learn" className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {items.map(({ heading, link, icon, text, buttonText }) => (
          <div className="border-t border-black min-h-[200px] flex flex-col flex-grow pt-4 gap-2">
            <img src={icon} className="h-10 mr-auto" />
            <h3>{heading}</h3>
            <p className="flex-grow">{text}</p>
            <a
              target="_blank"
              rel="noopener"
              className="read-more-button mt-4  bottom-0"
              href={link}
            >
              {buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
