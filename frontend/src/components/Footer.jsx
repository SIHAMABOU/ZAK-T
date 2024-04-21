import {
    FaFacebook,
    FaInstagram,
    FaTiktok
   
  } from "react-icons/fa";
  const items = [
    { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
    { name: "Tiktok", icon: FaTiktok, link: "https://www.tiktok.com/" },

  ];  
function Footer() {
    return (
        <div >
     
      <div className="relative h-72 overflow-hidden bg-gradient-to-r from-amber-300 to-orange-400 sm:px-20">
  <div className="z-10 flex h-full flex-col items-center justify-center sm:space-y-2">

    <h3 className="text-center text-6xl font-bold text-white font-Whisper">Enjoy Vacation With</h3>
    <img src=".\assets\logo.png" className=" w-64  " alt="omage" />

    <p className=" text-gray-500">©Copyright | ZAK-TRANSPORT  2024. All rights reserveds</p>
    <div className="flex justify-between sm:w-[300px] pt-3 text-2xl space-x-12">
          {items.map((x, index) => {
            return <x.icon key={index} className="hover:text-white" />;
          })}
        </div>
  </div>

  <div className="-z-1 absolute bottom-0 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
  <div className="-z-1 absolute -top-9 left-2/3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
</div>
        </div>
    )
}

export default Footer
