import { useState } from "react";
import { Carousel } from "react-bootstrap";
import {  Slide, Zoom } from "react-awesome-reveal";
import image1 from "../assets/transfA.jpg"
import image2 from "../assets/img1.jpg"
import image3 from "../assets/Vito.jpg"
import image4 from "../assets/img.jpg"
function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
  return (
    <section>
    <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={2000}
    >
        <Carousel.Item>
            <img
                className="d-block w-full opacity-75"
                src= {image1} 
                alt="First slide"
            />
            <Carousel.Caption className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                <Zoom right>
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
                </Zoom>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-full opacity-75"
                src={image2} // Assurez-vous du chemin correct de l'image
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
                src={image3} // Assurez-vous du chemin correct de l'image
                alt="First slide"
            />
            <Carousel.Caption className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                <Zoom right>
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
                </Zoom>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-full opacity-75"
                src={image4}// Assurez-vous du chemin correct de l'image
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
  )
}

export default Slider