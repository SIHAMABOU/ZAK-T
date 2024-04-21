
import Card from "react-bootstrap/Card";
import image1 from "../assets/touristique.jpg"
import image2 from "../assets/touriste.jpeg"
import image3 from "../assets/chauff.webp"

function Services() {
  return (
    <section className="">
    <h2 className="text-center text-3xl p-4 font-bold text-amber-400 font-Whisper">
        OUR SERVICES
    </h2>
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 mt-4 mb-4 ">
        <div className="flex justify-center ">
            <Card className="w-80  p-2  bg-white rounded-xl transform transition-all hover:translate-y-2 hover:translate-x-2 duration-300 shadow-lg hover:shadow-2xl">
                <Card.Img
                    variant="top"
                    src={image1}
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
                    src={image2}
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
                    src={image3}
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
  )
}

export default Services