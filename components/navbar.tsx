import { itemsNavbar } from "@/data";
import Link from "next/link";

const NavBar = () => {
    return ( 
        <nav>
            <div className="flex items-center justify-center gap-2 px-4 py-1  backdrop-blur-sm mt-6">
            {itemsNavbar.slice(0,3).map((item) => (
                <div
                key={item.id}
                className={`px-3 py-2 transition duration-100
                    rounded-full cursor-pointer hover:bg-slate-100 hover:text-black hover:font-bold`}
                >
                    <Link href={item.link}>{item.title}</Link>
                </div>
            ))}
            </div>
        </nav>
     );
}
 
export default NavBar;