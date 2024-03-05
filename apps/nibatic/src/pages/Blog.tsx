import { NavBar } from "../components/Nav";
import { IconElement } from "../Export";

export function Blog() {
    return(
        <>
            <IconElement />
            <div className="bg-blue-800 w-full p-6" style={{ height: '100vh' }}>
            <NavBar />
            </div>
        </>
    )
}