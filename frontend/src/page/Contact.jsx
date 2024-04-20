import axios from 'axios';
import { useState,useEffect } from 'react';

function Contact() {
    const [csrfToken, setCsrfToken] = useState('');
    const [formData, setFormData] = useState({ name: '',phone: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        // Obtenez le token CSRF de votre application Laravel
        axios.get('http://localhost:8000/csrf-token', { withCredentials: true })
            .then(response => {
                setCsrfToken(response.data.csrfToken);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du token CSRF:', error);
            });
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/contact', formData ,{
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                    'Content-Type': 'application/json',

                },
                withCredentials: true,
            });
            console.log('Réponse de la requête:', response.data);

            setResponseMessage(response.data.success);
        } catch (error) {
            setResponseMessage('Une erreur s\'est produite lors de l\'envoi du message.');
        }
    };
    return (
        <>
        <section className="relative h-44">
            <div className="bg-[url('././assets/header.jpg')] h-full bg-cover bg-center">
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <h1 className="text-white text-7xl font-bold font-Whisper">Contact Us</h1>
                </div>
            </div>
        </section>

        <section className="container mx-auto px-4 lg:px-0">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="lg:mt-32 lg:col-span-1">
            <h1 className="font-Whisper text-3xl font-semibold text-[#e8604c]">Talk with our team</h1>
            <p className="text-2xl font-bold text-[#313041] leading-loose tracking-wide">Any Question?</p>
            <p className="text-2xl font-bold text-[#313041] leading-loose tracking-wide">Feel Free to Contact Us</p>
        </div>
        <div className="border-2 lg:col-span-2 m-1">
            {/* Contenu pour la deuxième colonne */}
            <div className="p-3">
                <form onSubmit={handleSubmit} className='grid grid-row '>
                    <div className='flex flex-col lg:flex-row m-3'>
                        <label htmlFor="name" className="block text-lg  leading-6 text-gray-900 m-2 font-serif">Name :</label>
                        <input
                            type="text"
                            className='p-2 border-1 rounded-full m-1 w-80'
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className='flex flex-col lg:flex-row m-3'>
                        <label htmlFor="phone" className="block text-lg font-serif  leading-6 text-gray-900 m-2">Phone :</label>
                        <input
                            type="phone"
                            name="phone"
                            className='p-2 w-80 border-1 rounded-full m-1'
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            required
                        />
                    </div>
                    <div className='flex flex-col lg:flex-row m-3'>
                        <label htmlFor="email" className="block text-lg font-serif  leading-6 text-gray-900 m-2">Email :</label>
                        <input
                            type="email"
                            name="email"
                            className='p-2 border-1 w-80 rounded-full m-1'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className='flex flex-col lg:flex-row m-3'>
                        <label htmlFor="message" className="block text-lg font-serif  leading-6 text-gray-900 m-2">Message:</label>
                        <textarea
                            name="message"
                            className='p-2 border-2 rounded-lg m-1 w-full h-24'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                    <button
                        type='submit'
                        className="ml-8 mt-8 relative border hover:border-yellow-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-44 rounded-md bg-orange-800 p-2 flex justify-center items-center font-extrabold shadow-2xl mb-4"
                    >
                        <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-900 delay-150 group-hover:delay-75"></div>
                        <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-800 delay-150 group-hover:delay-100"></div>
                        <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-700 delay-150 group-hover:delay-150"></div>
                        <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-600 delay-150 group-hover:delay-200"></div>
                        <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-500 delay-150 group-hover:delay-300"></div>
                        <p className="z-10 font-Whisper text-2xl">
                            Send
                        </p>
                    </button> 
                    </div>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </div>
    </div>
</section>


        </>
    );
}

export default Contact;
