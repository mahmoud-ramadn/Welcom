import Image from "next/image"
import logo from '@/public/logo.webp';
import Link from "next/link";

function TheFooter() {

    const NavLinks = [
        {
            id: 1,
            title: 'Features',
            path: '/'
        },
        {
            id: 2,
            title: 'Pricing',
            path: '/'
        },
        {
            id: 3,
            title: 'Events',
            path: '/'
        },
        {
            id: 4,
            title: 'About',
            path: '/'
        },
        {
            id: 5,
            title: 'Blog',
            path: '/'
        },
    ]


    return (
        <header className=" border-b border-gray-500   md:px-20">
            <div className=" container  py-5 flex items-center     justify-between ">
                <Image src={logo} alt="log" loading='lazy' className=" lg:scale-100 scale-95" />
                <ul className=" md:flex hidden items-center lg:gap-x-9 md:gap-x-3  lg:text-base text-sm ">
                    {
                        NavLinks.map((itme, index) => (
                            <li key={index} className=" hover:text-yellow-400 cursor-pointer transition-colors duration-150" >{itme.title}</li>
                        ))
                    }

                </ul>
                <div className=" flex items-center md:space-x-6  space-x-3">
                    <Link href='#' className=" md:text-base text-sm hover:text-yellow-400 transition-colors duration-150">Support</Link>
                    <Link href='#' className=" md:text-base text-sm hover:text-yellow-400 transition-colors duration-150">Login</Link>
                    <button className="  rounded-full bg-purple-700  hover:bg-purple-800 transition-colors duration-150  md:py-4 py-2 md:px-6 px-3">
                        Demo
                    </button>



                </div>
            </div>
        </header>
    )
}
export default TheFooter
