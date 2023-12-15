import LinkButton from '../components/LinkButton';
import logo_openmined from '../img/logo_openmined.png';

export default () => {
  const positions = [
    {
      title: 'Senior Software Engineer (Remote)',
      location: 'Global Remote',
      department: 'Engineering',
      link: '/#/careers/software-engineer',
    },
    // {
    //   title: 'EU Policy Advisor (Remote)',
    //   location: 'EU Remote',
    //   department: 'Policy',
    //   link: '/#/careers/policy-advisor-eu',
    // },
    // {
    //   title: 'Director of Development (Remote)',
    //   location: 'Global Remote',
    //   department: 'Policy',
    //   link: '/#/careers/director-of-development',
    // },
    // {
    //   title: 'Data Scientist (Remote)',
    //   location: 'EU Remote',
    //   department: 'Product',
    //   link: '/#/careers/data-scientist-eu',
    // },
  ];
  return (
    <section className="flex flex-col gap-4 flex-grow px-6 py-2 max-w-[1152px] mx-auto mb-16 md:mb-[144px]">
      <h2 className="font-bold mb-2">Careers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {positions.map(({ title, location, department, link }) => (
          <div className="flex flex-row gap-3 hover:opacity-80 mb-2">
            <div className="flex-shrink-0">
              <img
                src={logo_openmined}
                alt="OpenMined"
                className="max-w-[50px] mt-2"
              />
            </div>
            <div className="flex-grow">
              <h3>
                <a href={link}>{title}</a>
              </h3>
              <p>Location: {location}</p>
              <p>Department: {department}</p>
              <div className="pt-3">
                <LinkButton href={link}>More Info</LinkButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
