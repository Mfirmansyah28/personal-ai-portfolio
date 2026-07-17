import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Projects from "@/components/sections/Projects";
import Assistant from "@/components/sections/Assistant";
export default function HomePage() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Timeline />
                <FeaturedProjects />
                <Projects />
                <Assistant />
            </main>

            <Footer />
        </>
    );
}