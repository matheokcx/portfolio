export default function Footer () {
  return (
    <footer className="w-full bg-black flex justify-center items-center gap-10 py-6" id="contacts">
      <a href="https://github.com/matheokcx" target="_blank" className="w-fit flex justify-center">
        <img src="/contacts/github.png" alt="Github" className="w-1/3" />
      </a>
      <a href="mailto:matheo.deleplanque@gmail.com" target="_blank" className="w-fit flex justify-center">
        <img src="/contacts/mail.png" alt="Mail" className="w-1/3" />
      </a>
      <a href="https://www.linkedin.com/in/math%C3%A9o-deleplanque/" target="_blank" className="w-fit flex justify-center">
        <img src="/contacts/linkedin.png" alt="Linkedin" className="w-1/3" />
      </a>
    </footer>
  );
}
  