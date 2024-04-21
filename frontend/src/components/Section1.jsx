
import { Link } from "react-router-dom";
import image1 from "../assets/transfert.webp"

function Section1() {
  return (
    <section className=" mx-auto">
    <div className="bg-gray-100 lg:container">
        <h3 className="text-center text-xl p-3 font-bold text-amber-400 ">
            ZAK-TRANSPORT{" "}
            <span className="font-Whisper text-black text-2xl">
                TOURISTIQUE VIP
            </span>
        </h3>
        <div className="lg:flex m-1">
            <div className="lg:hidden flex flex-col justify-center items-center">
                <img
                    src={image1}
                    alt=""
                    className="lg:h-72 rounded-xl  shadow-2xl w-8/12"
                />
            </div>
            <div className="lg:w-1/2 ">
                <div className="hidden lg:block absolute w-16 left-2/4 lg:h-72 h-44 bg-gray-100 transform skew-x-12"></div>
                <div className="w-full flex flex-col justify-center items-center">
                    <p className="text-center pr-6 pt-4 font-mono">
                        Our tourist transport agency offers
                        high-quality service to enable you to
                        explore the treasures of the region,
                        including the Sahara Desert. Our primary
                        commitment is to ensure the satisfaction and
                        safety of our customers, with a focus on
                        punctuality and reliability
                    </p>
                    <Link
                        to="/about"
                        className="mt-8 relative border hover:border-yellow-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-orange-800 p-2 flex justify-center items-center font-extrabold shadow-2xl mb-4"
                    >
                        <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-900 delay-150 group-hover:delay-75"></div>
                        <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-800 delay-150 group-hover:delay-100"></div>
                        <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-700 delay-150 group-hover:delay-150"></div>
                        <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-600 delay-150 group-hover:delay-200"></div>
                        <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-500 delay-150 group-hover:delay-300"></div>
                        <p className="z-10 font-Whisper text-2xl">
                            Discover More
                        </p>
                    </Link>
                </div>
            </div>
            {/* <div className="absolute items-center rounded-2xl bg-gradient-to-b from-blue-500 to-blue-700 top-0 bottom-0 mx-10 w-90% min-w-600px"></div> */}
            <div className="w-full lg:w-1/2 hidden lg:block ">
                <img
                    src={image1}
                    alt=""
                    className="lg:h-72 pl-8 w-auto "
                />
            </div>
        </div>
    </div>
</section>
  )
}

export default Section1