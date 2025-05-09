/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";
import { FlipWords } from "@/components/ui/flip-words";
import {useState } from "react";

// MY Components
import MyBr from "@/components/MyBr";
import AnimatedContainer from "@/components/main-page/ExpandingContainer";
import TechStack from "@/components/main-page/TechStack";
import TitleSection from "@/components/main-page/TitleSection";
import TypistThingy from "@/components/main-page/TypistThingy";

export default function Home() {
  // ===== CONFIGURATION AND STATE =====
  const devMode = false; // Changed from let to const for better practice
  
  // Animation duration variables
  const containerAnimDuration = devMode ? 0 : 2;
  const flipWordsDuration = devMode ? 0 : 6000;
  
  // ===== STATE MANAGEMENT =====
  const words = [" Software Engineer", " Full Stack Developer"];
  const [typingDone, setTypingDone] = useState(false);
  
  // ===== EVENT HANDLERS =====
  const handleTypingDone = () => {
    setTypingDone(true);
    console.log("Typing animation has finished!");
  };

  return(
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* ===== BACKGROUND =====  */}
      <ParticlesBackground />
      
      {/* ===== MAIN CONTAINER =====  */}
      <AnimatedContainer containerAnimDuration={containerAnimDuration}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: containerAnimDuration }}>
          <div className="flex flex-col">
            {/* ===== TITLE SECTION =====  */}
            <TitleSection devMode={devMode} />

            {/* ===== TYPING ANIMATION SECTION =====  */}
            <div className="mt-4 text-xl text-gray-200">
              {!typingDone ? ( <TypistThingy handleTypingDone={handleTypingDone} devMode={devMode} /> ) : (
                <div className="text-gray-200">
                  <span>Sophomore CS Student </span>
                  <span> |<MyBr /> </span>
                  <FlipWords words={words} className="text-white" duration={flipWordsDuration} />
                  <span>| <MyBr />Made with Next.js</span>
                </div>
              )}
            </div>
          </div>

          {/* ===== CONTENT SECTION (CONDITIONALLY RENDERED) =====  */}
          {typingDone && 
          (
            <div className="flex flex-col mt-2">
                <div className="h-[30vh]">
                <motion.h3
                        className="text-xl md:text-2xl font-bold text-white mt-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >Who am I ?</motion.h3>
                  <motion.p
                      className="text-gray-300 md:text-lg text-center max-w-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                  >
                      To be Decided!
                  </motion.p>
                  <br></br>
                  <motion.h3
                        className="text-xl md:text-2xl font-bold text-white mt-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >Contact Me ?</motion.h3>
                  <motion.p
                      className="text-gray-300 md:text-lg text-center max-w-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                  >To Do: Github, Email.
                  </motion.p>
                </div>
            <TechStack></TechStack>
            </div>
          )}
        </motion.div>
      </AnimatedContainer>
    </div>
  );
}