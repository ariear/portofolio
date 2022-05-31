import { useState } from "react"

const Certificate = () => {
    const [certificate ] = useState([
        {
            img: 'https://www.sololearn.com/certificates/course/en/25809801/1024/landscape/png'
        },
        {
            img: 'https://www.sololearn.com/Certificate/1141-25809801/jpg/'
        },
        {
            img: 'https://www.sololearn.com/Certificate/1023-25809801/jpg/'
        },
        {
            img: 'https://www.sololearn.com/Certificate/1162-25809801/jpg/'
        },
        {
            img: 'https://www.sololearn.com/Certificate/1014-25809801/jpg/'
        },
        {
            img: '/asset/git-prograte-certificate.png'
        }
    ])

    return (
        <div className="font-pupylinux pt-16 w-[90vw] relative md:container mx-auto">
            <p className="dark:text-white text-center text-3xl font-medium mb-10">My Certificate</p>
            <div className="flex items-center justify-center flex-wrap">
            {
                certificate.map((e, index) =>                     
                        <a href={e.img} data-aos="fade-right" data-aos-duration="500" data-aos-delay={index * 200} key={index}>
                            <img src={e.img} className="w-[90vw] md:w-[300px] border box-content shadow rounded-lg md:mx-2 mb-5 transition-all duration-300 hover:shadow-lg hover:scale-105" alt="" />
                        </a>
                        )
                    }
            </div>
        </div>
    )
}

export default Certificate