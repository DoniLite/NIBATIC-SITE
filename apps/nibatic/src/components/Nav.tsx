import { NavLink } from "react-router-dom";
import logo from '/logo.jpg'
import {Github} from 'lucide-react'

  
export function NavBar() {
    return(
        <>
            <nav className="relative bg-blue-800 left-0 right-0 top-0 p-6 transition-all" style={{zIndex: '9999'}}>
                <div className="nav text-white">
                    <img src={logo} alt="Logo nibatic" className="logo" />
                    <div className="flex">
                        <ul className="flex mt-3 mr-6">
                            <li className="link">
                                <NavLink to={'/'} end>Home</NavLink>
                            </li>
                            <li className="link">
                                <NavLink to={'/pricing'} end>Pricing</NavLink>
                            </li>
                            <li className="link">
                                <NavLink to={'/forum'} end>Forum</NavLink>
                            </li>
                            <li className="link">
                                <a href="#">
                                    <Github />
                                </a>
                            </li>
                        </ul>
                        <button className="home-btn" style={{ borderRadius: '0 20px 0 15px' }}>Débuter cursus</button>
                    </div>
                </div>
            </nav>
        </>
    )
}