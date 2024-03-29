import Link from "next/link"
import { FaLinkedin , FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className=" bg-slate-800 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">Yash Panchiwala</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-2xl lg:text-3xl">
                    <Link className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/yash-panchiwala/">
                        <FaLinkedin  />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://yashpanchiwala.vercel.app/">
                        <FaLaptop />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://github.com/Panchiwalayash">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://twitter.com/YashPanchiwala">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </nav>
    )
}