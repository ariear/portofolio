const ShowProject = () => {
    return (
        <div className="font-pupylinux container mx-auto px-5 py-20">
            <p className="text-[#3B71FE] font-semibold text-xl mb-4 dark:text-white transition-all duration-300" data-aos="fade-right" data-aos-duration="600" data-aos-delay="200">the project i have made</p>
            <p className="text-[#0E0E2C] font-bold text-3xl md:w-[600px] mb-8 dark:text-white transition-all duration-300" data-aos="fade-right" data-aos-duration="500" data-aos-delay="600">projects built with peat and open source</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-14 md:gap-x-5 lg:gap-x-9 xl:gap-x-0 justify-items-center text-[#3B71FE] dark:text-white duration-300 transition-all">
                <div className="group relative" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">
                    <div className="relative">
                    <div className="bg-[#00000083] z-10 absolute left-0 top-0 flex items-center justify-center rounded-lg w-full h-full opacity-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center">
                            <a href="https://github.com/ArieAkbarull/Kasir-comp"><img src="/asset/icon/github-white.png" className="mr-10" alt="" /></a>
                            <img src="/asset/icon/monitor-white.png" alt="" />
                        </div>
                    </div>
                    <img src="/asset/kasir-comp.png" className="mb-3 rounded-lg w-[90vw] md:w-[300px] xl:w-[350px] group-hover:scale-105 transition-all duration-300" alt="" />
                    </div>
                    <p className="font-bold text-lg">Kasir Comp</p>
                </div>
                <div className="group relative" data-aos="fade-down" data-aos-duration="600" data-aos-delay="300">
                    <div className="relative">
                    <div className="bg-[#00000083] z-10 absolute left-0 top-0 flex items-center justify-center rounded-lg w-full h-full opacity-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center">
                            <a href="https://github.com/ArieAkbarull/perpus-stm"><img src="/asset/icon/github-white.png" className="mr-10" alt="" /></a>
                            <img src="/asset/icon/monitor-white.png" alt="" />
                        </div>
                    </div>
                    <img src="/asset/perpus.png" className="mb-3 rounded-lg w-[90vw] md:w-[300px] xl:w-[350px] group-hover:scale-105 transition-all duration-300" alt="" />
                    </div>
                    <p className="font-bold text-lg">Perpus STM</p>
                </div>
                <div className="row-span-2 group relative" data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">
                    <div className="relative">
                    <div className="bg-[#00000083] z-10 absolute left-0 top-0 flex items-center justify-center rounded-lg w-full h-full opacity-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center">
                            <a href="https://github.com/ArieAkbarull/quran-app"><img src="/asset/icon/github-white.png" className="mr-10" alt="" /></a>
                            <a href="https://app-quran.netlify.app/"><img src="/asset/icon/monitor-white.png" alt="" /></a>
                        </div>
                    </div>
                    <img src="/asset/quran-app.png" className="mb-3 rounded-lg w-[90vw] md:w-[300px] xl:w-[350px] group-hover:scale-105 transition-all duration-300" alt="" />
                    </div>
                    <p className="font-bold text-lg">Quran App</p>
                </div>
                <div className="group relative" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">
                    <div className="relative">
                    <div className="bg-[#00000083] z-10 absolute left-0 top-0 flex items-center justify-center rounded-lg w-full h-full opacity-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center">
                            <a href="https://github.com/ArieAkbarull/GoBlog"><img src="/asset/icon/github-white.png" className="mr-10" alt="" /></a>
                            <img src="/asset/icon/monitor-white.png" alt="" />
                        </div>
                    </div>
                    <img src="/asset/goblog.png" className="mb-3 rounded-lg w-[90vw] md:w-[300px] xl:w-[350px] group-hover:scale-105 transition-all duration-300" alt="" />
                    </div>
                    <p className="font-bold text-lg">Go Blog</p>
                </div>
                <div className="group relative" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                    <div className="relative">
                    <div className="bg-[#00000083] z-10 absolute left-0 top-0 flex items-center justify-center rounded-lg w-full h-full opacity-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center">
                            <a href="https://github.com/ArieAkbarull/AnisearchV2"><img src="/asset/icon/github-white.png" className="mr-10" alt="" /></a>
                            <a href="https://anisearchv2.netlify.app/"><img src="/asset/icon/monitor-white.png" alt="" /></a>
                        </div>
                    </div>
                    <img src="/asset/anisearchv2.png" className="mb-3 rounded-lg w-[90vw] md:w-[300px] xl:w-[350px] group-hover:scale-105 transition-all duration-300" alt="" />
                    </div>
                    <p className="font-bold text-lg">AnisearchV2</p>
                </div>
            </div>
            <div className="flex justify-center pt-16">
                <a href="https://github.com/arieakbarull"><button className="border-2 border-[#3B71FE] rounded-md text-[#3B71FE] dark:text-white dark:border-white flex items-center py-2 px-3 font-semibold text-sm group hover:scale-95 transition-all">Explore More Projects <img src="/asset/icon/feather_chevron-right.png" className="ml-2 group-hover:-translate-x-1 transition-all" alt="" /></button></a>
            </div>
        </div>
    )
}

export default ShowProject;