const ComingSoon = () => {
    return (
        <div className="py-10">
            <p className="font-bold text-2xl text-[#0E0E2C] mb-8">Coming Soon</p>
            <div className="flex flex-wrap items-center justify-center">
                <img src="/asset/logo/nextjs-coming.png" className="mr-8 hover:scale-125 hover:rotate-[360deg] duration-500 transition-all" alt="" />
                <img src="/asset/logo/rn-coming.png" className="hover:scale-125 hover:rotate-[360deg] duration-500 transition-all" alt="" />
            </div>
        </div>
    )
}

export default ComingSoon;