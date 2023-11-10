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
      link: 'https://www.gov.uk/government/publications/ai-safety-institute-overview',
      logo: logo_aisi,
      alt: 'UK AI Safety Institute (Formerly UK Frontier AI Taskforce)',
    },
    {
      link: 'https://unstats.un.org/bigdata/events/2022/unsc-un-pet-lab/index.cshtml',
      logo: logo_unpetlab,
      alt: 'UN PETLab',
    },
    {
      link: 'https://www.christchurchcall.com/',
      logo: logo_cciao,
      alt: 'The Christchurch Call',
    },
  ];
  const partnerships = [
    { link: 'https://deepmind.google/', logo: logo_deepmind, alt: 'DeepMind' },
    { link: 'https://google.com/', logo: logo_google, alt: 'Google' },
    { link: 'https://microsoft.com/', logo: logo_microsoft, alt: 'Microsoft' },
    { link: 'https://meta.com/', logo: logo_meta, alt: 'Meta' },
    { link: 'https://x.com/', logo: logo_x, alt: 'X' },
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
