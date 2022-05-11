const ShowProject = () => {
    return (
        <div className="font-pupylinux container mx-auto px-5 py-20">
            <p className="text-[#3B71FE] font-semibold text-xl mb-4 dark:text-white transition-all duration-300" data-aos="fade-right" data-aos-duration="600" data-aos-delay="200">the project i have made</p>
            <p className="text-[#0E0E2C] font-bold text-3xl md:w-[600px] mb-8 dark:text-white transition-all duration-300" data-aos="fade-right" data-aos-duration="500" data-aos-delay="600">projects built with peat and open source</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-14 md:gap-x-5 lg:gap-x-9 xl:gap-x-0 justify-items-center text-[#3B71FE] dark:text-white duration-300 transition-all">
                <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">
                    <img src="/asset/kasir-comp.png" className="mb-3 rounded-lg w-[90vw] md:w-[350px]" alt="" />
                    <p className="font-bold text-lg">Kasir Comp</p>
                </div>
                <div data-aos="fade-down" data-aos-duration="600" data-aos-delay="300">
                    <img src="/asset/perpus.png" className="mb-3 rounded-lg w-[90vw] md:w-[350px]" alt="" />
                    <p className="font-bold text-lg">Perpus STM</p>
                </div>
                <div className="row-span-2" data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">
                    <img src="/asset/quran-app.png" className="mb-3 rounded-lg w-[90vw] md:w-[350px]" alt="" />
                    <p className="font-bold text-lg">Quran App</p>
                </div>
                <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">
                    <img src="/asset/goblog.png" className="mb-3 rounded-lg w-[90vw] md:w-[350px]" alt="" />
                    <p className="font-bold text-lg">Go Blog</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                    <img src="/asset/kasir-comp.png" className="mb-3 rounded-lg w-[90vw] md:w-[350px]" alt="" />
                    <p className="font-bold text-lg">Kasir Comp</p>
                </div>
            </div>
            <div className="flex justify-center pt-16">
                <a href="https://github.com/arieakbarull"><button className="border-2 border-[#3B71FE] rounded-md text-[#3B71FE] dark:text-white dark:border-white flex items-center py-2 px-3 font-semibold text-sm group hover:scale-95 transition-all">Explore More Projects <img src="/asset/icon/feather_chevron-right.png" className="ml-2 group-hover:-translate-x-1 transition-all" alt="" /></button></a>
            </div>
        </div>
    )
}

export default ShowProject;