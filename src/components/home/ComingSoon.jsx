const ComingSoon = () => {
    return (
        <div className="py-10">
            <p className="font-bold text-2xl text-[#0E0E2C] dark:text-white mb-8">Coming Soon</p>
            <div className="flex flex-wrap items-center justify-center">
                <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="150"><img src="/asset/logo/nextjs-coming.png" className="mr-8 hover:scale-125 hover:rotate-[360deg] duration-500 transition-all" alt="" /></div>
                <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="250"><img src="/asset/logo/rn-coming.png" className="hover:scale-125 hover:rotate-[360deg] duration-500 transition-all" alt="" /></div>
            </div>
        </div>
    )
}

export default ComingSoon;