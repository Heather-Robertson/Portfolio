import PandaBugsBrand from "./assets/MakingPictures/pbBrand.png"
import PandaBugsColors from "./assets/MakingPictures/pbColorScheme.png"
import PandaBugsIA from "./assets/MakingPictures/pbIA.png"
import PandaBugsWireframe from "./assets/MakingPictures/pbWireframe.png"
import PandaBugsPreviewPDF from "./assets/MakingPictures/pbPreview.pdf"

import BatBolthole from "./assets/MakingPictures/BatBolthole.png"
import BatInstructions from "./assets/MakingPictures/BatInstructions.png"
import BatMobile from "./assets/MakingPictures/BatMobile.png"

import TossNTowAssmebly from "./assets/MakingPictures/TossNTowAssembly.jpeg"
import TossNTowClosed from "./assets/MakingPictures/TossNTowClosed.jpeg"
import TossNTowCutting from "./assets/MakingPictures/TossNTowCutting.jpeg"
import TossNTowLayout from "./assets/MakingPictures/TossNTowLayout.PNG"
import TossNTowLock from "./assets/MakingPictures/TossNTowLock.jpeg"
import TossNTowModelClosed from "./assets/MakingPictures/TossNTowModelClosed.jpeg"
import TossNTowModelHandle from "./assets/MakingPictures/TossNTowModelHandleUp.jpg"
import TossNTowModelOpen from "./assets/MakingPictures/TossNTowModelOpen.jpeg"
import TossNTowModelSlideIn from "./assets/MakingPictures/TossNTowModelSlideIn.jpg"
import TossNTowModelStacking from "./assets/MakingPictures/TossNTowModelStacking.jpg"
import TossNTowOpen from "./assets/MakingPictures/TossNTowOpen.jpeg"
import TossNTowPrototype from "./assets/MakingPictures/TossNTowPrototype.jpeg"
import TossNTowPrototypeTesting from "./assets/MakingPictures/TossNTowPrototypeTesting.JPG"
import TossNTowVinyl from "./assets/MakingPictures/TossNTowVinylApplication.JPG"

import LipstickArduinoSetup from "./assets/MakingPictures/LipstickArduinoSetup.jpeg"
import LipstickColorTest from "./assets/MakingPictures/LipstickColorTest.jpeg"
import LipstickDispensingTest from "./assets/MakingPictures/LipstickDispensingTest.gif"
import LipstickFinal from "./assets/MakingPictures/LipstickFinal.jpeg"
import LipstickFinalAerial from "./assets/MakingPictures/LipstickFinalAerial.jpeg"
import LipstickMotorTest from "./assets/MakingPictures/LipstickMotorTest.gif"
import LipstickPigments from "./assets/MakingPictures/LipstickPigments.jpeg"

import DiceplayDice from "./assets/ResearchFiles/DiceplayDice.jpeg"
import DiceplayDie from "./assets/ResearchFiles/DiceplayDie.jpeg"
import DiceplayDuck from "./assets/ResearchFiles/DiceplayDuck.jpeg"
import DiceplayFish from "./assets/ResearchFiles/DiceplayFish.jpeg"
import DiceplayPenguin from "./assets/ResearchFiles/DiceplayPenguin.jpeg"

import ThesisPDF from "./assets/ResearchFiles/RobertsonHeatherThesis.pdf"

import MothitorCV from "./assets/ResearchFiles/MothitorCV.png"
import MothitorFieldWork from "./assets/ResearchFiles/MothitorFieldWork.jpeg"
import MothitorOldIteration from "./assets/ResearchFiles/MothitorOldIteration.png"
import MothitorSheet from "./assets/ResearchFiles/MothitorSheet.jpeg"
import MothitorSetup from "./assets/ResearchFiles/MothitorSetup.png"

import './Project.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom';


function Nav() {
  return(
  <nav className="nav">
    <Link className="brand-link" to="/">Heather Robertson</Link>
    {/* Language Button */}
  </nav>
  );
}

function Title({title,subtitle}) {
    return(
        <section className="title">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </section>
    );
}

