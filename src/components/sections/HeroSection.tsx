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
      <h1 className="w-full text-4xl lg:text-5xl font-bold text-center">Transformons vos <span className="bg-gradient-to-br from-blue-600 to-purple-500 inline-block text-transparent bg-clip-text">idées</span> en applications web <span className="bg-gradient-to-tl from-blue-500 to-purple-700 inline-block text-transparent bg-clip-text">performantes</span></h1>
      <p className="w-full text-md lg:text-lg text-center mt-4">J’aide les entreprises à créer des expériences numériques, rapides et intuitives avec Next.js & TypeScript.</p>
      <div>
        <div className="flex justify-center mt-6 mb-20">
          <a href="https://fr.fiverr.com/users/matheo_md/seller_dashboard" target="_blank" className="bg-gradient-to-br from-purple-700 to-blue-800 text-white py-3 px-6 rounded-2xl text-lg font-bold transition-transform duration-1500 hover:-translate-y-2 hover:scale-105">
            Travaillons ensemble
          </a>
        </div>
      </div>
      <img src={`${import.meta.env.BASE_URL}illustration.avif`} alt="Illustration" className="w-10/12 lg:w-3/4 rounded-3xl" />
    </section>
  );
}
