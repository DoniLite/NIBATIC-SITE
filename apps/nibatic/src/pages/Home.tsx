import { NavBar } from "../components/Nav";
import errorImg from "../assets/error.jpg";
import {Code2, Search} from 'lucide-react';

 
export function Home() {
    return (
        <>
            <div className="bg-blue-800 w-full p-6" style={{height: '100vh'}}>
                <NavBar />
                <div className="flex justify-between" style={{width: '90%', margin: '0 auto'}}>
                    <div className="">
                        <Search className=" text-orange-300" size={64} style={{position: 'relative', left: '26rem', top: '10rem'}}/>
                        <div className=" ml-8">
                            <h1 className=" font-bold text-white text-6xl mt-20 ">Agence de</h1>
                            <h1 className=" font-bold text-white text-6xl">Recherches & Inovations</h1>
                            <h1 className=" font-bold text-white text-4xl">De solutions numériques</h1>
                            <Code2 className=" text-white" size={64} />
                        </div>
                        
                    </div>
                    <img src={errorImg} alt="image d'asset" className="asset1" />
                </div>
            </div>
        </>
    )
}