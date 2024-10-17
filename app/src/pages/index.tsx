import Head from "next/head"
import Qualite from "../components/Qualite"
import Competence from "@/components/Competence"
import Projet from "@/components/Projet"
import { useState, useEffect, useRef } from "react"
import { useRouter, NextRouter } from "next/router"

export default function Home() {

  const router: NextRouter = useRouter();

  const [qualites, setQualites] = useState<Array<any>>([]);
  const [competences, setCompetences] = useState<Array<any>>([]);
  const [projets, setProjets] = useState<Array<any>>([]);

  const [choixLangage, setChoixLangage] = useState<boolean>(true);
  const [choixFramework, setChoixFramework] = useState<boolean>(false);
  const [choixLogiciel, setChoixLogiciel] = useState<boolean>(false);

  let i: number = 0;

  const trouverDonnees = async () => {
    await fetch("/data.json").then((reponse: Response) => reponse.json()).then((data: any) => {
      setQualites(data.qualites);
      setCompetences(data.competences);
      setProjets(data.projets);
    });
  }

  useEffect(() => {
    trouverDonnees();
  }, [])

  const modifSection = (n: number) => {
    switch (n) {
      case 1: {
        setChoixFramework(false);
        setChoixLogiciel(false);
        setChoixLangage(true);
        break;
      }
      case 2: {
        setChoixFramework(false);
        setChoixLangage(false);
        setChoixLogiciel(true);
        break;
      }
      case 3: {
        setChoixLogiciel(false);
        setChoixLangage(false);
        setChoixFramework(true);
        break;
      }
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll('.animate-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Deleplanque Mathéo - Portfolio</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="w-full flex flex-col items-center bg-white dark:bg-background text-black dark:text-white font-Fredoka bg-fixed gap-24">
        <video src="/bg.mp4" className="fixed inset-0 w-full h-full object-cover blur-sm" autoPlay muted loop />

        <div className="z-20 w-11/12 lg:w-2/6 h-16 flex flex-row justify-center items-center gap-6 font-bold border-2 border-white rounded-3xl fixed bottom-6 backdrop-blur">
          <a href="#1">A propos</a>
          <a href="#2">Formations</a>
          <img src="/circle.png" alt="icon" className="w-16 h-16" />
          <a href="#3">Compétences</a>
          <a href="#4">Projets</a>
        </div>

        {/* Le haut de page se trouve réellement ici */}
        <div className="animate-section z-10 w-11/12 h-[100vh] flex flex-col items-center mt-52 p-8 lg:p-20 gap-6 animate-slide_up">
          <h3 className="text-5xl font-bold w-full lg:w-auto">“Chaque jour est une nouvelle occasion de se dépasser.„</h3>
          <p className="text-gray-400">- Deleplanque Mathéo</p>
          <button className="w-1/12 h-12 rounded-3xl font-extrabold bg-white bg-opacity-85 text-black transition-transform hover:translate-x-2 hover:bg-opacity-100" ><a href="mailto:matheo.deleplanque@gmail.com" target="_blank">Contact</a></button>
        </div>

        <div className="animate-section opacity-0 z-10 w-11/12 lg:h-[600px] bg-gray-900 rounded-xl flex flex-col lg:flex-row justify-center items-center gap-20 mt-44" id="1">
          <img src="/i2.png" alt="illustration" className="w-full lg:w-1/4 h-80 rounded-xl" />
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-normal gap-8 lg:pl-8">
            <h2 className="text-4xl font-bold text-center lg:text-left w-full lg:w-3/4">A propos de moi</h2>
            <p className="text-lg text-center lg:text-left w-full lg:w-3/4">Je m'appelle Mathéo, j'ai 18 ans et je suis en 2e année de BUT informatique à l'IUT de Lens. Je suis passionné de développement web et souhaiterais faire une alternance dans ce domaine (à partir de février 2025 jusqu'en juillet 2026).
            </p>
          </div>
        </div>

        <div className="animate-section opacity-0 z-10 w-11/12 lg:h-[650px] bg-gray-900 rounded-3xl flex flex-col gap-20 p-8 mt-24 text-white">
          <h2 className="w-full text-center font-bold text-4xl">Mes qualités</h2>
          <div className="w-full flex flex-col lg:flex-row items-start gap-4">
            {qualites.map((e: any, index: any) => <Qualite imagePath={e.chemin} titre={e.titre} texte={e.texte} key={index} />)}
          </div>
        </div>

        <div className="animate-section opacity-0 z-10 w-11/12 lg:h-[600px] bg-gray-900 rounded-3xl flex flex-col lg:flex-row justify-center items-center gap-12 p-12 text-white" id="2">
          <div className="w-full lg:w-2/6 flex flex-col gap-8">
            <h2 className="text-5xl font-bold">Un parcours ambitieux</h2>
            <p className="text-sm w-4/5">Après un parcours des plus classiques, j'ai décidé de passer par un BUT informatique pour apprendre la pratique, mais mon objectif reste toujours le même : devenir ingénieur logiciel.</p>
          </div>
          <div className="w-full lg:w-2/6 flex flex-col items-center gap-4 p-4 rounded-xl border-dashed border-2 dark:text-white">
            <img src="/iut.png" alt="Iut de Lens" className="w-4/6 h-44" />
            <h2 className="text-xl font-bold">???</h2>
            <p>Ecole d'ingénieur - 2026/2029</p>
          </div>
          <div className="w-full lg:w-2/6 flex flex-col items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-700 text-black dark:text-white">
            <img src="/iut.png" alt="Iut de Lens" className="w-4/6 h-44" />
            <h2 className="text-xl font-bold">BUT Informatique</h2>
            <p>Iut de Lens - 2023/2026</p>
          </div>
          <div className="w-full lg:w-2/6 flex flex-col items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-700 text-black dark:text-white">
            <img src="/lycée.jpg" alt="Photo lycée henri darras" className="w-5/6 h-44" />
            <h2 className="text-xl font-bold">BAC Gén. & Tech. (STI2D)</h2>
            <p>Lycée Henri Darras - 2020/2023</p>
          </div>
        </div>

        <div className="animate-section opacity-0 z-10 w-11/12 bg-gray-900 rounded-3xl flex flex-col items-center gap-12 p-8 lg:p-20 text-white">
          <h2 className="w-full lg:w-2/6 font-bold text-4xl text-center">Mes Expériences</h2>
          <div className="w-full lg:w-2/3 rounded-xl bg-gray-700 flex flex-col p-6 transition-transform hover:translate-x-2">
            <h2 className="w-full lg:w-2/6 font-bold text-xl">Chef de caisse</h2>
            <p>GPE Leader - Aout 2024</p>
            <ul>
              <li>Réalisation de l'inventaire</li>
              <li>Mise en place des articles</li>
              <li>Gestion des paiemants clients</li>
              <li>Nettoyage du poste de travail</li>
            </ul>
          </div>
          <div className="w-full lg:w-2/3 rounded-xl bg-gray-700 flex flex-col p-6 transition-transform hover:translate-x-2">
            <h2 className="w-full lg:w-2/6 font-bold text-xl">Stage Administration</h2>
            <p>Mairie de Liévin - Janvier 2020</p>
            <ul>
              <li>Préparation des enveloppes</li>
              <li>Accueil des personnes</li>
              <li>Transport du matériel</li>
            </ul>
          </div>
        </div>

        <div className="animate-section opacity-0 z-10 w-11/12 bg-gray-900 rounded-3xl flex flex-col gap-12 p-8 text-white" id="3">
          <h2 className="font-bold text-center text-4xl w-full">Mes compétences</h2>
          <div className="w-full flex flex-col lg:flex-row lg:flex-wrap items-center lg:items-normal justify-center gap-6">
            {choixLogiciel ? competences.filter((e: any) => e.type === "logiciel").map((e: any, index: any) => <Competence imagePath={e.chemin} titre={e.titre} progression={e.progress} key={index} />) : null}
            {choixLangage ? competences.filter((e: any) => e.type === "langage").map((e: any, index: any) => <Competence imagePath={e.chemin} titre={e.titre} progression={e.progress} key={index} />) : null}
            {choixFramework ? competences.filter((e: any) => e.type === "framework").map((e: any, index: any) => <Competence imagePath={e.chemin} titre={e.titre} progression={e.progress} key={index} />) : null}
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-12 justify-center items-center">
            <button onClick={() => modifSection(1)} className="font-bold bg-white text-black rounded-2xl p-2 transition-transform hover:scale-105">Langages</button>
            <button onClick={() => modifSection(2)} className="font-bold bg-white text-black rounded-2xl p-2 transition-transform hover:scale-105">Logiciels</button>
            <button onClick={() => modifSection(3)} className="font-bold bg-white text-black rounded-2xl p-2 transition-transform hover:scale-105">Frameworks</button>
          </div>
        </div>

        <div className="animate-section opacity-0 z-10 w-11/12 bg-gray-900 rounded-3xl flex flex-col flex-2 items-center gap-12 p-12 text-white" id="4">
          <div className="w-full flex-col items-center text-center">
            <h2 className="text-4xl font-bold">L'apprentissage passe par des projets</h2>
            <p>La pratique permet de mettre en action ce que l'on a appris</p>
          </div>
          <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center gap-8">
            {projets.map((e: any, index: any) => <Projet imagePath={e.chemin} titre={e.titre} techs={e.techs} description={e.description} lien={e.link} key={index} />)}
          </div>
        </div>

        <div className="z-30 w-full flex flex-row gap-16 justify-center items-center bg-gray-900 rounded-tl-3xl rounded-tr-3xl p-8">
          <a href="https://github.com/matheokcx" target="_blank"><img src="/github.png" alt="GitHub" className="w-12 h-12 transition-transform hover:scale-105" /></a>
          <a href="https://www.linkedin.com/in/math%C3%A9o-deleplanque-4a4725329/" target="_blank"><img src="/linkedin.png" alt="GitHub" className="w-10 h-10 transition-transform hover:scale-105" /></a>
          <a href="mailto:matheo.deleplanque@gmail.com" target="_blank"><img src="/mail.png" alt="Mail" className="w-12 h-12 transition-transform hover:scale-105" /></a>
          <img src="/english.png" alt="Portfolio en anglais" onClick={() => router.push("/english")} className="w-12 h-12 hover:cursor-pointer" />
        </div>
      </div >
    </>
  )
}
