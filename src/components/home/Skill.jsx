import { skill } from "../../data/home/skill"
import ComingSoon from "./ComingSoon"

const Skill = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            <p className="font-bold text-2xl text-[#0E0E2C] mb-4">My Skill</p>
            <div className="flex flex-wrap items-center justify-center">
                {
                    skill.map((e, index) =>
                        <img src={e.logo} className="w-[80px] md:mb-0 mb-5 mr-5 md:mr-8 hover:scale-125 hover:rotate-[360deg] duration-500 transition-all" key={index} alt="" />
                    )
                }
            </div>
            <ComingSoon />
        </div>
    )
}

export default Skill