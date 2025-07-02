import About from "./about/page";
import GlobalLoader from "./components/GlobalLoader";
import Hero from "./components/Hero";
import Contact from "./contact/page";
import Education from "./educations/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
  return (
     <GlobalLoader >

           <Hero />
           <About />
           <Education />
           <Skills />
           <Projects />
           <Contact />
     </GlobalLoader>


  );
}
