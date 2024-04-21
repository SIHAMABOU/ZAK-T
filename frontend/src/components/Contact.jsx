import { FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Contact() {
  return (
    <section className="flex justify-center">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-7 justify-center">
        <div className="w-72 h-16 rounded-md border-1 border-[#e3e3e3] p-3">
            <div className="flex items-center space-x-2 justify-center text-[#787780]">
                <FaPhoneAlt />
                <span>+212 662252627</span>
            </div>
        </div>
        <div className="w-72 h-16 rounded-md border-1 border-[#e3e3e3]  p-3">
            <div className="flex items-center space-x-2 justify-center text-[#787780]">
                <SiGmail />
                <span>sihamabouelaoula@gmail.com</span>
            </div>
        </div>
        <div className="w-72 h-16 rounded-md border-1 border-[#e3e3e3]  p-3">
            <div className="flex items-center space-x-2 justify-center text-[#787780]">
                <FaTiktok />
                <span>zaktransport</span>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact