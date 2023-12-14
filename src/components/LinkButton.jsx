export default ({ href, children }) => {
  return (
    <a
      rel="noopener"
      href={href}
      className="link-button bg-[#2d2b3a] text-white transition-all duration-300 ease-in-out hover:text-[#2d2b3a] hover:bg-white py-2 px-4 rounded justify-between items-center w-max"
    >
      {children}
    </a>
  );
};
