import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { Draggable } from "gsap/Draggable.js";

import { MobileView, isMobile } from 'react-device-detect';

gsap.registerPlugin(
  ScrollTrigger,
  MotionPathPlugin,
  Draggable,
  useGSAP
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
