const Navbar = () => {
  return (
    <nav className="lg:flex justify-between mx-[5%] my-[2%] items-center">
      <div className="flex justify-between">
        <div className="lg:flex-row lg:gap-2 lg:font-bold text-[1rem] flex flex-col font-semibold">
          Super <span>Creative</span>
        </div>
        <img className="img lg:hidden" src="./pictures/menu.svg" alt="" />
      </div>
      <ul className="lg:flex gap-8 hidden">
        <li>About</li>
        <li>Works</li>
        <li>Career</li>
      </ul>
      <div className="lg:flex items-center gap-5 hidden">
        <img src="./pictures/dark.svg" alt="" />
        <button className="bg-[#E52424] text-white text-sm p-2 border rounded-lg">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
