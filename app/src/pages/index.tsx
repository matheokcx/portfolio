import Head from "next/head"
import Image from "next/image";
import Qualite from "../components/Qualite"
import Competence from "@/components/Competence";
import Projet from "@/components/Projet";
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

      <div className="w-full flex flex-col bg-white dark:bg-gradient-to-tl dark:from-blue-900 dark:to-black text-black dark:text-white bg-fixed gap-24">

        <div className="w-full flex flex-col-reverse lg:flex-row items-center p-8 lg:p-20 pt-32 gap-16 lg:gap-0">
          <span className="w-full lg:w-1/2 flex flex-col gap-4 font-bold animate-slide_up">
            <h3 className="text-4xl">“Pourquoi pas essayer„</h3>
            <p className="text-gray-400">Aujourd'hui la situation a bien changé ...</p>
          </span>
          <Image src="/illustration1.jpg" alt="Illustration 1" width="100" height="100" className="rounded-2xl w-full lg:w-1/2 h-96 animate-slide_up" />
        </div>

        <div className="w-full flex flex-col gap-20 mt-44">
          <div className="w-full lg:h-96 dark:bg-gray-900 rounded-xl flex flex-col lg:flex-row items-center gap-8 p-8">
            <Image src="/illustration2.svg" alt="illustration" width="100" height="100" className="w-full lg:w-2/3 h-80 rounded-xl" />
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-normal gap-8 lg:pl-16">
              <h2 className="font-bold text-2xl">A propos de moi</h2>
              <p className="text-lg text-center lg:text-left w-full lg:w-3/4">Je m'appelle Mathéo, j'ai 18 ans et je suis en 2e année de BUT informatique à l'IUT de Lens. Je suis passionné de développement web et souhaiterai faire une alternance dans ce domaine (à partir de février 2025).
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

        <div className="w-full dark:bg-gray-900 rounded-xl flex flex-col gap-12 p-8">
          <h2 className="font-bold text-center text-3xl w-full">Mes compétences</h2>
          <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center gap-6">
            {choixLogiciel ? competences.filter((e: any) => e.type === "logiciel").map((e: any, index: any) => <Competence imagePath={e.chemin} titre={e.titre} progression={e.progress} key={index} />) : null}
            {choixLangage ? competences.filter((e: any) => e.type === "langage").map((e: any, index: any) => <Competence imagePath={e.chemin} titre={e.titre} progression={e.progress} key={index} />) : null}
            {choixFramework ? competences.filter((e: any) => e.type === "framework").map((e: any, index: any) => <Competence imagePath={e.chemin} titre={e.titre} progression={e.progress} key={index} />) : null}
          </div>
          <div className="w-full flex flex-row gap-8 justify-center items-center">
            <button onClick={() => modifSection(1)} className="font-bold">Langages</button>
            <button onClick={() => modifSection(2)} className="font-bold">Logiciels</button>
            <button onClick={() => modifSection(3)} className="font-bold">Frameworks</button>
          </div>
        </div>

        <div className="w-full dark:bg-gray-900 rounded-xl flex flex-col gap-8 p-8">
          <h2 className="font-bold text-center w-full text-3xl">Mes meilleurs projets</h2>
          <div className="w-full flex flex-col lg:flex-row justify-center gap-16 p-4">
            {projets.map((e: any, index: any) => <Projet imagePath={e.chemin} titre={e.titre} techs={e.techs} description={e.description} key={index} />)}
          </div>
        </div>

        <div className="w-full flex flex-row gap-14 justify-center items-center border-2 border-gray-400 dark:border-0 dark:bg-gray-900 rounded-xl p-4">
          <a href="https://github.com/matheokcx" target="_blank"><Image src="/github.png" alt="GitHub" width="100" height="100"
            className="w-16 h-16 transition-transform hover:scale-105" /></a>
          <a href="https://www.linkedin.com/in/math%C3%A9o-deleplanque-4a4725329/" target="_blank"><Image
            src="/linkedin.png" alt="GitHub" width="100" height="100" className="w-12 h-12 transition-transform hover:scale-105" /></a>
        </div>

      </div>
    </>
  )
}
