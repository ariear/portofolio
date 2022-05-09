import { services } from "../../data/home/services";

const Services = () => {
    return (
        <div className="font-pupylinux container mx-auto px-5 md:px-8 xl:px-5 py-24">
            <p className="font-semibold text-xl text-[#3B71FE] mb-4" data-aos="fade-right" data-aos-duration="900">The Services We Offers</p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 md:gap-x-9 xl:gap-x-24 gap-y-16">
                <div className="text-[#0E0E2C] font-bold text-[27px] xl:text-[34px] md:col-span-3 lg:col-span-2" data-aos="fade-right" data-aos-delay="500" data-aos-duration="800">
                We offer a variaty of services to help you to grow and build your brand and help you with developing your Products
                </div>
                {
                    services.map((e, index) => 
                        <div key={index} className="flex flex-col justify-between" data-aos="fade-up" data-aos-duration="500" data-aos-delay={index * 200}>
                            <p className="font-bold text-[#3B71FE] text-xl mb-3">{e.title}</p>
                            <p className="text-[#0e0e2c98] mb-3">{e.description}</p>
                            <button className="border-2 rounded border-[#3B71FE] text-[#3B71FE] flex items-center py-2 px-4 font-semibold text-sm w-max group hover:scale-95 transition-all">Learn More <img src="/asset/icon/feather_chevron-right.png" className="ml-1 group-hover:-translate-x-1 transition-all duration-500" alt="" /></button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Services;