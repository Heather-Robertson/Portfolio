import PandaBugsPreview from "./assets/MakingPictures/pbPreview.png";
import BatResourcesPreview from "./assets/MakingPictures/BatPreview.JPG";
import TossnTowPreview from "./assets/MakingPictures/TossNTowPreview.jpeg";
import LipstickFabulatorPreview from "./assets/MakingPictures/LipstickPreview.jpeg";
import DiceplayPreview from "./assets/ResearchFiles/DiceplayPreview.jpeg";
import ThesisPreview from "./assets/ResearchFiles/TilingPreview.png";
import MothitorPreview from "./assets/ResearchFiles/MothitorPreview.jpeg";

import BagPreview from "./assets/PlaygroundPictures/BagPreview.jpg";
import BloomBotPreview from "./assets/PlaygroundPictures/BloomBotPreview.jpg";
import CADPreview from "./assets/PlaygroundPictures/CADPreview.PNG";
import CandlestickPreview from "./assets/PlaygroundPictures/CandlestickPreview.jpeg";
import KnittingPreview from "./assets/PlaygroundPictures/KnittingPreview.jpg";
import Knitting2Preview from "./assets/PlaygroundPictures/Knitting2Preview.jpg";
import PuzzlePreview from "./assets/PlaygroundPictures/PuzzlePreview.jpeg";
import SillyBot1Preview from "./assets/PlaygroundPictures/SillyBot1Preview.jpg";
import SillyBot2Preview from "./assets/PlaygroundPictures/SillyBot2Preview.jpg";
import SillyBot3Preview from "./assets/PlaygroundPictures/SillyBot3Preview.jpg";
import StitchSwitchPreview from "./assets/PlaygroundPictures/StitchSwitchPreview.jpeg";
import StolesPreview from "./assets/PlaygroundPictures/StolesPreview.jpeg";
import ThesisBoxPreview from "./assets/PlaygroundPictures/ThesisBoxPreview.jpeg";

import {PandaBugs, BatResources, TossNTow, LipstickFabulator, Diceplay, Thesis, Mothitor} from './Project.jsx'

import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { Draggable } from "gsap/Draggable.js";
import './index.css'
import { useRef } from "react";
import { MobileView, isMobile } from 'react-device-detect';


function LanguageSelector() {
  return(
  <div className="language-selector">
    <button className="language-button">
      EN
      <span className="arrow">▾</span>
    </button>
    <div className="language-menu">
      <a href="index.html" data-lang="en">English</a>
      <a href="/fr/index.html" data-lang="fr">Français</a>
    </div>
  </div>
  );
}

function Nav() {
  return(
  <nav className="nav">
    <Link className="brand-link" to="/">Heather Robertson</Link>
    <ul className="nav-links">
      <li><HashLink smooth to="/#home">Home</HashLink></li>
      <li><HashLink smooth to="/#making">Making</HashLink></li>
      <li><HashLink smooth to="/#research">Research</HashLink></li>
      <li><HashLink smooth to="/#playground">Playground</HashLink></li>
      {/* <LanguageSelector /> */}
    </ul>
  </nav>
  );
}

function Eyebrow() {
  return(
    <p className="eyebrow">
      <span className="eyebrow-text"><b>
        <span>Design Engineering</span>
        <span>Human–Computer Interaction</span>
        <span>UI/UX Design</span>
        <span>Frontend Development</span>
        <span>Design Research</span>
        <span>Computational Design</span>
        <span>Prototyping</span>
        <span>Physical Computing</span>
        <span>Creative Technology</span>
        <span>Digital Fabrication</span>
      </b></span>
    </p>
  );
}

