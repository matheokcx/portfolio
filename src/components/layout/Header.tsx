import { Send } from "lucide-react";

// ==============================================


export default function Header({ activeSection }: { activeSection: string }) {
  const sections = [{ id: "home", translate: "Accueil" }, { id: "about", translate: "Mon histoire" }, { id: "skills", translate: "Compétences" }, { id: "projects", translate: "Projets" }];


  return (
    <header className="w-screen hidden lg:flex lg:sticky lg:top-0 lg:backdrop-blur-xs justify-between items-center p-6">
      <div className="flex gap-32">
        <a href="index.html" className="text-2xl font-extrabold">
          Mathéo | MD
        </a>
      </div>
      <nav className="hidden lg:flex items-center gap-16">
        {
          sections.map((section: any, index: number) => <a key={index} href={`#${section.id}`} className={`${activeSection === section.id ? "opacity-100" : ""} text-md opacity-60 font-semibold`}>{section.translate}</a>)
        }
        <button className="px-4 h-12 rounded-2xl font-bold bg-white transition-transform opacity-50 duration-1000 hover:opacity-100 hover:cursor-pointer">
          <a href="mailto:matheo.deleplanque@gmail.com?subject=Contact par portfolio" className="w-full">
            <Send className="text-black w-6 h-6" />
          </a>
        </button>
      </nav>
    </header>
  );
}
