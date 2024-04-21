import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { FaPlane } from "react-icons/fa";
import { RiVipLine } from "react-icons/ri";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Home() {
    const [videoVisible, setVideoVisible] = useState(false);

    const handlePlayClick = () => {
        setVideoVisible(true);
    };
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <section>
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    interval={2000}
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-full opacity-75"
                            src="./src/assets/transfA.jpg" // Assurez-vous du chemin correct de l'image
                            alt="First slide"
                        />
                        <Carousel.Caption className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                            <Slide right>
                                <h1 className="text-sm  lg:text-4xl font-semibold text-black font-Kaushan shadow-lg">
                                    BIENVENUE CHEZ{" "}
                                    <span className="bg-orange-600 text-transparent bg-clip-text">
                                        ZAK-TRANSPORT
                                    </span>{" "}
                                    <br />
                                    <span className="bg-gradient-to-br from-orange-700 to-yellow-400 text-transparent bg-clip-text font-bold">
                                        Sécurité et Confort
                                    </span>
                                </h1>
                            </Slide>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-full opacity-75"
                            src="./src/assets/img1.jpg" // Assurez-vous du chemin correct de l'image
                            alt="First slide"
                        />
                        <Carousel.Caption className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                            <Slide right>
                                <h1 className="text-sm  lg:text-4xl font-semibold text-black font-Kaushan shadow-lg">
                                    BIENVENUE CHEZ{" "}
                                    <span className="bg-orange-600 text-transparent bg-clip-text">
                                        ZAK-TRANSPORT
                                    </span>{" "}
                                    <br />
                                    <span className="bg-gradient-to-br from-orange-700 to-yellow-400 text-transparent bg-clip-text font-bold">
                                        Sécurité et Confort
                                    </span>
                                </h1>
                            </Slide>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-full opacity-75"
                            src="./src/assets/Vito.jpg" // Assurez-vous du chemin correct de l'image
                            alt="First slide"
                        />
                        <Carousel.Caption className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                            <Slide right>
                                <h1 className="text-sm  lg:text-4xl font-semibold text-black font-Kaushan shadow-lg">
                                    BIENVENUE CHEZ{" "}
                                    <span className="bg-orange-600 text-transparent bg-clip-text">
                                        ZAK-TRANSPORT
                                    </span>{" "}
                                    <br />
                                    <span className="bg-gradient-to-br from-orange-700 to-yellow-400 text-transparent bg-clip-text font-bold">
                                        L excellence en mouvement
                                    </span>
                                </h1>
                            </Slide>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-full opacity-75"
                            src="./src/assets/img.jpg" // Assurez-vous du chemin correct de l'image
                            alt="Second slide"
                        />
                        <Carousel.Caption className="absolute lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 text-center w-full ">
                            <Slide right>
                                <h1 className="text-sm  lg:text-4xl font-semibold text-black font-Kaushan shadow-lg">
                                    BIENVENUE CHEZ{" "}
                                    <span className="bg-orange-600 text-transparent bg-clip-text">
                                        ZAK-TRANSPORT
                                    </span>{" "}
                                    <br />
                                    <span className="bg-gradient-to-br from-orange-700 to-yellow-400 text-transparent bg-clip-text font-bold ">
                                        Votre partenaire de luxe pour découvrir
                                        le Maroc en toute sérénité
                                    </span>
                                </h1>
                            </Slide>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Ajoutez d'autres Carousel.Items au besoin */}
                </Carousel>
            </section>

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
                                src="./src/assets/transfert.webp"
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
                                src="./src/assets/transfert.webp"
                                alt=""
                                className="lg:h-72 pl-8 w-auto "
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <h2 className="text-center text-3xl p-4 font-bold text-amber-400 font-Whisper">
                    OUR SERVICES
                </h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 mt-4 mb-4 ">
                    <div className="flex justify-center ">
                        <Card className="w-80  p-2  bg-white rounded-xl transform transition-all hover:translate-y-2 hover:translate-x-2 duration-300 shadow-lg hover:shadow-2xl">
                            <Card.Img
                                variant="top"
                                src="./src/assets/touristique.jpg"
                                className="h-40 object-cover rounded-xl"
                            />
                            <Card.Body>
                                <Card.Title className="font-bold text-lg p-2 text-yellow-800">
                                    TRANSFERT AÉROPORT
                                </Card.Title>
                                <Card.Text className="text-sm text-gray-600">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the cards
                                    content.
                                </Card.Text>
                                <div className="p-4">
                                    <a
                                        href=""
                                        role="button"
                                        className="text-white bg-yellow-600 px-3 py-2 rounded-md hover:bg-yellow-500"
                                    >
                                        Plus details
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="flex justify-center">
                        <Card className="w-80 p-2 bg-white lg:-translate-y-7 rounded-xl  transform transition-all hover:translate-y-2 hover:translate-x-2 duration-300 shadow-lg hover:shadow-2xl">
                            <Card.Img
                                variant="top"
                                src="./src/assets/touriste.jpeg"
                                className="h-40 object-cover rounded-xl"
                            />
                            <Card.Body>
                                <Card.Title className="font-bold text-lg p-2 text-yellow-800">
                                    TRANSPORT TOURISTIQUE
                                </Card.Title>
                                <Card.Text className="text-sm text-gray-600">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the cards
                                    content.
                                </Card.Text>
                                <div className="p-4">
                                    <a
                                        href=""
                                        role="button"
                                        className="text-white bg-yellow-600 px-3 py-2 rounded-xl hover:bg-yellow-500"
                                    >
                                        Plus details
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="flex justify-center">
                        <Card className="w-80 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 hover:translate-x-2 duration-300 shadow-lg hover:shadow-2xl">
                            <Card.Img
                                variant="top"
                                src="./src/assets/chauff.webp"
                                className="h-40 object-cover rounded-xl"
                            />
                            <Card.Body>
                                <Card.Title className="font-bold text-lg p-2 text-yellow-800">
                                    CHAUFFEUR PRIVÉ
                                </Card.Title>
                                <Card.Text className="text-sm text-gray-600">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the cards
                                    content.
                                </Card.Text>
                                <div className="p-4">
                                    <a
                                        href=""
                                        role="button"
                                        className="text-white bg-yellow-600 px-3 py-2 rounded-md hover:bg-yellow-500"
                                    >
                                        Plus details
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="relative w-full" style={{ height: "415px" }}>
                {/* Conteneur principal */}
                <div className="w-full h-full">
                    {/* Si la vidéo n'est pas encore visible, affiche l'image de fond */}
                    {!videoVisible && (
                        <div className="relative w-full h-full">
                            <img
                                src="./src/assets/bg.png"
                                alt="Background"
                                className="w-full h-full bg-cover"
                            />
                            {/* Bouton de lecture personnalisé */}

                            <button
                                className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center text-white w-20 h-20 rounded-full transition-all duration-300 ease-in-out bg-gradient-to-br from-orange-500 to-red-600 hover:scale-125 focus:scale-125 hover:shadow-md shadow-2xl"
                                onClick={handlePlayClick}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-full animate-ping opacity-25"></div>
                                <svg
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    width="26px"
                                >
                                    <path
                                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Si la vidéo est visible, affiche l'iframe de la vidéo YouTube */}
                    {videoVisible && (
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/TPHwUGTxgiw?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </section>

            <section className="sm:flex sm:items-center">
                <div className="w-full ">
                    <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-1/2 relative">
                            <div className=" bg-[url('././assets/why.jpg')]  bg-cover bg-center h-96">
                                <div className=" absolute top-1/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2  items-center">
                                    <div className=" w-20 h-20 bg-[#e8604c] rounded-full flex justify-center items-center animate-spin mr-4">
                                        <p className="text-white font-Whisper  text-center p-1 text-md">
                                            Travels & Tours
                                        </p>
                                        <div className=" rotate-90 w-10 h-8 -translate-x-20 bg-[url('././assets/togle.png')] bg-no-repeat "></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/2 relative bg-[#313041] ">
                            <div className="bg-[url('././assets/back.png')] absolute bottom-0 right-0 h-96 opacity-20 lg:w-96 w-80 "></div>
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
                                                src="./src/assets/chauffeur.png "
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

            <section className="bg-neutral-100">
                <div className="text-center p-3">
                    <h2 className="text-2xl font-Whisper">Featured Tours</h2>
                    <h1 className="text-3xl font-dmserif font-bold">
                        Post Popular Tours
                    </h1>
                </div>
                <div className="flex min-h-screen items-center justify-center p-4">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-orange-800 shadow-2xl">
                            <div className="h-96 w-72">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="./src/assets/kech.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">
                                    Marrakech City
                                </h1>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-orange-800  shadow-2xl">
                            <div className="h-96 w-72">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="./src/assets/aga.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">
                                    Agadir City
                                </h1>
                                {/* <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-orange-800   ">
                            <div className="h-96 w-72">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="./src/assets/casa.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">
                                    Casablanca City
                                </h1>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-orange-800  shadow-2xl">
                            <div className="h-96 w-72">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="./src/assets/fes.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">
                                    Fes City
                                </h1>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-orange-800 shadow-2xl">
                            <div className="h-96 w-72">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="./src/assets/tanger.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">
                                    Tanger City
                                </h1>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-orange-800 shadow-2xl">
                            <div className="h-96 w-72">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                    src="./src/assets/sahara.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">
                                    Sahara City
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
        </>
    );
}

export default Home;
