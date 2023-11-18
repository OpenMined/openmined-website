import tile_ai_taskforce from '../img/task1.jpg';
import tile_jacinda_ardern_openmined from '../img/tile_jacinda_ardern_openmined.png';
import tile_us_exec_order from '../img/tile_us_exec_order.png';

export default () => {
  const collaborations = [
    {
      img: tile_jacinda_ardern_openmined,
      imgLink: 'https://twitter.com/openminedorg/status/1573519112348770304',
      alt: 'CCIAO',
      heading: 'Christchurch Call Initiative on Algorithmic Outcomes',
      description:
        'The Christchurch Call is a community of over 120 governments, online service providers, and civil society organisations acting together to eliminate terrorist and violent extremist content online, "Working with an open-source non-profit organisation called OpenMined, the Algorithms Initiative will develop and test ground-breaking privacy-enhancing software infrastructure to address those challenges and help us move forward work under the Call."',
      readMoreLink: 'https://twitter.com/openminedorg/status/1573519112348770304',
    },
    {
      img: tile_ai_taskforce,
      imgLink:
        'https://www.gov.uk/government/publications/frontier-ai-taskforce-second-progress-report/frontier-ai-taskforce-second-progress-report',
      alt: 'UK Frontier AI Taskforce (Now UK AI Safety Institute)',
      heading: 'UK AI Safety Institute (formerly the Frontier AI Taskforce)',
      description:
        'The Institute is the first state-backed organisation focused on advanced AI safety for the public interest. Its mission is to minimise surprise to the UK and humanity from rapid and unexpected advances in AI, "We are working with OpenMined to develop and deploy technical infrastructure that will facilitate AI safety research across governments and AI research organisations."',
      readMoreLink:
        'https://www.gov.uk/government/publications/frontier-ai-taskforce-second-progress-report/frontier-ai-taskforce-second-progress-report',
    },
    {
      img: tile_us_exec_order,
      imgLink:
        'https://www.whitehouse.gov/wp-content/uploads/2023/03/National-Strategy-to-Advance-Privacy-Preserving-Data-Sharing-and-Analytics.pdf',
      alt: 'NATIONAL STRATEGY TO ADVANCE PRIVACY-PRESERVING DATA SHARING AND ANALYTICS',
      heading: 'United Nations and US Census Bureau (feat. in USA\'s National Strategy Report)',
      description:
        '"In 2022, the UN PET Lab ran a pilot study to test the ability to query data across a network made up of the countries and the UN without seeing the data itself. They did this by deploying an open-source software called PySyft and loading in open trade data..."',
      readMoreLink:
        'https://www.whitehouse.gov/wp-content/uploads/2023/03/National-Strategy-to-Advance-Privacy-Preserving-Data-Sharing-and-Analytics.pdf',
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
