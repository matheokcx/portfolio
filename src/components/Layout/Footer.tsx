import { Github, Linkedin, Mail } from "lucide-react";
import "./Footer.module.css";

// ==============================================


const Footer = () => {
  return (
    <footer className="w-full bg-black flex flex-col lg:flex-row justify-around gap-10 lg:gap-0 px-10 lg:px-0 py-6" id="contacts" >
      <div className="flex flex-col gap-4">
        <h3 className="font-extrabold">Contact</h3>
        <p className="flex gap-4 items-center">
          <Mail className="w-6 h-6 text-white" />
          matheo.deleplanque@gmail.com</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-extrabold">Réseaux sociaux</h3>
        <div className="flex gap-4">
          <a href="https://github.com/matheokcx" target="_blank" className="w-fit flex justify-center" >
            <Github className="w-8 h-8 text-white" />
          </a>
          <a href="https://www.linkedin.com/in/math%C3%A9o-deleplanque/" target="_blank" className="w-fit flex justify-center" >
            <Linkedin className="w-8 h-8 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
