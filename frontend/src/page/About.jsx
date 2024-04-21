import Contacte from "../components/Contact";
import image from "../assets/gallery.png";
import image1 from "../assets/best-price.png";
import image2 from "../assets/payment.png";
import image3 from "../assets/booking.png";
import image4 from "../assets/available.png";
import image5 from "../assets/quality.png";
import image6 from "../assets/ac3.webp";

function About() {
    return (
        <>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 h-auto">
                <div className="flex justify-center items-center bg-gradient-to-r from-amber-300 to-orange-400 order-1">
                    <img src={image} alt="" className="h-96 w-96 " />
                </div>
                <div className="text-center justify-center items-center order-2">
                    <div className="lg:mt-8 lg:mb-8">
                        <h1 className="text-6xl font-serif font-bold">
                            Who we Are?
                        </h1>
                    </div>
                    <div className="text-center">
                        <h2 className="w-full text-sm font-bold lg:mb-2">
                            <span className="text-[#FF9F1C] font-custom text-xl">
                                ZAK-TRANSPORT
                            </span>
                            <span className="font-Whisper text-3xl ">
                                {" "}
                                Touristique VIP
                            </span>
                        </h2>
                        <p>
                            Votre agence de transport touristique basée propose
                            une gamme de services pour répondre aux besoins de
                            nos clients. Nous assurons des transferts et des
                            navettes depuis l'aéroport jusqu'à votre destination
                            desiré (riad ou hôtel.) De plus, nous offrons une
                            variété d'excursions et de circuits pour vous faire
                            découvrir les magnifiques paysages du Maroc.
                        </p>
                    </div>
                </div>
            </div>
            <h2 className="text-center text-3xl p-4 font-bold font-Whisper text-amber-400">
                OUR ADVENTAGES
            </h2>
            <div className="min-h-screen bg-[url('./assets/transfA.jpg')] bg-cover bg-fixed opacity-65">
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-20  lg:pt-28">
                    <div className="text-center text-white font-bold text-3xl lg:text-xl border-gray-100  flex flex-col justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-10 m-9 p-2">
                        <div className="w-20 ">
                            <img src={image1} alt="" />
                        </div>
                        <div>
                            <p>Fixed Price</p> <p>Our prices are fixed</p>
                        </div>
                    </div>
                    <div className="text-center text-white font-bold text-3xl lg:text-xl border-gray-100 flex flex-col justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-10 m-9 p-2">
                        <div className="w-20 ">
                            <img src={image2} alt="" />
                        </div>
                        <div>
                            <p>Easy cash payment</p>{" "}
                            <p>Payment at the reception </p>
                        </div>
                    </div>
                    <div className="text-center text-white font-bold text-3xl lg:text-xl border-gray-100 flex flex-col justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-10 m-8 p-2">
                        <div className="w-20 ">
                            <img src={image3} alt="" />
                        </div>
                        <div>
                            <p>Easy Booking</p>{" "}
                            <p>Your transfer is booked and confirmed online</p>
                        </div>
                    </div>
                    <div className="text-center text-white font-bold text-3xl lg:text-xl border-gray-100 flex flex-col justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-10 m-8 p-2">
                        <div className="w-20 ">
                            <img src={image4} alt="" />
                        </div>
                        <div>
                            <p>Availability 24/7</p>{" "}
                            <p>We are at your service 24 hours / 7days</p>
                        </div>
                    </div>
                    <div className="text-center text-white font-bold text-3xl lg:text-xl border-gray-100 flex flex-col justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-10 m-8 p-2">
                        <div className="w-20 ">
                            <img src={image5} alt="" />
                        </div>
                        <div>
                            <p>Highly Qualified Service</p>{" "}
                            <p>
                                Trust us to deliver the quality service you
                                deserve
                            </p>
                        </div>
                    </div>
                    <div className="text-center text-white font-bold text-3xl lg:text-xl border-gray-100 flex flex-col justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-10 m-8 p-2">
                        <div className="w-20 ">
                            <img src={image6} alt="" />
                        </div>
                        <div>
                            <p className="">Competent chauffeurs</p>{" "}
                            <p>Punctual to meet your expectations</p>
                        </div>
                    </div>
                </div>
            </div>
            <Contacte />
        </>
    );
}

export default About;