function ImageSection({title, subtitle, grids}){
    return(
        <section>
            <h2>{title}</h2>
            {grids.map((grid, index) => (
            <ImageGrid key={grid.title} title={grid.title} images={grid.images}/> ))}
            <p>{subtitle}</p>
        </section>
    );
}

function ImageGrid({title, images}){
    return(
        <>
        <h3>{title}</h3>
        <div className="image-grid">
            {images.map((image, index) => (
            <div><img key={image.index} src={image.source} alt={image.alt}/></div> ))}
        </div>
        </>
    );
}

function PDFSection({title, pdf}) {
    return(
        <section>
            <h2>{title}</h2>
            <div><embed src= {pdf} /></div>
        </section>
    );
}

export function PandaBugs() {

    return(
        <div className="project-page">
        <header>
            <Nav />
        </header>
        <main>
            <Title title="PandaBugs" subtitle= {<>PandaBugs, Inc. is a 501(c)(3) non-profit organization based in Western Massachusetts whose website was in desperate need of a makeover to attract sponsors, clients, volunteers, and donations. I volunteered to redesign their website, making it more visually appealing and accessible whilst still preserving their signature teal and orange color scheme. <br /> <br /> This project is ongoing. The new <a href="https://www.pandabugs.org/">PandaBugs website</a> will launch in the coming weeks.</>} />
            <PDFSection title="Current Version" pdf={PandaBugsPreviewPDF} />
            <section>
                <h2>Process</h2>
                <h3>Sketching and Wireframing</h3>
                <div class="image-grid">
                    <div><img src = {PandaBugsWireframe} style={{border: `1px solid black`, borderRadius:`10px`}} alt="A Figma wireframe for PandaBugs.org" /></div>
                    <div><img src = {PandaBugsIA} alt="A Figma diagram outlining the Information Architecture for PandaBugs.org"/><br />
                    <img src = {PandaBugsBrand} alt="A Figma sketch showing the PandaBugs.org logo and primary colors" /><br />
                    <img src = {PandaBugsColors} alt="A Figma sketch showing the full PandaBugs.org color scheme" /></div>
                </div>
            </section>
        </main>
        </div>
    );
}

