import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import '../App.css'

const Nav = () => {
    const [open,setOpen] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', () => {
          document.querySelector('nav').classList.toggle('shadow', window.scrollY > 0)
          document.querySelector('nav').classList.toggle('py-3', window.scrollY > 0)
      })
    }, [])
    
    return (
        <>
        <nav className="flex justify-between lg:justify-around items-center py-4 lg:px-0 px-5 font-pupylinux sticky top-0 bg-white transition-all z-50">
            <p className="font-semibold text-2xl md:text-3xl text-[#3B71FE]">ArieAR.</p>
            <div className="lg:flex hidden items-center font-medium text-[#0e0e2c9a]">
                <p className="mr-8 relative group"><NavLink to="/" className={(e) => e.isActive ? 'text-black transition-all border-b-2 border-[#3B71FE]' : 'transition-all'}>Home</NavLink><span className="absolute w-0 left-0 bottom-0 group-hover:border border-[#3B71FE] group-hover:w-full transition-all"></span></p>
                <p className="mr-8 relative group"><NavLink to="/whoami" className={(e) => e.isActive ? 'text-black transition-all border-b-2 border-[#3B71FE]' : 'transition-all'}>Who am i?</NavLink><span className="absolute w-0 left-0 bottom-0 group-hover:border border-[#3B71FE] group-hover:w-full transition-all"></span></p>
                <p className="mr-8">My Services</p>
                <p className="mr-8">My Projects</p>
                <p>Contact Us</p>
            </div>
            <div className="flex items-center">
            <a href="https://github.com/arieakbarull"><img src="/asset/logo/github-blue.png" width='45' alt="" /></a>
            <button className="lg:hidden w-[35px] flex flex-col relative ml-4" onClick={() => setOpen(!open)}>
                <span className="border-2 border-[#3B71FE] rounded-full w-full mb-1"></span>
                <span className={open ? 'border-2 border-[#3B71FE] rounded-full w-[70%] transition-all mb-1' : 'border-2 border-[#3B71FE] rounded-full w-full transition-all mb-1'}></span>
                <span className={open ? 'border-2 border-[#3B71FE] rounded-full w-[60%] transition-all' : 'border-2 border-[#3B71FE] rounded-full w-full transition-all'}></span>
            </button>
            </div>
        </nav>
        <div className={open ? 'h-[210px] border-b lg:hidden font-pupylinux font-medium px-4 pt-5 sticky top-[84px] bg-white z-40 transition-all overflow-hidden' : 'h-0 lg:hidden px-4 sticky top-[84px] z-40 transition-all overflow-hidden'}>
            <p className="mb-3">Home</p>
            <p className="mb-3">Who am i?</p>
            <p className="mb-3">My Services</p>
            <p className="mb-3">My Projects</p>
            <p className="mb-3">Contact Us</p>
        </div>
        </>
    )
}

export default Nav