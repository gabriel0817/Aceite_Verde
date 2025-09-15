import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-2 mt-auto">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-gray-400 mt-1 text-sm">
                        Reciclamos aceite usado para proteger el planeta ♻️
                    </p>
                </div>

                <div className="flex gap-4">
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-500 transition"
                    >
                        <FaFacebook size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition"
                    >
                        <FaInstagram size={20} />
                    </a>
                    <a
                        href="https://wa.me/573001112233"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition"
                    >
                        <FaWhatsapp size={20} />
                    </a>
                </div>
            </div>
            <div className="mt-3 text-center text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} Aceite Verde. Todos los derechos
                reservados.
            </div>
        </footer>
    );
}
