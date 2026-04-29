import AmbientBackground from "@/components/AmbientBackground";
import CursorEffect from "@/components/CursorEffect";
import RevealObserver from "@/components/RevealObserver";
import ClickSpark from "@/components/ClickSpark";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <ClickSpark sparkColor="#7C7AFF" sparkCount={8} sparkRadius={22} sparkSize={9} duration={480}>
            <AmbientBackground />
            <CursorEffect />
            <RevealObserver />
            <Navbar />
            <main id="top">
                <Hero />
                <About />
                <Projects />
                <TechStack />
                <Timeline />
                <Contact />
            </main>
            <Footer />
        </ClickSpark>
    );
}
