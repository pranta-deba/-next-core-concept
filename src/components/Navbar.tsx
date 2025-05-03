const Navbar = () => {
    return (
        <div className="px-3 py-5 bg-orange-700 text-white">
            <div className="container mx-auto flex justify-between items-center ">
            <h1 className="text-2xl font-bold">Logo</h1>
            <ul className="flex items-center gap-4">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Contact</li>
                <li className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">Login</li>
                <li className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">Register</li>
            </ul>
        </div>
        </div>
    );
};

export default Navbar;