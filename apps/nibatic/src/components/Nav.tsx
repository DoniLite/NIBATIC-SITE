import { logo } from "../Export";
import {Github} from 'lucide-react'


export function NavBar() {
    return(
        <>
            <div className="nav">
                <img src={logo} alt="Logo nibatic" className="logo" />
                <div className="flex">
                    <ul className="flex mt-3 mr-6">
                        <li className="link">
                            <a href="#">Home</a>
                        </li>
                        <li className="link">
                            <a href="#">About</a>
                        </li>
                        <li className="link">
                            <a href="#">Blog</a>
                        </li>
                        <li className="ml-8 font-bold">
                            <a href="#">
                                <Github className=" text-white" />
                            </a>
                        </li>
                    </ul>

                    <button className="p-3 bg-white font-bold ml-6" style={{borderRadius: '0 20px 0 15px'}}>Contactez-nous</button>
                </div>
            </div>
        </>
    )
}