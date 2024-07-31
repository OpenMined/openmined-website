export default () => {
  const items = [
    {
      link: 'https://github.com/OpenMined/pysyft',
      text: "Check out our flagship software PySyft on Github: Perform data science on data that remains in someone else's server",
      buttonText: 'PySyft on GitHub',
    },
    {
      link: 'https://docs.openmined.org/',
      text: 'Get started with PySyft: Unlock your data in less than 10 minutes',
      buttonText: 'Quickstart',
    },
    {
      link: 'https://blog.openmined.org',
      text: "Discover the latest updates on PySyft in OpenMined's blog post",
      buttonText: 'Latest updates',
    },
  ];

  return (
    <section className="flex flex-col px-6 max-w-[1152px] mx-auto mb-16 md:mb-[144px]">
      <h2 className="font-bold mb-2">Learn about PySyft</h2>
      <div id="learn" className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map(({ link, text, buttonText }) => (
          <div className="border-t border-black flex flex-col flex-grow pt-4 gap-2">
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
