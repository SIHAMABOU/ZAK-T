import { FaPlane } from "react-icons/fa";
import { RiVipLine } from "react-icons/ri";
import image1 from "../assets/chauffeur.png"

function Choose_Us() {
  return (
    <section className="sm:flex sm:items-center">
    <div className="w-full ">
        <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/2 relative">
                <div className=" bg-[url('./assets/why.jpg')]  bg-cover bg-center h-96">
                    <div className=" absolute top-1/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2  items-center">
                        <div className=" w-20 h-20 bg-[#e8604c] rounded-full flex justify-center items-center animate-spin mr-4">
                            <p className="text-white font-Whisper  text-center p-1 text-md">
                                Travels & Tours
                            </p>
                            <div className=" rotate-90 w-10 h-8 -translate-x-20 bg-[url('./assets/togle.png')] bg-no-repeat "></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:w-1/2 relative bg-[#313041] ">
                <div className="bg-[url('./assets/back.png')] absolute bottom-0 right-0 h-96 opacity-20 lg:w-96 w-80 "></div>
                <h1 className="m-3 text-2xl font-bold text-center bg-gradient-to-br from-orange-400 to-yellow-800 text-transparent bg-clip-text">
                    Why Choose ZAK-TRANSPORT?
                </h1>
                <ul className="m-3">
                    <li className="p-3">
                        <div className="flex">
                            <span className="pr-2 text-[#e8604c]">
                                <RiVipLine size={32} />
                            </span>
                            <p className="font-bold text-white">
                                Customer-First Approach
                            </p>
                        </div>
                        <p className="text-[#a9a8b6] text-xs">
                            Our commitment to customer satisfaction
                            is reflected in positive testimonials,
                            ratings, and reviews from our satisfied
                            customers.
                        </p>
                    </li>
                    <li className="p-3 ">
                        <div className="flex">
                            <span className="pr-2 text-[#e8604c]">
                                <FaPlane size={32} />
                            </span>
                            <p className="font-bold text-white">
                                Luxurious and Comfortable Fleet
                            </p>
                        </div>
                        <p className="text-[#a9a8b6] text-xs">
                            Experience the luxury and comfort of our
                            fleet with spacious interiors,
                            air-conditioning, and special amenities
                            for your journey.
                        </p>
                    </li>
                    <li className="p-3">
                        <div className="flex">
                            <span className="pr-2 ">
                                <img
                                    src={image1}
                                    alt=""
                                    className="bg-[#e8604c]"
                                />
                            </span>
                            <p className="font-bold text-white">
                                Expert Drivers
                            </p>
                        </div>
                        <p className="text-[#a9a8b6] text-xs">
                            Our team of experienced and
                            knowledgeable drivers ensures a
                            professional and friendly service with
                            valuable insights into local attractions
                            and culture.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default Choose_Us