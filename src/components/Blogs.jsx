import { blogPosts } from "../data/blogs"; // Importa los datos de los blogs
import { ArrowRight } from "lucide-react"; // Ícono para el enlace

const Blogs = () => {
  return (
    <div className="mt-20 px-4">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Blogs de nuestros Servicios
      </h2>
      <div className="flex flex-wrap justify-center">
        {blogPosts.map((post, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-6 border border-neutral-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">
                {post.title}
              </h3>
              <p className="text-slate-400 mb-6">
                {post.description}
              </p>
              <a
                href={post.link}
                className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors"
              >
                Leer más
                <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
