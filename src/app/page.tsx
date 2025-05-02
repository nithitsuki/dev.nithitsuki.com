/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { useEffect,  useState } from "react";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'; // Import Typist CSS

export default function Home() {  
  const words = [ "Software Engineer","Full Stack Developer"];
    const [typingDone, setTypingDone] = useState(false);
    const [magicText, setMagicText] = useState(<></>);
    
    const handleTypingDone = () => {
      setTypingDone(true);
      console.log("Typing animation has finished!");
    };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <motion.div
         // Added origin-center for scaling animation
        className="z-10 bg-transparent backdrop-blur-[2px] rounded-3xl p-4 m-1 w-full h-full max-w-[80%] mx-auto min-h-[800px] flex flex-col border-2 border-solid  shadow-2xl shadow-white/5 origin-center" // Added origin-center for scaling animation

          initial={{ scaleX: 0, scaleY: 0.1, opacity: 1, backgroundColor: 'rgb(255,255,255,0.5)', }} // Start scaled down and invisible
          animate={{
            scaleX: [0, 1, 1], // Keyframes: 0 -> 1 (0s-0.5s), 1 -> 1 (0.5s-1s)
            scaleY: [0.1, 0.1, 1], // Keyframes: 0.2 -> 0.2 (0s-0.5s), 0.2 -> 1 (0.5s-1s)
            opacity: [1, 0.4, 1], // Fade in during the first half
            backgroundColor: ['rgb(255,255,255,0.5)', 'rgb(51,51,51,0.5)', 'rgb(51, 51, 51,0.3)'], // Fade to white in the second half
          }}
          transition={{
            duration: 2, // Total duration 1 second
            ease: "easeInOut",
             // Timing for keyframes: 0s, 0.5s, 1s
            }}
          >
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }} // Delay equals the parent animation duration
            >
            <div className="flex flex-col">
    
              <div id="textgeneffectclass" className="text-5xl md:text-7xl font-extrabold ">
              <TextGenerateEffect 
              duration={1}
              delay={2}
              filter={false} 
              words={"Hi!"}
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 inline-block"
              />
              <br></br>
              <TextGenerateEffect 
              duration={1}
              delay={3}
              filter={false} 
              words={"I'm Nithilan!"} 
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-lime-300 inline-block"
              />
              </div>
              <div className="mt-6 text-xl text-gray-200">
              {!typingDone ? (
                <Typist
                  key="typing"
                  cursor={{
                    show: true,
                    blink: true,
                    element: '|',
                    hideWhenDone: true,
                    hideWhenDoneDelay: 1000,
                  }}
                  className="text-gray-200"
                  avgTypingDelay={50}
                  startDelay={4000} // Start after the TextGenerateEffect animations
                  onTypingDone={handleTypingDone} // Add this callback
                >
                  <span>Sophomore CS Student </span>
                  <Typist.Delay ms={900} />
                  <span> | </span>
                  <div id="magic-text" className="inline-block">
                    <span> Full Stack Developer </span>
                    <Typist.Backspace count={21} delay={1000} />
                    {/* <Typist.Delay ms={900} /> */}
                    <span> Software Engineer </span>
                  </div>
                  <Typist.Delay ms={900} />
                  <span> | Made with Mistkaes</span>
                  <Typist.Backspace count={4} delay={700} />
                  <span>akes</span>
                  <Typist.Backspace count={8} delay={700} />
                  <span>Next.js</span>
                </Typist>
              ) : (
                <div className="text-gray-200">
                  <span>Sophomore CS Student </span>
                  <span> |</span>
                  <FlipWords words={words} className="text-white"/>
                  <span>| Made with Next.js</span>
                </div>
              )}
            </div>
            </div>
            
            </motion.div>
        </motion.div>
    </div>
  );
}