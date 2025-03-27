export default function SkillCard ({ image, name }: { image: string, name: string }) {
  return (
    <article className="w-8/12 lg:w-1/6 bg-white rounded-2xl shadow-md py-2">
      <img src={image} alt={name} className="w-full h-3/4 rounded-3xl" />
      <h3 className="text-xl text-center text-black font-semibold">{name}</h3>
    </article>
  );
}
  