function Hero() {

  const heroRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=125%",
            pin: true,
            scrub: true,
        }
    });

    tl.fromTo(".name", {scale:2, y: 25, xPercent: 50}, {scale:1, y:0, xPercent: 0})
      .fromTo([".eyebrow",".about",".action-links"], {opacity: 0, y:-200}, {opacity: 1, y:0},0.8)
      .to({}, { duration: 0.75});
      // .fromTo(".about", {opacity: 0, y:200}, {opacity: 1, y:0})
      // .fromTo(".action-links", {opacity: 0, y:200}, {opacity: 1, y:0});
  }, { scope: heroRef });

  return(
  <section className = "hero-wrapper" id="home" ref={heroRef}>
    <div className="hero">
      <div>
        <Eyebrow />
        <h1 className="name">Heather <br /> Robertson</h1>
        <div className="action-links">
          <a href="HeatherRobertsonResume.pdf" className="resume-button">View My Resume</a>
          <a href="https://www.linkedin.com/in/heather-robertson-profile" className="contact-button">LinkedIn</a>
          <a href="mailto:robertsonheatherp@gmail.com" className="contact-button">Email</a>
          <a href="tel:423-767-4905" className="contact-button">Phone</a>
        </div>
      </div>
      <div className="about">
        <p>I am a recent graduate of the Design Engineering Master’s program at Brown University and the Rhode Island School of Design. My work centers making as a liberatory practice, motivated by the (dis)ability and queer liberation movements. I approach this subject both from a theoretical/academic perspective, researching computational design and creative technologies, and through the concrete practice of making, often with technology as a physical medium. My work particularly centers humor and play, recognizing joy as a foremost form of resistance.</p>
      </div>
    </div>
  </section>
  );
}

function Skill({title}) {
  return(
    <span className="skill">{title}</span>
  );
}

function Card({ref, title, subtitle, image, alt, skills}) {
  return(
    <div className="card-boundary">
      <div className="card">
        <div className="card-front">
          <Link to={ref}>
            <h3>{title}</h3>
            <img src={image} alt={alt} />
          </Link>
        </div>
        <div className="card-back">
          <Link to={ref}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <p>
              {skills.map((skill, index) => (
              <Skill key={skill.title} title={skill.title} /> ))}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function HorizontalSection({title, sectionID, content, cards}) {
  const sectionRef = useRef();
  const wrapperRef = useRef();
  const trackRef = useRef();
  const barRef= useRef();

  const getDistance = () =>
    trackRef.current.scrollWidth -
    wrapperRef.current.clientWidth;

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: true,
        start: "top 10%",
        end: () => "+=" + (getDistance())
      }
    });

    tl.to(trackRef.current, {
      x: () => -getDistance(),
      ease: "none",
      duration: 1
    })

    .to(barRef.current, {
    width: "100%",
    duration: 1
    }, 0)

    .to({}, {
      duration: 0.3
    });

    // window.addEventListener("load", ScrollTrigger.refresh);

    // return () => {
    //   window.removeEventListener("load", ScrollTrigger.refresh);
    // };
  }, { scope: sectionRef });
  
  return(
  <section className="horizontal-section" id={sectionID} ref={sectionRef}>
    <div className="section-hero">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
    <div className="cards-wrapper" ref={wrapperRef}>
      <div className="cards-container" ref={trackRef}>
        {cards.map((card, index) => (
          <Card key = {card.title} ref = {card.ref} title={card.title} subtitle={card.subtitle} image={card.image} alt={card.alt} skills={card.skills}/>
        ))}
      </div>
      <div className="progress-bar" ref={barRef}>
        <p>Scroll down to continue.</p>
      </div>
    </div>
  </section>
  );
}

function PlaygroundImage({source, alt, x, y}) {
  return(
    <>
    <div className="pin" style = {{left: `${x+4.5}vw`, top: `${y-1}vh`}} ></div>
    <img src = {source} alttext = {alt} style = {{left: `${x}vw`, top: `${y}vh`}} />
    </>
  );
}

