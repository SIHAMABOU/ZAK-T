import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-full opacity-75"
          src="./src/assets/img1.jpg" // Assurez-vous du chemin correct de l'image
          alt="First slide"
        />
        <Carousel.Caption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <Slide right>
          <h1 className="text-sm  lg:text-4xl font-semibold text-black font-Kaushan shadow-lg">
  BIENVENUE CHEZ <span className='bg-orange-600 text-transparent bg-clip-text'>ZAK-TRANSPORT</span>  <br />
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
        <Carousel.Caption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <Slide right>
          <h1 className="text-sm  lg:text-4xl font-semibold text-black font-Kaushan shadow-lg">
  BIENVENUE CHEZ <span className='bg-orange-600 text-transparent bg-clip-text'>ZAK-TRANSPORT</span>  <br />
  <span className="bg-gradient-to-br from-orange-700 to-yellow-400 text-transparent bg-clip-text font-bold">
  L'excellence en mouvement
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
  BIENVENUE CHEZ <span className='bg-orange-600 text-transparent bg-clip-text'>ZAK-TRANSPORT</span>  <br />
  <span className="bg-gradient-to-br from-orange-700 to-yellow-400 text-transparent bg-clip-text font-bold ">
  Votre partenaire de luxe pour découvrir le Maroc en toute sérénité
  </span>
</h1>
          </Slide>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Ajoutez d'autres Carousel.Items au besoin */}
    </Carousel>
  );
}

export default Home;
{/* <h3 className="absolute text-white text-center text-3xl font-bold md:text-5xl ">
                <br /> 
                <span className="bg-gradient-to-br from-red-500 to-purple-600 text-transparent bg-clip-text ">ZAKAIA</span>
              </h3> */}