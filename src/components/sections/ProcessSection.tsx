import { Briefcase, Layout, Code, Bug, Rocket, Repeat } from "lucide-react";
import ProcessStep from "../ProcessStep";

const steps = [
    {
        title: "Talking about the project & Planning",
        icon: <Briefcase className="text-blue-500 w-10 h-10" />,
        duration: "2 days"
    },
    {
        title: "Design UI/UX",
        icon: <Layout className="text-blue-500 w-10 h-10" />,
        duration: "3-4 days"
    },
    {
        title: "Development & Architecture",
        icon: <Code className="text-blue-500 w-10 h-10" />,
        duration: "min. 2 weeks"
    },
    {
        title: "Testing & Optimization",
        icon: <Bug className="text-blue-500 w-10 h-10" />,
        duration: "1 week"
    },
    {
        title: "Deployment & Launch",
        icon: <Rocket className="text-blue-500 w-10 h-10" />,
        duration: "2 days"
    },
    {
        title: "Maintenance & Growth",
        icon: <Repeat className="text-blue-500 w-10 h-10" />,
        duration: "2 months"
    }
];

export default function ProcessSection () {
    return (
        <section className="w-full flex flex-col items-center py-24">
            <h2 className="text-4xl font-bold text-center mb-4">What's my client process</h2>
            <p className="text-lg text-center mb-10">
                A streamlined process to deliver high-quality, performant web applications.
            </p>
            <div className="w-3/5 flex flex-col items-center gap-12">
                {steps.map((step, index) => (
                    <ProcessStep key={index} stepObject={step} />
                ))}
            </div>
        </section>
    );
}