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
    {
      title: 'Data Scientist (Remote)',
      location: 'Global Remote',
      department: 'Product',
      link: '/#/careers/data-scientist',
    },
    // {
    //   title: 'Technical Product Manager (Remote)',
    //   location: 'Global Remote',
    //   department: 'Product',
    //   link: '/#/careers/technical-product-manager',
    // },
    {
      title: 'General Interest (Remote)',
      location: 'Global Remote',
      department: 'TBD',
      link: '/#/careers/general-interest',
    },
  ];
  return (
    <section className="flex flex-col gap-4 flex-grow px-6 py-2 max-w-[1152px] mx-auto mb-16 md:mb-[144px]">
      <h2 className="font-bold mb-2">Careers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 md:gap-y-12">
        {positions.map(({ title, location, department, link }) => (
          <div
            key={`${title}-${link}`}
            className="flex flex-row gap-3 hover:opacity-80 mb-2"
          >
            <div className="flex-shrink-0">
              <img
                src={logo_openmined}
                alt="OpenMined"
                className="max-w-[50px] mt-2"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg">
                <a href={link}>{title}</a>
              </h3>
              <div className="flex flex-col gap-3">
                <div>
                  <p>Location: {location}</p>
                  <p>Department: {department}</p>
                </div>
                <LinkButton href={link}>More Info</LinkButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
