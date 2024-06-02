import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaHome, FaRegAddressBook } from "react-icons/fa";
import { RiAccountPinCircleLine, RiDashboardFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Navbar1 = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('User LogOut Successfully');
            })
            .catch()
    }

    const NavLinks = (
        <>
            <li className="font-semibold"><NavLink to="/"><FaHome className="-mr-1"/>Home</NavLink></li>
            <li className="font-semibold"><NavLink to="/aboutRmstu">About</NavLink></li>
            <li className="font-semibold"><NavLink to="/login"><RiAccountPinCircleLine className="-mr-1" />LogIn</NavLink></li>
            <li className="font-semibold"><NavLink to="/register"><FaRegAddressBook className="-mr-1" />Register</NavLink></li>
            <li className="relative group font-semibold">
                <a className="flex items-center cursor-pointer">
                    Department
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
                <ul className="absolute hidden mt-1 bg-[#216b21] text-white rounded shadow-lg z-10 group-hover:block">
                    <Link to="/cse"><li><a className="block px-4 py-2" href="#">CSE</a></li></Link>
                    <li><a className="block px-4 py-2" href="#">MGT</a></li>
                    <li><a className="block px-4 py-2" href="#">FES</a></li>
                    <li><a className="block px-4 py-2" href="#">FMRT</a></li>
                    <li><a className="block px-4 py-2" href="#">THM</a></li>
                </ul>
            </li>
            {user && (
                
                    user.email === "admin@gmail.com"?(
                    <>
                        
                        <li className="font-semibold"><NavLink to="/dashboard"><RiDashboardFill className="-mr-1" />
                            Dashboard</NavLink></li>
                    </>
    ) : (
                        <li className="font-semibold"><NavLink to="/profile"><CgProfile className="-mr-1" />
                            My Profile</NavLink></li>
    )
   )}
        </>
    );

    return (
        <div className="navbar bg-[#216b21] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-500 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <ThemeToggle />
                {user ? (
                    <>
                        <div className="lg:tooltip" data-tip={user.displayName}>
                            <img
                                className="w-10 h-10 rounded-full hover:opacity-75"
                                alt="User Profile"
                                src={user.photoURL}
                            />
                        </div>
                        <button onClick={handleLogOut} className="border-2 py-0.5 px-1 font-bold md:text-lg text-sm  rounded-xl">Log out</button>
                    </>
                ) : (
                    <Link to="/login">
                        <button className="border-2 py-0.5 px-2 font-bold text-lg border-white rounded-xl">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar1;
