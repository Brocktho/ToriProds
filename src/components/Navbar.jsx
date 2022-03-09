import Logo from "./Logo";
import { 
    Link as Same,
    animateScroll as scroll
} from "react-scroll"

const Navbar = () => {
    return (
        <nav className="fixed flex flex-row justify-between bg-[#D2B48C] top-0 left-0 w-screen items-center underline-none z-10 h-12">
            <div className="w-1/4 h-full">
                <Logo/>
            </div>
            <ul className="flex flex-row gap-12 pr-12 h-full items-center text-xl">
                <Same spy={true} smooth={true} offset={0} duration={500} activeClass="underline" className="cursor-pointer hover:underline hover:text-slate-600" to="Home"> Home </Same>
                <Same to ="Gallery" spy={true} smooth={true} offset={-40} duration={500} activeClass="underline" className="cursor-pointer hover:underline hover:text-slate-600">Gallery</Same>
                <Same to ="Contact" spy={true} smooth={true} offset={-40} duration={500} activeClass="underline" className="cursor-pointer hover:underline hover:text-slate-600" >Contact Me</Same>
            </ul>
        </nav> 
    )
}

export default Navbar;