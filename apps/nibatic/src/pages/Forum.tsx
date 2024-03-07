import { NavBar } from "../components/Nav";
import { IconElement } from "../Export";
import blogAsset1 from '../assets/img0.jpg'

export function Forum() {
    return(
        <>
            <IconElement />
            <div className="bg-blue-800 w-full" style={{ height: '100vh' }}>
            <NavBar />
                <img src={blogAsset1} alt="" className="object-cover w-screen h-screen absolute top-0 left-0 opacity-20" />
                <div className="w-2/3 mx-auto font-bold text-white h-screen flex justify-center items-center">
                    <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ullam error illum? Cum, ipsam sapiente commodi beatae dolorum nisi? Amet, quasi iusto! Veniam esse quas quia a corporis voluptate nostrum?</p>
                </div>
            </div>
        </>
    )
}