import { Timer } from "lucide-react";

export default function ProcessStep ({stepObject} : {stepObject : {title: string, icon: any, duration: string}}) {
    return (
        <div className="w-full h-24 p-6 bg-white rounded-xl flex justify-between items-center gap-8 text-black transition-all duration-1000 hover:translate-x-2">
            <div className="flex gap-4 justify-end items-center">
                {stepObject.icon}
                <h3 className="font-semibold text-xl text-black">{stepObject.title}</h3>
            </div>
            <div className="flex gap-4 justify-end items-center">
                {stepObject.duration}
                <Timer className="text-gray-700 w-10 h-10" /> 
            </div>
              
        </div>
    )
}