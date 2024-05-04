const Navbar = () => {
    return ( 
        <nav className="flex justify-between mx-[5%] my-[2%]">
            <div>Super Creative</div>
            <ul className="flex gap-8">
                <li>About</li>
                <li>Works</li>
                <li>Career</li>
            </ul>
            <div className="flex items-center gap-5">
                <img src="./pictures/dark.svg" alt="" />
                <button className="bg-[#E52424] text-white text-sm p-2 border rounded-lg">Contact Us</button>
            </div>
        </nav>
     );
}
 
export default Navbar;