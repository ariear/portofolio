const Footer = () => {
    return (
        <>
        <footer className="font-pupylinux bg-[#a0a4ab2f] dark:bg-[#262A31] transition-all duration-300">
            <div className="container px-5 mx-auto flex flex-wrap md:justify-evenly xl:justify-between py-10 text-[#0e0e2cc7] dark:text-white duration-300 transition-all">
            <div className="w-[300px]">
                <p className="text-[#3B71FE] dark:text-white font-semibold text-3xl mb-4">ArieAR.</p>
                <p className="">DigitUx is a Digital agencay that create User centred Product that help her client to evolve</p>
            </div>
            <div className="md:block hidden">
                <p className="text-[#0E0E2C] font-semibold text-lg mb-4 dark:text-white transition-all duration-300">About</p>
                <p className=" mb-3">About Us</p>
                <p className=" mb-3">Study Case</p>
                <p className=" mb-3">Blogs</p>
                <p className=" mb-3">Portofolio</p>
                <p className=" mb-3">School</p>
            </div>
            <div className="md:block hidden">
                <p className="text-[#0E0E2C] font-semibold text-lg mb-4 dark:text-white transition-all duration-300">Follow Us</p>
                <p className=" mb-4 flex items-center"><img src="/asset/icon/feather_facebook.png" className="mr-2" alt="" />fb.com/Arie</p>
                <p className=" mb-4 flex items-center"><img src="/asset/icon/feather_instagram.png" className="mr-2" alt="" />@ArieAkbarull</p>
                <p className=" mb-4 flex items-center"><img src="/asset/icon/feather-github.png" className="mr-2" alt="" />@ArieAkbarull</p>
                <p className=" mb-4 flex items-center"><img src="/asset/icon/feather-tele.png" className="mr-2" alt="" />+62-8810-2623-3067</p>
            </div>
            <div className="xl:w-max lg:w-[230px] mt-5 lg:mt-0">
                <p className="text-[#0E0E2C] font-semibold text-lg mb-2 md:mb-4 dark:text-white transition-all duration-300">Get In touch with Us</p>
                <p className=" mb-4">Need Answers? Need help ? Just email us</p>
                <div className="flex border rounded-md bg-white w-max py-2 px-4">
                    <input type="email" className="w-[200px]" placeholder="Your Email" />
                    <img src="/asset/icon/feather_send.png" alt="" />
                </div>
            </div>
            </div>
        </footer>
        <div className="bg-[#0E0E2C] py-4">
        <footer className="font-pupylinux text-white font-medium container mx-auto px-5">
            <p>Created with❤️ by Arie</p>
        </footer>
        </div>
        </>
    )
}

export default Footer;