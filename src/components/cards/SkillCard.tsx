export default function SkillCard({ icon, name }: { icon: any, name: string }) {
    return (
        <div className="w-5/6 lg:w-1/6 bg-white rounded-xl p-4 flex justify-around items-center gap-2">
            <img src={icon} alt={name} className="w-12 h-12" />
            <h3 className="text-black text-lg font-semibold font-semibold">{name}</h3>
        </div>
    );
}
