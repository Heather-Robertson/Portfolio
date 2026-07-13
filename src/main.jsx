import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(
  ScrollTrigger,
  MotionPathPlugin,
  Draggable,
  useGSAP
);

console.log("GSAP:", gsap.version);
console.log("Registered:", gsap.core.globals().ScrollTrigger);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
