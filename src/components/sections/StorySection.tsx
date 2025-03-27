export default function StorySection() {
    return (
        <section className="w-full p-10 flex justify-around items-center" id="about">
            <img src={`${import.meta.env.BASE_URL}memoji.png`} alt="Illustration" className="w-1/3" />
            <div className="w-1/2">
                <h2 className="text-4xl font-bold mb-4">📖 My Story</h2>
                <hr className="w-1/3 border-2 mb-10"/>
                <p className="text-lg leading-relaxed">
                    Coding didn’t just catch my interest—it completely transformed the way I approach problem-solving and innovation. 
                    What started as simple curiosity quickly became a passion for crafting seamless user experiences and high-performance web applications.  
                    <br /><br />
                    I develop high-performance digital solutions using cutting-edge technologies like 
                    <span className="font-semibold"> Next.js</span>,  
                    <span className="font-semibold"> TypeScript</span>, and  
                    <span className="font-semibold"> PostgreSQL</span>,  
                    constantly pushing for efficiency and innovation. Every day, I turn complex challenges into fluid, high-performing digital experiences—because great code should feel effortless.
                    <br /><br />
                    I don’t just write code—I build digital experiences that create real impact and help businesses scale.  
                    Whether it’s designing frictionless user journeys or solving deep technical challenges,  
                    I thrive on turning <u>ideas into reality</u>.  
                    Each project is an opportunity to refine my skills, push my limits, and deliver outstanding digital experiences.
                </p>
            </div>
        </section>
    );
}
