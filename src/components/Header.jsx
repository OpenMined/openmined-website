import icon_x from '../img/icon_x.svg';
import logo_openmined_black from '../img/logo_openmined_black.svg';
import icon_github from '../img/icon_github.svg';
import icon_linkedin from '../img/icon_linkedin.svg';
import icon_slack from '../img/icon_slack.svg';
import Button from './LinkButton'

export default () => {
  const icons = [
    { href: 'https://slack.openmined.org/', icon: icon_slack },
    { href: 'https://github.com/OpenMined/pysyft', icon: icon_github },
    {
      href: 'https://www.linkedin.com/company/openmined/',
      icon: icon_linkedin,
    },
    { href: 'https://x.com/openminedorg', icon: icon_x },
  ];

  return (
    <header className="flex justify-between items-center p-6 pr-0 md:p-10 pb-0">
      <a href="/">
        <img
          src={logo_openmined_black}
          alt="OpenMined"
          className="h-8 sm:h-10"
        />
      </a>
      <div className="flex items-center justify-end p-4 gap-4 flex-shrink-0">
        <span className="uppercase hidden sm:block">Connect:</span>
        {icons.map(({ href, icon }) => (
          <a target="_blank" rel="noopener" href={href}>
            <img src={icon} className="svg-icon h-4 md:h-6" />
          </a>
        ))}
        <Button href="https://buy.stripe.com/cN2g2F2iT1S6eJOfYZ">
          <span className="text-sm md:text-base">Donate</span>
        </Button>
      </div>
    </header>
  );
};
