import { motion } from "framer-motion";

const datosImpacto = [
  {
    icon: "💧",
    titulo: "Contaminación del agua",
    descripcion:
      "1 litro de aceite usado puede contaminar hasta 1.000 litros de agua potable.",
  },
  {
    icon: "🐟",
    titulo: "Afecta ecosistemas",
    descripcion:
      "Forma una capa en ríos y mares que reduce oxígeno y luz solar hasta un 80%, afectando peces y plantas.",
  },
  {
    icon: "🚫",
    titulo: "Obstrucción de tuberías",
    descripcion:
      "El aceite en alcantarillado genera malos olores y aumenta costos de mantenimiento hasta un 40%.",
  },
  {
    icon: "♻️",
    titulo: "Reciclaje",
    descripcion:
      "Cada litro reciclado puede convertirse en 0,9 litros de biodiesel, jabón biodegradable o glicerina.",
  },
  {
    icon: "🌱",
    titulo: "Reducción de CO₂",
    descripcion:
      "Reciclar 1 tonelada de aceite evita hasta 3 toneladas de CO₂.",
  },
];

export default function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-start text-center text-white"
      style={{
        backgroundImage:
          "url('https://previews.123rf.com/images/voronin76/voronin761308/voronin76130800185/21350945-crone-of-trees-in-forest-from-below.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 pt-20 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Recolecta tu Aceite Usado ♻️
        </h1>
        <p className="mt-4 text-lg md:text-xl mb-6">
          Ayúdanos a proteger el planeta dando un nuevo uso a tu aceite.
        </p>

        {/* Tarjetas de impacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {datosImpacto.map((dato, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-white/30 hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{dato.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {dato.titulo}
              </h3>
              <p className="text-white/80">{dato.descripcion}</p>
            </motion.div>
          ))}
        </div>

        {/* Beneficios de reciclaje */}
        <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-4">
          ♻️ Reciclaje y beneficios
        </h2>
        <p className="text-white/80 text-lg md:text-xl">
          1 litro de aceite reciclado puede transformarse en 0,9 litros de
          biodiesel (combustible limpio y renovable), jabón biodegradable y
          glicerina. Cada tonelada de aceite reciclado evita la emisión de hasta
          3 toneladas de CO₂ si se convierte en biodiesel. Reciclar aceite ayuda
          a reducir el consumo de combustibles fósiles y la dependencia del
          petróleo.
        </p>
      </div>
      <br />
    </div>
  );
}
