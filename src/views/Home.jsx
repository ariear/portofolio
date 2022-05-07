import Skill from "../components/home/Skill";

const Home = () => {
    return (
        <>
        <div className="font-pupylinux flex flex-wrap-reverse items-center justify-center lg:justify-around xl:justify-center py-16 mb-5">
            <div className="xl:mr-10 lg:w-[400px] xl:w-max lg:text-left md:text-center md:px-0 px-6">
                <p className="text-[#3B71FE] font-bold text-xl mb-4">Hello 👋 , My Name Is Arie Akbarull Ridho</p>
                <p className="font-bold text-2xl lg:text-4xl xl:text-5xl mb-4">Coding Is My Hobby</p>
                <p className="lg:text-lg xl:text-xl text-[#0e0e2c9f] mb-6 md:mb-9">I'm still twelfth grade in balung technology high school</p>
                <div className="flex md:items-center lg:justify-start md:justify-center md:flex-row flex-col justify-start">
                    <button className="bg-[#3B71FE] flex items-center text-white py-4 px-6 rounded-md font-medium text-sm mr-4 lg:mr-5 xl:mr-9 w-max md:mb-0 mb-4">Let's Talk <img src="/asset/icon/message-white.png" className="ml-3" alt="" /></button>
                    <p className="font-medium text-lg md:text-xl text-[#0E0E2C] flex items-center">Check my Services <img src="/asset/icon/arrow-right-blue.png" className="ml-2" alt="" /></p>
                </div>
            </div>
            <div>
                <img src="/asset/hero-m.png" className="lg:hidden block w-[90vw] md:w-[500px] lg:mb-0 mb-6" alt="" />
                <img src="/asset/hero.png" className="lg:w-[400px] xl:w-[650px] 2xl:w-max lg:block hidden" alt="" />
            </div>
        </div>
        <Skill />
        </>
    )
}

export default Home;