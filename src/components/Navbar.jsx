const Navbar = () => {
    return (
        <nav className="Navbar bg-slate-100 rounded-full flex flex-row justify-center gap-8 shadow-md p-2 fixed left-0 right-0 mb-20">
            <ul className="flex space-x-4">
                <li><a href="#" className= "px-3 py-2 rounded">Home</a></li>
                <li><a href="#" className=" px-3 py-2 rounded">About</a></li>
                <li><a href="#" className=" px-3 py-2 rounded">Login</a></li>
                <li><a href="#" className=" px-3 py-2 rounded">Register</a></li>
            </ul>
        </nav>
    )
}

export default Navbar