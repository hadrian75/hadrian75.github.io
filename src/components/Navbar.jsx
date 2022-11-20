import { useState } from 'react';
import Logo from '../../public/Logo.png'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../Nav.css'
const Navbar = () => {
    const [drop, setDrop] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="bg-[#000] px-24 py-10 flex justify-between">
            <span className='flex items-center'>
                <img src={Logo} alt="" className='w-24 h-24 justify-self-start' />
                <h1 className='text-[18px] text-[#fff]'>Gede <span className='text-Primary'>Hadrian</span></h1>
            </span>
            <ul className="flex items-center text-[18px] font-medium space-x-20 justify-end text-Light">
                <NavLink to="/" className={({ isActive }) => `${isActive ? "bg-Primary text-[#000] pointer-events-none" : ""} hover:bg-Primary px-10 py-2 rounded-full`}>Home</NavLink>
                <li className=" flex flex-col items-center">
                    <button id="dropdownDefault" className="hover:text-[#000] hover:bg-Primary  active:text-[#000]  text-white font-medium text-[18px] px-6 rounded-full py-2 text-center inline-flex items-center" onClick={() => setDrop(!drop)} type="button">Laporan</button>
                    <div id="dropdown" className={` z-10 w-full bg-white rounded divide-y flex justify-center ${drop == false ? "hidden" : ""}`}>
                        <ul className="absolute py-1 px-2 text-[16px] bg-Primary mt-2 rounded-lg text-[#000]" aria-labelledby="dropdownDefault">
                            <li>
                                <a href="/laporan/1" className="block py-2 px-4 ">BAB I</a>
                            </li>
                            <li>
                                <a href="laporan/2" className="block py-2 px-4  ">BAB II</a>
                            </li>
                            <li>
                                <a href="laporan/3" className="block py-2 px-4  ">BAB III</a>
                            </li>
                            <li>
                                <a href="laporan/4" className="block py-2 px-4  ">BAB IV</a>
                            </li>
                        </ul>
                    </div>


                </li>
                <li className="bg-Light  px-10 py-2 rounded-full text-[#000]"><a href="">About Me</a></li>
            </ul>
        </div >
    )
}
export default Navbar;