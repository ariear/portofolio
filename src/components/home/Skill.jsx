import { useEffect } from "react"
import { skill } from "../../data/home/skill"
import ComingSoon from "./ComingSoon"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
    useEffect(() => {
        AOS.init({once: true});
    }, [])
    
    return (
        <div className="container mx-auto px-6 py-8">
            <p className="font-bold text-2xl text-[#0E0E2C] dark:text-white mb-4">My Skill</p>
            <div className="flex flex-wrap items-center justify-center">
                {
                    skill.map((e, index) =>
                        <div key={index} data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 100}><img src={e.logo} className="w-[80px] md:mb-0 mb-5 mr-5 md:mr-8 hover:scale-125 hover:rotate-[360deg] duration-500 transition-all" alt="" /></div>
                    )
                }
            </div>
            <ComingSoon />
        </div>
    )
}

export default Skill