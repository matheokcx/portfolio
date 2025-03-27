export default function Header () {
  return (
    <header className="w-screen flex justify-between items-center p-10">
      <div className="flex gap-32">
        <a href="index.html" className="text-2xl font-extrabold">
          Mathéo D.
        </a>
      </div>
      <nav className="hidden lg:flex items-center gap-20">
        <a href="#about" className="text-md font-semibold">My story</a>
        <a href="#skills" className="text-md font-semibold">Skills</a>
        <a href="#projets" className="text-md font-semibold">Projects</a>
        <button className="w-fit px-4 h-12 rounded-full font-bold bg-gradient-to-br from-[#3C1AFB] to-[#311F71]">
          <a href="mailto:matheo.deleplanque@gmail.com?subject=Contact par portfolio">Contact</a>
        </button>
      </nav>
    </header>
  );
}
  