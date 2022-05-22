import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import '../App.css'

const Nav = () => {
    const [open,setOpen] = useState(false)

    const toggle = (e) => {
          if (e.target.checked) {
            localStorage.setItem('mode', 'dark')
            document.querySelector('html').classList.add('dark')
            document.querySelector('.icon').classList.remove('-left-2')
            document.querySelector('.icon').classList.add('left-7')
            document.querySelector('.icon').src = '/asset/icon/moon.webp'
          }else {
            localStorage.removeItem('mode')
            document.querySelector('html').classList.remove('dark')
            document.querySelector('.icon').classList.remove('left-7')
            document.querySelector('.icon').classList.add('-left-2')
            document.querySelector('.icon').src = '/asset/icon/sun.webp'
          }
      }

    useEffect(() => {
      window.addEventListener('scroll', () => {
          document.querySelector('nav').classList.toggle('shadow', window.scrollY > 0)
          document.querySelector('nav').classList.toggle('py-3', window.scrollY > 0)
      })

      if (localStorage.mode) {
            document.querySelector('.toggle').checked = true
        if (document.querySelector('.toggle').checked) {
          document.querySelector('html').classList.add('dark')
          document.querySelector('.icon').classList.remove('-left-2')
          document.querySelector('.icon').classList.add('left-7')
          document.querySelector('.icon').src = '/asset/icon/moon.webp'
        }
      }
    }, [])
    
    return (
        <>
        <nav className="w-screen flex justify-between lg:justify-around items-center py-4 lg:px-0 px-5 font-pupylinux fixed top-0 bg-white z-50 dark:bg-[#262A31] transition-all duration-300">
            <p className="font-semibold text-2xl md:text-3xl text-[#3B71FE] dark:text-white">ArieAR.</p>
            <div className="lg:flex hidden items-center font-medium text-[#0e0e2c9a] dark:text-[#ffffff98]">
                <p className="mr-8 relative group"><NavLink to="/" className={(e) => e.isActive ? 'text-black dark:text-white transition-all border-b-2 border-[#3B71FE]' : 'transition-all'}>Home</NavLink><span className="absolute w-0 left-0 bottom-0 group-hover:border border-[#3B71FE] group-hover:w-full transition-all"></span></p>
                <p className="mr-8 relative group"><NavLink to="/whoami" className={(e) => e.isActive ? 'text-black dark:text-white transition-all border-b-2 border-[#3B71FE]' : 'transition-all'}>Who am i?</NavLink><span className="absolute w-0 left-0 bottom-0 group-hover:border border-[#3B71FE] group-hover:w-full transition-all"></span></p>
                <p className="mr-8">My Services</p>
                <p className="mr-8">My Projects</p>
                <p>Contact Us</p>
            </div>
            <div className="flex items-center">
            <div className="relative cursor-pointer mr-4">
            <input type="checkbox" onClick={(e) => { toggle(e) } } className="toggle opacity-0 absolute top-0 left-0 w-full h-full z-10" />
            <div className="py-3 px-6 bg-white dark:bg-[#112B3C] border border-black transition-all duration-300 rounded-full relative">
                <img src="/asset/icon/sun.webp" className="icon w-[30px] absolute bg-white dark:bg-[#112B3C] rounded-full p-1 border border-black dark:border-white -left-2 top-0 bottom-0 my-auto transition-all duration-500" alt="" />
            </div>
             </div>
            <a href="https://github.com/arieakbarull"><img src="/asset/logo/github-blue.png" width='45' alt="" /></a>
            <button className="lg:hidden w-[35px] flex flex-col relative ml-4" onClick={() => setOpen(!open)}>
                <span className="border-2 border-[#3B71FE] rounded-full w-full mb-1"></span>
                <span className={open ? 'border-2 border-[#3B71FE] rounded-full w-[70%] transition-all mb-1' : 'border-2 border-[#3B71FE] rounded-full w-full transition-all mb-1'}></span>
                <span className={open ? 'border-2 border-[#3B71FE] rounded-full w-[60%] transition-all' : 'border-2 border-[#3B71FE] rounded-full w-full transition-all'}></span>
            </button>
            </div>
        </nav>
        <div className={open ? 'h-[210px] border-b lg:hidden font-pupylinux font-medium px-4 pt-5 sticky top-[67px] bg-white dark:bg-[#262A31] z-40 duration-300 dark:text-white transition-all overflow-hidden' : 'h-0 lg:hidden px-4 sticky top-[84px] z-40 transition-all overflow-hidden'}>
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