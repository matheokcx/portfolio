import { Dispatch } from "react";
import { useInView } from "react-intersection-observer";

// ==============================================


export default function HeroSection({ setActiveSection }: { setActiveSection: Dispatch<React.SetStateAction<string>> }) {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  if (inView) setActiveSection("home");

  return (
    <section id="home" ref={ref} className="w-full flex flex-col items-center gap-6 mt-36 mb-20">
      <h1 className="w-full text-4xl lg:text-5xl font-bold text-center">
          Développeur <span className="bg-gradient-to-br from-blue-600 to-purple-500 inline-block text-transparent bg-clip-text">
            Fullstack
      </span> d'applications</h1>

      <p className="w-full text-md lg:text-lg text-center mt-4">
          Mes missions vont des applications mobiles aux projets web complexes
      </p>


      <img src={`${import.meta.env.BASE_URL}illustration.avif`}
           alt="Illustration"
           className="w-10/12 lg:w-3/4 rounded-3xl mt-6"
      />
    </section>
  );
}
