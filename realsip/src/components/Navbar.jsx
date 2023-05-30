import  {useState} from 'react'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'
 
const Navbar = () =>
{
    const [nav,setNav] = useState(true)

    const handleNav = () =>
    {
        setNav(!nav)
    }




    return (
        
         <div className="text-black  flex justify-between items-center h-24 max-w-[1240px] mx-auto px-2" >
            <h1 className="w-full text-3xl font-bold text-white ">SPORTS ORGANISER.</h1>
            <ul className="hidden"  >
            <button className="p-4">HOME </button>
                <button className="p-4">SPORTS</button>
                <button className="p-4">NCC</button>
                
                <button className="p-4">CONTACT</button>
            </ul>
            <div onClick={handleNav} className="block ">
                {!nav ? <AiOutlineClose size={35}/> :  <AiOutlineMenu size={25} />}
               
            </div>
           
            <div className={!nav ? "fixed left-0 top-0 w-[30%] h-screen border-r border-r-gray-200 bg-stone-200 ease-in-out duration-500" : "fixed left-[-100%]  h-screen ease-in duration-500"}>
                <h1 className="w-full text-3xl font-bold text-stone-600 m-4 pl-20 pt-4">SPORTS ORGANISER</h1>
                <ul className="uppercase p-4">
                <button className="p-4  block border-b w-[100%] border-black  bold text-xl font-bold"> HOME </button>
                <button className="p-4 block border-b w-[100%] border-black text-xl font-bold">SPORTS</button>     
                <button className="p-4 block border-b w-[100%] border-black text-xl font-bold">NCC</button>
                <button className="p-4 block border-b w-[100%] border-black text-xl font-bold">CONTACT</button>
                </ul>
            </div>
       
          </div>
        
    );
};
export default Navbar;