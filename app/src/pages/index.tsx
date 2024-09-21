import Head from "next/head"
import Qualite from "../components/Qualite"
import Competence from "@/components/Competence"
import Projet from "@/components/Projet"
import { useState, useEffect } from "react"

export default function Home() {

  const [qualites, setQualites] = useState<Array<any>>([]);
  const [competences, setCompetences] = useState<Array<any>>([]);
  const [projets, setProjets] = useState<Array<any>>([]);

  const [choixLangage, setChoixLangage] = useState<boolean>(true);
  const [choixFramework, setChoixFramework] = useState<boolean>(false);
  const [choixLogiciel, setChoixLogiciel] = useState<boolean>(false);

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

  return (
    <>
      <Head>
        <title>Deleplanque Mathéo - Portfolio</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="w-full flex flex-col bg-white dark:bg-gradient-to-tl dark:from-blue-900 dark:to-black text-black dark:text-white font-sans bg-fixed gap-24">

        <div className="w-full flex flex-col-reverse lg:flex-row items-center p-8 lg:p-20 pt-32 gap-16">
          <span className="w-full lg:w-1/2 flex flex-col gap-4 font-bold animate-slide_up">
            <h3 className="text-4xl w-full lg:w-auto">“Chaque jour est une nouvelle occasion de se dépasser.„</h3>
            <i className="text-gray-400">- Deleplanque Mathéo</i>
          </span>
          <img src="/illustration1.jpg" alt="Illustration 1" className="rounded-2xl w-full lg:w-1/2 h-96 animate-slide_up shadow-lg shadow-lime-800" />
        </div>

        <div className="w-full flex flex-col gap-20 mt-44">
          <div className="w-full lg:h-96 dark:bg-gray-900 rounded-xl flex flex-col lg:flex-row items-center gap-8 p-8">
            <img src="/illustration2.svg" alt="illustration" className="w-full lg:w-2/3 h-80 rounded-xl" />
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-normal gap-8 lg:pl-8">
              <h2 className="font-bold text-2xl text-center lg:text-left w-full lg:w-3/4">A propos de moi</h2>
              <p className="text-lg text-center lg:text-left w-full lg:w-3/4">Je m'appelle Mathéo, j'ai 18 ans et je suis en 2e année de BUT informatique à l'IUT de Lens. Je suis passionné de développement web et souhaiterais faire une alternance dans ce domaine (à partir de février 2025).
              </p>
            </div>
          </div>

          <div className="w-full dark:bg-gray-900 rounded-xl flex flex-col gap-20 p-8">
            <h2 className="w-full text-center font-bold text-3xl">Mes qualités</h2>
            <div className="w-full flex flex-col lg:flex-row items-start gap-4">
              {qualites.map((e: any, index: any) => <Qualite imagePath={e.chemin} titre={e.titre} texte={e.texte} key={index} />)}
            </div>
          </div>
        </div>

        <div className="w-full lg:h-[400px] dark:bg-gray-900 rounded-xl flex flex-col lg:flex-row gap-12 p-8">
          <h2 className="w-full lg:w-2/6 font-bold text-3xl text-center lg:-rotate-90">Mes formations</h2>
          <div className="w-full lg:w-2/6 flex flex-col items-center gap-4 p-4 rounded-xl border-2 border-gray-400 dark:border-0  dark:bg-gray-700">
            <img src="/iut.png" alt="Iut de Lens" className="w-5/6 h-44" />
            <h2 className="text-xl font-bold">BUT Informatique</h2>
            <p>Iut de Lens - 2023/2026</p>
          </div>
          <div className="w-full lg:w-2/6 flex flex-col items-center gap-4 p-4 rounded-xl border-2 border-gray-400 dark:border-0  dark:bg-gray-700">
            <img src="/lycée.jpg" alt="Photo lycée henri darras" className="w-5/6 h-44" />
            <h2 className="text-xl font-bold">BAC Gén. & Tech. (STI2D)</h2>
            <p>Lycée Henri Darras - 2020/2023</p>
          </div>
        </div>

        <div className="w-full dark:bg-gray-900 rounded-xl flex flex-col gap-12 p-8">
          <h2 className="font-bold text-center text-3xl w-full">Mes compétences</h2>
          <div className="w-full flex flex-col lg:flex-row lg:flex-wrap items-center lg:items-normal justify-center gap-6">
            {choixLogiciel ? competences.filter((e: any) => e.type === "logiciel").map((e: any, index: any) => <Competence imagePath={e.chemin} titre={e.titre} progression={e.progress} key={index} />) : null}
            {choixLangage ? competences.filter((e: any) => e.type === "langage").map((e: any, index: any) => <Competence imagePath={e.chemin} titre={e.titre} progression={e.progress} key={index} />) : null}
            {choixFramework ? competences.filter((e: any) => e.type === "framework").map((e: any, index: any) => <Competence imagePath={e.chemin} titre={e.titre} progression={e.progress} key={index} />) : null}
          </div>
          <div className="w-full flex flex-row gap-8 justify-center items-center">
            <button onClick={() => modifSection(1)} className="font-bold bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl p-2 transition-transform hover:scale-105">Langages</button>
            <button onClick={() => modifSection(2)} className="font-bold bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl p-2 transition-transform hover:scale-105">Logiciels</button>
            <button onClick={() => modifSection(3)} className="font-bold bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl p-2 transition-transform hover:scale-105">Frameworks</button>
          </div>
        </div>

        <div className="w-full dark:bg-gray-900 rounded-xl flex flex-col gap-8 p-8">
          <h2 className="font-bold text-center w-full text-3xl">Mes meilleurs projets</h2>
          <div className="w-full flex flex-col lg:flex-row justify-center gap-16 p-4">
            {projets.map((e: any, index: any) => <Projet imagePath={e.chemin} titre={e.titre} techs={e.techs} description={e.description} key={index} />)}
          </div>
        </div>

        <div className="w-full flex flex-row gap-14 justify-center items-center border-2 border-gray-400 dark:border-0 dark:bg-gray-900 rounded-xl p-4">
          <a href="https://github.com/matheokcx" target="_blank"><img src="/github.png" alt="GitHub" className="w-16 h-16 transition-transform hover:scale-105" /></a>
          <a href="https://www.linkedin.com/in/math%C3%A9o-deleplanque-4a4725329/" target="_blank"><img src="/linkedin.png" alt="GitHub" className="w-14 h-14 transition-transform hover:scale-105" /></a>
          <a href="mailto:matheo.deleplanque@gmail.com" target="_blank"><img src="/mail.png" alt="Mail" className="w-16 h-16 transition-transform hover:scale-105" /></a>
        </div>

      </div>
    </>
  )
}
