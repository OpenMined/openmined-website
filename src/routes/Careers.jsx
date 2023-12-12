import LinkButton from '../components/LinkButton';
import logo_openmined from '../img/logo_openmined.png';

export default () => {
  const positions = [
    {
      title: 'Senior Software Engineer (Remote)',
      location: 'Global Remote',
      department: 'Engineering',
      link: '/careers/software-engineer',
    },
  ];
  return (
    <section className="flex flex-col gap-4 flex-grow px-6 py-2 max-w-[1152px] mx-auto mb-16 md:mb-[144px]">
      <h2 className="font-bold mb-2">Careers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {positions.map(({ title, location, department, link }) => (
          <div className="flex flex-row gap-3 hover:opacity-80">
            <div className="flex-shrink-0">
              <img
                src={logo_openmined}
                alt="OpenMined"
                className="max-w-[50px]"
              />
            </div>
            <div className="flex-grow">
              <h3>
                <a href={link}>{title}</a>
              </h3>
              <p>Location: {location}</p>
              <p>Department: {department}</p>
              <div className="pt-2">
                <LinkButton href={link}>More Info</LinkButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
