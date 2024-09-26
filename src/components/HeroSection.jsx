import consultorio from "../assets/consultorio.jpg";
import dental from "../assets/dental.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-0">

      <div className="mb-28">
        {/* Redes Sociales */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 mt-8 space-y-4 sm:space-y-0">
          {/* Facebook */}
          <a href="https://www.facebook.com/tuconsultorio" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <i className="bi bi-facebook text-1xl sm:text-1xl text-blue-600"></i>
            <span className="text-zinc-400 text-sm sm:text-base">Facebook</span>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/tuconsultorio" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <i className="bi bi-instagram text-1xl sm:text-1xl text-pink-600"></i>
            <span className="text-zinc-400 text-sm sm:text-base">Instagram</span>
          </a>
          {/* Teléfono */}
          <a href="tel:+593123456789" className="flex items-center space-x-2">
            <i className="bi bi-telephone text-1xl sm:text-1xl text-green-600"></i>
            <span className="text-zinc-400 text-sm sm:text-base">+593 123 456 789</span>
          </a>
          {/* Correo */}
          <a href="mailto:consultorio@odontologia.com" className="flex items-center space-x-2">
            <i className="bi bi-envelope text-1xl sm:text-1xl text-red-600"></i>
            <span className="text-zinc-400 text-sm sm:text-base">consultorio@odontologia.com</span>
          </a>
        </div>
      </div>


      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Conozca sobre nosotros y
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          nuestros servicios
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Nos especializamos en brindar atención odontológica de calidad,
        con un enfoque personalizado, herramientas y conocimientos de vanguardia.
        Nuestro compromiso es cuidar tu sonrisa y bienestar dental.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="/infocontacto"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-center"
        >
          Contáctanos
        </a>
        <a href="/testimonials" className="py-3 px-4 mx-3 rounded-md border text-center">
          Valoraciones
        </a>
      </div>

      <div className="flex mt-10 justify-center">

        <img
          src={consultorio}
          alt="Consultorio"
          className="rounded-lg w-1/2 border-2 border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
        <img
          src={dental}
          alt="Dental"
          className="rounded-lg w-1/2 border-2 border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />

        {/* <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border-4 border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border-4 border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

      </div>
    </div>
  );
};

export default HeroSection;
