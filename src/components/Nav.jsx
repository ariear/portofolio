import { useEffect } from "react"
import { NavLink } from "react-router-dom"

const Nav = () => {
    useEffect(() => {
      window.addEventListener('scroll', () => {
          document.querySelector('nav').classList.toggle('shadow', window.scrollY > 0)
          document.querySelector('nav').classList.toggle('py-3', window.scrollY > 0)
      })
    }, [])
    
    return (
        <nav className="flex justify-between lg:justify-around items-center py-5 lg:px-0 px-5 font-pupylinux sticky top-0 bg-white transition-all">
            <p className="font-semibold text-3xl text-[#3B71FE]">ArieAR.</p>
            <div className="lg:flex hidden items-center font-medium text-[#0e0e2c9a]">
                <p className="mr-8 relative group"><NavLink to="/" className={(e) => e.isActive ? 'text-black transition-all border-b-2 border-[#3B71FE]' : 'transition-all'}>Home</NavLink><span className="absolute w-0 left-0 bottom-0 group-hover:border border-[#3B71FE] group-hover:w-full transition-all"></span></p>
                <p className="mr-8 relative group"><NavLink to="/whoami" className={(e) => e.isActive ? 'text-black transition-all border-b-2 border-[#3B71FE]' : 'transition-all'}>Who am i?</NavLink><span className="absolute w-0 left-0 bottom-0 group-hover:border border-[#3B71FE] group-hover:w-full transition-all"></span></p>
                <p className="mr-8">My Services</p>
                <p className="mr-8">My Projects</p>
                <p>Contact Us</p>
            </div>
            <div className="flex items-center">
            <a href="https://github.com/arieakbarull"><img src="/asset/logo/github-blue.png" width='45' alt="" /></a>
            <button className="lg:hidden w-[35px] flex flex-col relative ml-4">
                <span className="border-2 border-[#3B71FE] rounded-full w-full mb-1"></span>
                <span className="border-2 border-[#3B71FE] rounded-full w-full mb-1"></span>
                <span className="border-2 border-[#3B71FE] rounded-full w-full"></span>
            </button>
            </div>
        </nav>
    )
}

export default Nav