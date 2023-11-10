import tile_ai_taskforce from '../img/task1.jpg';
import tile_jacinda_ardern_openmined from '../img/tile_jacinda_ardern_openmined.png';
import tile_us_exec_order from '../img/tile_us_exec_order.png';

export default () => {
  const collaborations = [
    {
      img: tile_jacinda_ardern_openmined,
      imgLink: 'https://www.christchurchcall.com',
      alt: 'CCIAO',
      heading: 'Christchurch call',
      description:
        'The Christchurch Call is a community of over 120 governments, online service providers, and civil society organisations acting together to eliminate terrorist and violent extremist content online.',
      readMoreLink: 'https://www.christchurchcall.com',
    },
    {
      img: tile_ai_taskforce,
      imgLink:
        'https://www.gov.uk/government/publications/frontier-ai-taskforce-second-progress-report/frontier-ai-taskforce-second-progress-report',
      alt: 'UK Frontier AI Taskforce (Now UK AI Safety Institute)',
      heading: 'Frontier AI Taskforce',
      description:
        'The Taskforce is a start-up inside government, delivering on the mission given to us by the Prime Minister: to build an AI research team that can evaluate risks at the frontier of AI. We are now 18 weeks old.',
      readMoreLink:
        'https://www.gov.uk/government/publications/frontier-ai-taskforce-second-progress-report/frontier-ai-taskforce-second-progress-report',
    },
    {
      img: tile_us_exec_order,
      imgLink:
        'https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/',
      alt: 'Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence',
      heading: 'White House Executive Order',
      description:
        'President Biden is issuing a landmark Executive Order to ensure that America leads the way in seizing the promise and managing the risks of artificial intelligence (AI).',
      readMoreLink:
        'https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/',
    },
  ];
  return (
    <section className="max-w-[1152px] mx-auto">
      <p className="centered-paragraph px-8 py-[72px]">
        Thank you to our mission partners for coming together on the following
        collaborations
      </p>
      <div id="news" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {collaborations.map(
          ({ img, imgLink, alt, heading, description, readMoreLink }) => (
            <div className="news_panel flex flex-col h-full">
              <a target="_blank" rel="noopener" href={imgLink}>
                <img
                  src={img}
                  alt={alt}
                  className="mb-4 mx-auto object-contain rounded"
                />
              </a>
              <h3>{heading}</h3>
              <p className="flex-grow">{description}</p>
              <a
                target="_blank"
                rel="noopener"
                className="read-more-button mt-auto"
                href={readMoreLink}
              >
                Read more
              </a>
            </div>
          )
        )}
      </div>
    </section>
  );
};
