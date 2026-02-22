import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Main page — single scrollable page that assembles all sections.
 * Each section has a unique id used by the navbar anchor links.
 */
export default function Home() {
    return (
        <>
            {/* Fixed top navigation */}
            <Navbar />

            <main>
                {/* 01 — Introduction / landing */}
                <Hero />

                {/* 02 — Bio + highlights */}
                <section id="about-wrapper">
                    <About />
                </section>

                {/* 03 — Portfolio projects */}
                <section id="projects-wrapper" className="bg-zinc-950/60">
                    <Projects />
                </section>

                {/* 04 — Technology stack */}
                <section id="stack-wrapper">
                    <TechStack />
                </section>

                {/* 05 — Contact */}
                <section id="contact-wrapper" className="bg-zinc-950/60">
                    <Contact />
                </section>
            </main>

            <Footer />
        </>
    );
}