function Playground() {
  const playgroundRef = useRef();
  const ballRef = useRef();
  const pathRef = useRef();
  const canvasRef = useRef();
  const innerRef = useRef();

  useGSAP(() => {
    gsap.to(ballRef.current, {
      duration: 1,
      ease: "none",

      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },

      scrollTrigger: {
        trigger: playgroundRef.current,
        start: "top 10%",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    Draggable.create(innerRef.current, {
        type: "x,y",
        bounds: {
          minX: -(innerRef.current.offsetWidth - canvasRef.current.offsetWidth),
          maxX: 0,
          minY: -(innerRef.current.offsetHeight - canvasRef.current.offsetHeight),
          maxY: 0
        },
        edgeResistance: 0.9
      })

      // window.addEventListener("load", ScrollTrigger.refresh);

      // return () => {
      //   window.removeEventListener("load", ScrollTrigger.refresh);
      // };
  }, { scope: playgroundRef });

  const playgroundImages = [
    {source: BagPreview, alt: "A handmade bag interwoven with lit LEDS", x: 2, y: 70},
    {source: CADPreview, alt: "A 3D CAD model of a complexly-shaped lipgloss tube", x: 20, y: 5},
    {source: CandlestickPreview, alt: "A sand-cast metal candlestick", x: 25, y: 75},
    {source: KnittingPreview, alt: "A small hand-knit swatch with a repeating heart pattern", x: 35, y: 45},
    {source: PuzzlePreview, alt: "An open puzzle box, surrounded by its contents (a dreidel, a havdalah set, a necklace, and several intricate chalices)", x: 50, y: 10},
    {source: SillyBot1Preview, alt: "A small robot with a tracking-eye component, composed of Arduino and 3D-printed parts", x: 55, y: 60},
    {source: SillyBot2Preview, alt: "A small robot with several arms extending upwards from its body, composed of Arduino parts and 3D-printed components", x: 5, y: 20},
    {source: SillyBot3Preview, alt: "A set of digital clocks, one of which always tells the current time and the other of which is stuck on a set time in the past", x: 75, y: 10},
    {source: StitchSwitchPreview, alt: "A shirt with buttons fabricated from conductive, bistable, embroidered patches", x: 90, y: 30},
    {source: StolesPreview, alt: "Several students showing off matching commencement stoles, each with the RISD seal in blue on one side and the Brown University logo in red on the other", x:80 , y: 75},
    {source: ThesisBoxPreview, alt: "A wooden box with intricately-engraved, interlocking lid panels", x: 70, y: 40},
    {source: BloomBotPreview, alt: "A colorfully-painted 3D-printed flower in bloom, attached to a servo motor", x: 105, y: 5},
    {source: Knitting2Preview, alt: "A large purple scarf in the midst of being knit", x: 100, y: 60}
    // {source: , alt: , x: , y: },
  ];

  return (
    <section className="playground-wrapper" id="playground" ref={playgroundRef}>
      <svg viewBox="0 0 1200 800" preserveAspectRatio="none">
        <path
          ref={pathRef}
          d="
            M10,10
            C100,600
            175,400
            200,200
            C220,50
            150,150
            100,500
            C90,560
            100,900
            400,600
            C450,570
            700,800
            1200,790
          "
          fill="none"
        />
      </svg>
      <div ref={ballRef} className="ball"></div>

      <div className="playground">
        <h2>Playground</h2>
        <p>Play is regarded a keystone of learning, but it also supports a number of other valuable functions beyond education and enrichment: play cultivates joy, curiosity, and conviviality, all of which help to foster resilience. At its best, play is not merely a pasttime, but in fact a lifeline in times of crisis.</p>
        <div className="playground-canvas" ref={canvasRef}>
          <div className="playground-canvas-inner" ref={innerRef}>
            {playgroundImages.map((playgroundImage, index) => (
              <PlaygroundImage key = {index} source = {playgroundImage.source} alt = {playgroundImage.alt} x={playgroundImage.x} y={playgroundImage.y}/>
            ))}
            <p>click and drag to explore</p>
            {/* Projects: Light in a Mirrored Room, Straight Skeleton, Lipstick Color Finder, Makeup, Lipstick Fabulator, Silly Robots, Vessel, Puzzle Boxes (Exquisite Poetry), BloomBot, Writing (Including Bailey's Page), Toss&Tow, Sorelle, Chopsticks, StressLess, Woolly Worm Bin, Bat Resources, Soundscape Tapestry, Diceplay, StitchSwitch, Robotic Makeup Application, Thesis Box, Metal Candlestick, Health&Habit (Including Grad Show), Brown/RISD Stoles, Knitting, PandaBugs*/}

          </div>
        </div>
      </div>

    </section>
  );
}

function Home() {

  const makingCards = [
    {ref: "/PandaBugs", title: "PandaBugs", subtitle: "A complete website UI/UX overhaul for PandaBugs, Inc., a 501(c)(3) nonprofit organization", image: PandaBugsPreview, alt: "A preview of the wireframe for PandaBugs.org", skills: [{title: "Figma"}, {title: "Information Architecture"}, {title: "Accessible Design"}, {title: "HTML/CSS/JS"}, {title: "React"}] },
    {ref: "/BatResources", title: "Bat Resources", subtitle: "A habitat intervention and an enrichment tool both for Big Brown Bats, designed and built for the Wildlife Rehabilitators Association of Rhode Island", image: BatResourcesPreview, alt: "A large, wooden bat house", skills:[{title: "Sustainable Design"}, {title: "Sketching"}, {title: "Model Making"}, {title: "Woodworking"}, {title: "Prototyping"}] },
    {ref: "/TossNTow", title: "Toss N' Tow", subtitle: "A set of interlocking, wheeled cornhole boards, designed to ease tailgate and beach fun", image: TossnTowPreview, alt: "A set of wheeled, interlocking cornhole boards", skills:[{title: "Model Making"}, {title: "Woodworking"}, {title: "Prototyping"}, {title: "Illustrator"}, {title: "Vinyl Cutting"}]  },
    {ref: "/LipstickFabulator", title: "Lipstick Fabulator", subtitle: "A machine capable of creating lipstick in (just about) any desired color, eliminating the need to purchase individual shades in single-use packaging", image: LipstickFabulatorPreview, alt: "A machine dispensing from three syringes of lipstick pigment", skills:[{title: "Arduino"}, {title: "Physical Computing"}, {title: "Fusion"}, {title: "3D Printing"}, {title: "Prototyping"}]  },
  ];

  const researchCards = [
    {ref: "/Diceplay", title: "Diceplay", subtitle: ["A low-cost, modular canvas for physical image composition", <br />, "SIGGRAPH 2026"], image: DiceplayPreview, alt: "An image of a fish, composed of colorfully-lit 3D-printed cubes (dice) in a frame", skills:[{title: "Arduino"}, {title: "Physical Computing"}, {title: "Fusion"}, {title: "3D Printing"}, {title: "Prototyping"}, {title: "Computational Design"}, {title: "User Testing"}] },
    {ref: "/Thesis", title: "Undergraduate Honors Thesis", subtitle: ['"Tilability of Platonic Solid Nets in Multiple Dimensions"',<br />, "Smith College Computer Science 2025",<br />,"Awarded Highest Honors"], image: ThesisPreview, alt: "A tiling pattern dervied from pentagons", skills:[{title: "Computational Geometry"}, {title: "Mathematica"}, {title: "Python"}, {title: "TeX"}] },
    {ref: "/Mothitor", title: "Mothitor", subtitle: "A set of computational tools for remote moth monitoring", image: MothitorPreview, alt: "A group of researchers hiking to a fieldwork site", skills:[{title: "Sustainable Design"}, {title: "Raspberry Pi"}, {title: "Physical Computing"}, {title:"Computer Vision"}, {title: "Prototyping"}, {title: "Fieldwork and Field Testing"}]  },
  ];

  if (isMobile) {
      return <div className="mobile-warning"><h1>This content is available only on larger screens. Please switch to desktop or expand your window.</h1></div>
    }

  return(
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <br />
        <br />
        <HorizontalSection title="Making" sectionID="making" content="No one will do the work of liberating on behalf of the oppressed. It is through creating our own world – engaging in the practice of ‘speculative fabulation,’ as posthumanist scholar Donna Haraway calls it – that we liberate ourselves from oppression and imposed otherness. We, ourselves, must design and fabricate our realities to reflect the imagined worlds we wish to live in." cards={makingCards} />
        <HorizontalSection title="Research" sectionID="research" content="We cannot hope to properly address those issues which we do not truly understand. A commitment to inquiry, observation, and the open exchange of ideas is corequisite to any meaningful commitment to social justice." cards={researchCards} />
        <Playground />
        <br />
      </main>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PandaBugs" element={<PandaBugs />} />
        <Route path="/BatResources" element={<BatResources />} />
        <Route path="/TossNTow" element={<TossNTow />} />
        <Route path="/LipstickFabulator" element={<LipstickFabulator />} />
        <Route path="/Diceplay" element={<Diceplay />} />
        <Route path="/Thesis" element={<Thesis />} />
        <Route path="/Mothitor" element={<Mothitor />} />
      </Routes>
    </HashRouter>
  );
}

export default App

//ToDo: French 
