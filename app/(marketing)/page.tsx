import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Assistant from "@/components/sections/Assistant";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
    return (
        <>

            <main>
                <Hero />
                <About />
                <Skills />
                <Timeline />
                <FeaturedProjects />
                <Assistant />
                <Projects />
                <Contact />
            </main>

        </>
    );
}