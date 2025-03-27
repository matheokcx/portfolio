export default function ProjectCard ({ image, name, link }: { image: string, name: string, link: string }) {
  return (
    <article className="w-1/5 flex flex-col items-center gap-6 bg-white rounded-3xl shadow-lg p-4">
      <img src={image} alt={name} className="w-full h-3/5 rounded-3xl" />
      <h3 className="mt-4 text-xl text-black font-bold text-center">
        <a href={link} target="_blank">{name}</a>
      </h3>
    </article>
  );
}
  