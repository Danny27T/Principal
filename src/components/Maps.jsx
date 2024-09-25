import { MapPin } from "lucide-react"; // Importar el ícono de ubicación

const Maps = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 space-y-4 px-4">
      {/* Título de ubicación */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center">
        Ubicación del Consultorio
      </h2>

      {/* Texto con icono de ubicación y estilo degradado */}
      <div className="flex items-center space-x-2 text-base sm:text-lg lg:text-xl text-gray-600">
        <MapPin className="text-red-500" /> {/* Ícono de ubicación */}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Av. Miguel Iturralde 19, Latacunga, Ecuador
        </span>
      </div>

      {/* Mapa de Google */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.3267560726626!2d-78.62054572503486!3d-0.8994057990918893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNTMnNTcuOSJTIDc4wrAzNycwNC43Ilc!5e0!3m2!1ses!2sec!4v1727199038529!5m2!1ses!2sec"
        className="w-full sm:w-3/4 lg:w-2/3 h-64 sm:h-96 lg:h-[600px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="text-center mt-16">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          Realiza tu solicitud de cita
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            completando este formulario
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Maps;