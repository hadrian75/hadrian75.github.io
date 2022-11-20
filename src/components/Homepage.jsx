import { Navbar, Footer } from "./"
import Avatar from '../../public/Avatar.png'
import { AiFillInstagram, AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai'
import CarrouselOne from '../../public/Image/CarrouselOne.png'
import '../Homepage.css'
import { Navigate, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const Homepage = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="h-auto w-full bg-black grid xl:grid-cols-7 sm:grid-rows-2 md:grid-rows-2 xl:grid-rows-1  px-24 py-10 gap-10">
                <div className=" text-white col-span-4 xl:order-first sm:order-last">
                    <h1 className="text-[40px] font-bold">
                        I Gede Hadrian
                    </h1>
                    <h1 className="text-[70px]  font-bold">
                        Tak Kenal Maka <span className="text-Primary">Harus Kenalan</span>
                    </h1>
                    <h1 className="text-[30px] font-semibold"> Kenali Saya <span className="text-Primary">Lebih Jauh</span>
                        <button className="ml-8 px-20 py-3 bg-Primary rounded-full text-[24px] text-black font-bold buttonStyle"><a href="/aboutme">DISINI</a></button>
                    </h1>
                    <span className="flex items-center space-x-5">
                        <a href="https://instagram.com/duriannn._"> <AiFillInstagram className="w-[52px] h-auto hover:text-Primary cursor-pointer" /></a>
                        <a href="https://wa.me/6282247509898?text=Saya%20mau%20kenalan"> <AiOutlineWhatsApp className="w-[48px] h-auto hover:text-Primary cursor-pointer" /></a>
                        <a href="https://github.com/hadrian75"> <AiFillGithub className="w-[48px] h-auto hover:text-Primary cursor-pointer" /></a>
                    </span>
                </div>
                <div className="flex justify-center  bg-Primary blob px-20 col-span-3 xl:order-last sm:order-first">
                    <img src={Avatar} alt="" className="h-[400px] object-cover" />
                </div>
            </div>
            <div className="w-full px-24 flex flex-col py-10">
                <h1 className="text-[32px] font-bold text-center text-black">Apa yang saya kerjakan </h1>
                <h1 className="text-center text-[12px]">Ini Project Token Ticket yang masih dikerjakan hingga sekarang bersama teman teman magang</h1>
                <div className="flex flex-col w-[1400px] h-[600px]  overflow-x-auto overflow-y-hidden  flex-wrap whitespace-nowrap my-10 mx-auto space-x-10">
                    <div className="h-[500px] w-[800px]"><a href="http://localhost:5000"><img src={CarrouselOne} alt="" /></a></div>
                    <div className="h-[500px] w-[800px]"><a href=""><img src={CarrouselOne} alt="" /></a></div>
                    <div className="h-[500px] w-[800px]"><a href=""><img src={CarrouselOne} alt="" /></a></div>
                    <div className="h-[500px] w-[800px]"><a href=""><img src={CarrouselOne} alt="" /></a></div>
                    <div className="h-[500px] w-[800px]"><a href=""><img src={CarrouselOne} alt="" /></a></div>

                </div>
            </div>
            <Footer />
        </div >
    )
}
export default Homepage