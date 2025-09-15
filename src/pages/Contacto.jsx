import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function Contacto() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2018/05/02/23/00/forest-3369950_1280.jpg')",
      }}
    >
      {/* Div con efecto vidrio */}
      <motion.div
        className="p-10 rounded-2xl bg-white/20 backdrop-blur-md shadow-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">Quieres Aportar Tu Gota de Aceite ♻️</h2>
        <p className="text-white mb-6">Escríbenos directamente por WhatsApp</p>
        <p className="text-white mb-6">escribenos tus datos para hacer la recolección</p>

        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/573128244335"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
        >
          <FaWhatsapp size={24} />
          Enviar Mensaje
        </a>
      </motion.div>
    </div>
  );
}

export default Contacto;
