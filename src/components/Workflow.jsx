import { CheckCircle2 } from "lucide-react";
import ServiciosOdon from "../assets/ServiciosOdon.jpg";
import { checklistItems } from "../constants";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Descubre sobre{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          nuestros Servicios
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 mt-12">
          <img src={ServiciosOdon} alt="Servicios" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
                {/* Agrega el enlace "Conoce más" */}
                <Link 
                  to={`/ListaBlogs/${item.link.replace(/ /g, '')}`} 
                  className="text-orange-500 hover:underline mt-2 block"
                >
                  Conoce más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;


// import { CheckCircle2 } from "lucide-react";
// import ServiciosOdon from "../assets/ServiciosOdon.jpg";
// import { checklistItems } from "../constants";
// import { Link } from "react-router-dom"; // Asumiendo que usas react-router-dom

// const Workflow = () => {
//   return (
//     <div className="mt-20">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
//         Descubre sobre{" "}
//         <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
//           nuestros Servicios
//         </span>
//       </h2>
//       <div className="flex flex-wrap justify-center">
//         <div className="p-2 w-full lg:w-1/2 mt-12">
//           <img src={ServiciosOdon} alt="Servicios" />
//         </div>
//         <div className="pt-12 w-full lg:w-1/2">
//           {checklistItems.map((item, index) => (
//             <div key={index} className="flex mb-12">
//               <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
//                 <CheckCircle2 />
//               </div>
//               <div>
//                 <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
//                 <p className="text-md text-neutral-500">{item.description}</p>
//                 {/* Aquí agregamos el enlace "Conoce más" */}
//                 <Link 
//                   to={`/blogs/${item.title.toLowerCase().replace(/ /g, '-')}`} 
//                   className="text-orange-500 hover:underline"
//                 >
//                   Conoce más
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workflow;