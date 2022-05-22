import Skill from "../components/home/Skill";
import '../App.css';
import { useEffect, useRef } from "react";
import Services from "../components/home/Services";
import ShowProject from "../components/home/ShowProject";

const Home = () => {
    const homeRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(([entries]) => {
            if (entries.isIntersecting) {
                document.querySelector('.hero-gede').classList.add('animasi-hero-gede')
                document.querySelector('.kenal-nama').classList.add('animasi-nama')
                document.querySelector('.btn-bicara').classList.add('animasi-btn-bicara')
                document.querySelector('.coding-hobi').classList.add('animasi-coding-hobi')
                document.querySelector('.keterangan-main').classList.add('animasi-keterangan-main')
                document.querySelector('.check-service').classList.add('animasi-check-service')
            }
      },
      {
        threshold: 0.1
      })

      if (homeRef.current) {
          observer.observe(homeRef.current)
      }
    }, [])
    

    return (
        <div className="overflow-hidden dark:bg-[#262A31] transition-all duration-300">
        <div className="font-pupylinux flex flex-wrap-reverse items-center justify-center lg:justify-around xl:justify-center pt-24 md:pt-32 lg:pt-0 py-7 md:py-0 h-max lg:h-screen mb-5" ref={homeRef}>
            <div className="xl:mr-10 lg:w-[400px] xl:w-max lg:text-left md:text-center md:px-0 px-6">
                <p className="text-[#3B71FE] font-bold text-xl mb-4 kenal-nama dark:text-white transition-all duration-300">Hello 👋 , My Name Is Arie Akbarull Ridho</p>
                <p className="font-bold text-2xl lg:text-4xl xl:text-5xl mb-4 coding-hobi dark:text-white transition-all duration-300">Coding Is My Hobby</p>
                <p className="lg:text-lg xl:text-xl text-[#0e0e2c9f] mb-6 md:mb-9 keterangan-main dark:text-white transition-all duration-300">I'm still twelfth grade in balung technology high school</p>
                <div className="flex md:items-center lg:justify-start md:justify-center md:flex-row flex-col justify-start">
                    <button className="bg-[#3B71FE] flex items-center text-white py-4 px-6 rounded-md font-medium text-sm mr-4 lg:mr-5 xl:mr-9 w-max md:mb-0 mb-4 btn-bicara hover:scale-95 transition-all">Let's Talk <img src="/asset/icon/message-white.png" className="ml-3" alt="" /></button>
                    <p className="font-medium text-lg md:text-xl text-[#0E0E2C] flex items-center check-service cursor-pointer group dark:text-white transition-all duration-300">Check my Services <img src="/asset/icon/arrow-right-blue.png" className="ml-2 group-hover:translate-x-3 transition-all delay-100" alt="" /></p>
                </div>
            </div>
            <div>
                <img src="/asset/hero-m.png" className="lg:hidden block w-[90vw] md:w-[500px] lg:mb-0 mb-6" alt="" />
                <img src="/asset/hero.png" className="lg:w-[400px] xl:w-[570px] 2xl:w-max lg:block hidden hero-gede" alt="" />
            </div>
        </div>
        <Skill />
        <Services />
        <ShowProject />
        </div>
    )
}

export default Home;