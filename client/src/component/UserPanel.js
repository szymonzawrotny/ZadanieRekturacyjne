import {useState } from 'react';
//import "./userpanel.scss";  if we prefer scss
import 'tailwindcss/tailwind.css'

const UserPanel = ()=>{

    const [isActive,setIsActive] = useState(false)

    return(
        <>
            <div className={`flex w-[420px] h-[80px] select-none ${isActive ? "flex-row-reverse" : "flex-row"}`}> 
                <div className="flex-shrink-0 w-[80px]">
                    <div className="relative w-full h-full rounded-full">
                        <img
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full h-auto" 
                            src="/ellipse.png" 
                            alt="zdjęcie użytkownika" />
                        <div
                            className="absolute bottom-0 right-[-3px] w-[25px] h-[25px] rounded-full border-[3px] border-white after:content-[''] after:absolute after:inset-0"
                            style={{
                                backgroundImage: "url('/component.png')",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        ></div>
                        <div
                            className="absolute bottom-0 right-[-50%] font-bold bg-gradient-to-r from-[#7ce0dc] via-[#6999d3] to-[#6588cf] text-transparent bg-clip-text before:content-[attr(data-number)]"
                        >4881</div>
                    </div>
                </div>
                <div className="flex-grow flex flex-col justify-start">
                    <div className="flex items-end pl-4 font-bold">
                        <div className="tracking-wide">Anna Effective</div>
                        <div
                            style={{
                                backgroundImage: "url('/verify.png')",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }} 
                            className="ml-2 w-5 h-5"></div>
                    </div>
                    <div className="pl-4">Double your income with me!</div>
                </div>
                <div className={`flex-shrink-0 w-[80px] flex items-center ${isActive ? "justify-start" : "justify-end"}`}>
                    <div
                        style={{
                            backgroundImage: "url('/menu.png')",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }} 
                        className="relative w-1/2 h-1/2"></div>
                </div>
            </div>
            <button 
                className="mt-4 px-4 py-2 border-2 border-gray-900 bg-transparent uppercase tracking-wider transition-transform transform hover:scale-105 hover:rotate-3" 
                onClick={() => setIsActive(!isActive)}>
                    change!
            </button>
        </>
    )
}
export default UserPanel;