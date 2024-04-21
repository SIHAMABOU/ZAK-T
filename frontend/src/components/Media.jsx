import { useState } from "react";
import image1 from "../assets/bg.png"

function Media() {
    const [videoVisible, setVideoVisible] = useState(false);

    const handlePlayClick = () => {
        setVideoVisible(true);
    };
   
  return (
    <section className="relative w-full" style={{ height: "415px" }}>
    {/* Conteneur principal */}
    <div className="w-full h-full">
        {/* Si la vidéo n'est pas encore visible, affiche l'image de fond */}
        {!videoVisible && (
            <div className="relative w-full h-full">
                <img
                    src={image1}
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
  )
}

export default Media