export function BatResources() {
    const boltholeImageList = [
        {source: BatBolthole, alt: "A poster detailing the design process for a bat house"},
    ];

    const mobileImageList = [
        {source: BatMobile, alt: "A poster detailing the design process of a small bat enrichment toy"},
        {source: BatInstructions, alt: "An informational flyer directing wildlife rescue workers on suggested uses for a small bat enrichment toy"},
    ];

    const boltholeImageGrids = [{title:"", images: boltholeImageList}];
    const mobileImageGrids = [{title:"", images: mobileImageList}];
    

    return(
        <div className="project-page">
        <header>
            <Nav />
        </header>
        <main>
            <Title title="Bat Resources" subtitle={<>The aim of this project was to create an enrichment/engagment tool for the Wildlife Rehabilitators Association of Rhode Island as well as an in situ wildlife intervention, both designed with a single Rhode Island species in mind. Our species of focus was the big brown bat, for which we created the Bat Bolthole, a bat house suitable for both urban and rural environments, and the Bat Mobile, a hanging enrichment toy to train bats' echolocation and mobility skills during rehabilitation.<br /> <br /> This project was completed in collaboration with Janet Sun and Jack Dacey.</>}/>
            <div className="bats">
                <ImageSection title="Bat Bolthole" subtitle="" grids={boltholeImageGrids} />
                <ImageSection title="Bat Mobile" subtitle="" grids={mobileImageGrids} />
            </div>
        </main>
        </div>
    );
}

export function TossNTow() {
    const prototypeImageList = [
        {source: TossNTowOpen, alt: "A set of wheeled cornhole boards, one displaying the RISD logo and the other displaying the Brown University logo"},
        {source: TossNTowClosed, alt: "A set of wheeled cornhole boards, interlocked to create a rolling storage bin"},
    ];
    const processImageList1 = [
        {source: TossNTowModelHandle, alt: "A foamcore model cornhole board with a large handle protruding from its end"},
        {source: TossNTowModelSlideIn, alt: "A foamcore model cornhole set with boards that slide together to join"},
        {source: TossNTowModelStacking, alt: "A cardboard stacking model cornhole set"},
        {source: TossNTowModelOpen, alt: "A foamcore interlocking model cornhole set with its boards separated"},
        {source: TossNTowModelClosed, alt: "A foamcore interlocking model cornhole set with its boards joined together"},
    ];
    const processImageList2 = [
        {source: TossNTowPrototype, alt: "A wood and cardboard prototype of a wheeled cornhole board"},
        {source: TossNTowPrototypeTesting, alt: "A prototype of a wheeled cornhole board being pulled over rocks on the beach"}
    ];
    const processImageList3 = [
        {source: TossNTowCutting, alt: "A person cutting a wooden wheel at a bandsaw"},
        {source: TossNTowLayout, alt: "A flatlay of the cut wooden panels for a cornhole board"},
        {source: TossNTowAssmebly, alt: "Two people holding and nailing together the wooden panels of a cornhole board"},
        {source: TossNTowLock, alt: "A close-up of a wooden pull-and-twist lock mechanism"},
        {source: TossNTowVinyl, alt: "A person adhering a vinyl appliqué of the Brown University logo to the front of a cornhole board"},
    ];

    const prototypeImageGrids = [{title:"", images: prototypeImageList}];
    const processImageGrids = [{title:"Initial Ideation and Modeling", images: processImageList1},{title:"Prototyping and Testing", images: processImageList2},{title:"Fabrication", images: processImageList3}];
    
    return(
        <div className="project-page">
        <header>
            <Nav />
        </header>
        <main>
            <Title title="Toss N' Tow" subtitle={<>Toss N' Tow is designed to transform the chore of hauling gear for your beach days and tailgates into an opportunity for convenient, all-terrain fun. Once you've found your spot, this rugged, wheeled carrier can unlock and separate to become a pair of mobile cornhole boards. At the end of the day, simply lock the boards back together, repack your things into the storage chamber, and leave. <br /> <br />This project was completed in collaboration with Veronica Cargay, Lui Hu, Maitlyn Lang, and Aditi Vardhan.</>}/>
            <ImageSection title="Final Prototype" subtitle="" grids = {prototypeImageGrids} />
            <ImageSection title="Process" subtitle="" grids = {processImageGrids} />
        </main>
        </div>
    );
}

export function LipstickFabulator() {
    const prototypeImageList = [
        {source: LipstickFinalAerial, alt: "An aerial view of a machine prototype that dispenses lipstick pigments"},
        {source: LipstickFinal, alt: "A side view of a machine prototype that dispenses lipstick pigments"},
        {source: LipstickPigments, alt: "A closeup on three syringes of lipstick pigments (cyan, yellow, and magenta) and the opening through which the pigments are dispensed"},
    ];
    const processImageList = [
        {source: LipstickArduinoSetup, alt: "Several step motors connected to an arduino, each driving the plunger of a syringe"},
        {source: LipstickMotorTest, alt: "A step motor driving a rack-and-pinion assembly"},
        {source: LipstickDispensingTest, alt: "A step motor driving a syringe to dispense magenta pigment"},
        {source: LipstickColorTest, alt: "A small container of dispensed pigment being compared to a matching color code"},
    ];

    const prototypeImageGrids = [{title:"", images: prototypeImageList}];
    const processImageGrids = [{title:"Fabrication and Testing", images: processImageList}];
    
    return(
        <div className="project-page">
        <header>
            <Nav />
        </header>
        <main>
            <Title title="Lipstick Fabulator" subtitle="Selling makeup by single shades discourages shade diversity in product lines and causes overconsumption. Furthermore, makeup that goes unwanted for being the wrong shade is usually discarded, rather than returned or donated, due to hygiene concerns with reuse. In the current environmental crisis, we cannot entertain such wasteful consumerism. The lipstick fabulator is designed to help makeup artists and enthusiasts by eliminating the need for them to purchase a full range of individual shades in single-use packaging, instead allowing them to create personalized shades as needed in reusable containers."/>
            <ImageSection title="Final Prototype" subtitle="" grids = {prototypeImageGrids} />
            <ImageSection title="Process" subtitle="This was the first design engineering project I ever completed, just weeks after learning the basics of 3D CAD and printing. Though I did not yet have a developed design (or documentation) process, this project sparked my intrigue in design as a tool to compliment my technological work." grids = {processImageGrids} />
        </main>
        </div>
    );
}

export function Diceplay() {
    const imageList = [
        {source: DiceplayDie, alt: "A small, black-and-white plastic die with different shape primitives on each face"},
        {source: DiceplayPenguin, alt: "An image of a penguin composed of several 3D-printed black-and-white dice in a frame"},
        {source: DiceplayDice, alt: "Four small, colorfully-lit plastic die with different shape primitives on each face"},
        {source: DiceplayDuck, alt: "An image of a duck, composed of brightly-lit 3D-printed dice in a frame"},
        {source: DiceplayFish, alt: "An image of a fish, composed of colorfully-lit 3D-printed dice in a frame"},
      ];

    const imageGrids = [{title:"", images: imageList}]

    return(
        <div className="project-page">
        <header>
            <Nav />
        </header>
        <main>
            <Title title="Diceplay" subtitle={<>Coming Soon: <a href="https://s2026.conference-schedule.org/presentation/?id=papers_1321&sess=sess128">SIGGRAPH 2026</a></>}/>
            <ImageSection title="Project Teaser" subtitle="" grids = {imageGrids} />
        </main>
        </div>
    );
}

export function Thesis() {

    return(
        <div className="project-page">
        <header>
            <Nav />
        </header>
        <main>
            <Title title="Thesis" subtitle="This thesis was completed under the supervision of Ileana Streinu and in satisfaction of the requirements for an honors degree from the Department of Computer Science of Smith College, from which it was awarded Highest Honors."/>
            <PDFSection title="" pdf={ThesisPDF} />
        </main>
        </div>
    );
}

export function Mothitor() {
    const imageList = [
        {source: MothitorFieldWork, alt: "A group of researchers hiking to a fieldwork site"},
        {source: MothitorSheet, alt: "A bright white sheet with several moths on it"},
        {source: MothitorOldIteration, alt: "A steel frame holding a small white canvas with several moths on it, lit by a blue light"},
        {source: MothitorSetup, alt: "A steel frame holding a small white canvas, a mercury lap, and a camera, connected to a Raspberry Pi and a large battery in a nearby container"},
        {source: MothitorCV, alt: "An annotated image, showing several moths identified by blue rectangular frames"},
      ];

    const imageGrids = [{title:"", images: imageList}]

    return(
        <div className="project-page">
        <header>
            <Nav />
        </header>
        <main>
            <Title title="Mothitor" subtitle={<>One of the major challenges for biologists, ecologists, anthropologists, and other professionals who study animal activity is the exigency of fieldwork, particularly for rare, reclusive, and/or nocturnal species. This project aims to create an affordable, open-source tool to facilitate observation, specifically for moths and other nocturnal insect species. We use a microprocessor and computer vision analysis to enable remote data gathering and expedite data processing for observational research. <br /><br />Interested in learning more? Read an article <a href="https://www.smith.edu/news-events/news/butterflies-and-moths-changing-climate">[1]</a> <a href="https://www.smith.edu/news-events/news/building-better-moth-trap">[2]</a> about the Mothitor or watch a webinar recording <a href="https://wildlabs.net/event/automated-moth-monitoring-you">[3]</a> on automated moth monitoring.</>}/>
            <ImageSection title="Process" subtitle="My work on the mothitor spanned several months and three iterations. I spent time in the field practicing traditional moth observation methods and tested previous mothitor iterations to obtain a strong understanding of areas necessitating improvement, then planned and implemented designs in collaboration with biologists, ecologists, engineers, data scientists, and other computer scientists." grids = {imageGrids} />
        </main>
        </div>
    );
}
