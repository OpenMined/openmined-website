import logo_aisi from '../img/logo_aisi.png';
import logo_cciao from '../img/logo_cciao.png';
import logo_deepmind from '../img/logo_deepmind.png';
import logo_google from '../img/logo_google.png';
import logo_meta from '../img/logo_meta.png';
import logo_microsoft from '../img/logo_microsoft.png';
import logo_unpetlab from '../img/logo_unpetlab.png';
import logo_x from '../img/logo_x.png';

export default () => {
  const mainPartnerships = [
    {
      link: 'https://www.gov.uk/government/publications/frontier-ai-taskforce-second-progress-report/frontier-ai-taskforce-second-progress-report',
      logo: logo_aisi,
      alt: 'UK AI Safety Institute (Formerly UK Frontier AI Taskforce)',
    },
    {
      link: 'https://unstats.un.org/bigdata/events/2022/unsc-un-pet-lab/index.cshtml',
      logo: logo_unpetlab,
      alt: 'UN PETLab',
    },
    {
      link: 'https://twitter.com/openminedorg/status/1573519112348770304',
      logo: logo_cciao,
      alt: 'The Christchurch Call',
    },
  ];
  const partnerships = [
    { link: 'https://www.nist.gov/news-events/news/2022/11/winners-announced-first-phase-uk-us-privacy-enhancing-technologies-prize', logo: logo_deepmind, alt: 'DeepMind' },
    { link: 'https://developers.googleblog.com/2021/01/how-were-helping-developers-with-differential-privacy.html', logo: logo_google, alt: 'Google' },
    { link: 'https://blogs.microsoft.com/on-the-issues/2022/09/20/christchurch-call-responsible-ai-online-extremism/', logo: logo_microsoft, alt: 'Microsoft' },
    { link: 'https://ai.meta.com/blog/facebook-ai-openmined-partner-on-new-pytorch-privacy-and-machine-learning-courses/', logo: logo_meta, alt: 'Meta' },
    { link: 'https://blog.openmined.org/announcing-our-partnership-with-twitter-to-advance-algorithmic-transparency/', logo: logo_x, alt: 'X' },
  ];
  return (
    <section className="px-6 max-w-[1152px] mx-auto">
      <h2 className="font-medium mb-2">Partnerships</h2>
      <div id="partnerships" className="flex flex-col gap-6">
        <div className="main_partnerships flex flex-wrap justify-around">
          {mainPartnerships.map(({ link, logo, alt }) => (
            <a target="_blank" rel="noopener" href={link}>
              <img src={logo} alt={alt} />
            </a>
          ))}
        </div>
        <div className="logo-container flex flex-wrap justify-around">
          {partnerships.map(({ link, logo, alt }) => (
            <a target="_blank" rel="noopener" href={link}>
              <img src={logo} alt={alt} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
