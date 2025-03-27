export default function HeroSection () {
  return (
    <section className="w-full flex flex-col items-center gap-10 mt-36 mb-20">
      <h1 className="w-3/5 text-5xl font-bold text-center">Transform Your <span className="bg-gradient-to-br from-blue-600 to-purple-500 inline-block text-transparent bg-clip-text">Ideas</span> into <span className="bg-gradient-to-tl from-blue-500 to-purple-700 inline-block text-transparent bg-clip-text">High-Performance</span> Web Apps</h1>
      <p className="text-lg text-center mt-4">I help businesses build scalable, fast, and intuitive digital experiences using Next.js & TypeScript.</p>
      <div className="flex justify-center mt-6 mb-20">
        <a href="#contact" className="bg-gradient-to-t from-purple-600 to-blue-800 text-white py-3 px-6 rounded-2xl text-lg font-bold transition-transform duration-1500 hover:-translate-y-2 hover:scale-105">
            Let's Work Together
        </a>
      </div>
      <img src="/illustration.avif" alt="Illustration" className="w-10/12 lg:w-3/4 rounded-3xl" />
    </section>
  );
}
