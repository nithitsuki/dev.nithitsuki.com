import { motion, MotionProps } from "framer-motion";
import React from "react";

interface TechStackProps extends MotionProps {
    className?: string;
}


const TechStack: React.FC<TechStackProps> = ({className = "" }) => {

    const techItems = [
        // Programming - [4]
        { name: "c", SvgSource: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
        { name: "java", SvgSource: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
        { name: "python", SvgSource: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "arduino", SvgSource: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg" },
        // Web Development - [8]
        { name: "html5", SvgSource: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
        { name: "css3", SvgSource: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
        { name: "javascript", SvgSource: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "typescript", SvgSource: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
        { name: "react", SvgSource: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
        { name: "nextjs", SvgSource: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.svg" },
        { name: "tailwind", SvgSource: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "hugo", SvgSource: "https://api.iconify.design/logos-hugo.svg" },
        // DevOps - [4]
        { name: "git", SvgSource: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
        { name: "bash", SvgSource: "https://www.svgrepo.com/download/353478/bash-icon.svg" },
        { name: "linux", SvgSource: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
        { name: "mysql", SvgSource: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" }
    ];
    
    return (

        <motion.div
            className={`flex flex-col h-full mt-8 ${className}`}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 30,
                delay: 0.1
            }}
        >
            <motion.h3
                className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                Technology I work with:
            </motion.h3>
            <div className="flex overflow-hidden mb-6">
                <motion.div
                    className="flex space-x-0 whitespace-nowrap"
                    // techItems.length is 16. Each item is w-24 (typically 6rem or 96px).
                    // Total width of one set of items = 16 * 96px = 1536px.
                    animate={{ x: [0, -1536] }} // Animate from 0px to -1536px
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            // Original animation: -640px in 8s (speed = 80px/s).
                            // New duration for -1536px at 80px/s = 1536px / 96px/s = 16.
                            duration: 16,
                            ease: "linear",
                        }
                    }}
                >
                    {
                        [...techItems, ...techItems].map((tech, index) => (
                            <div key={`${tech.name}-${index}`} className="h-24 w-24 flex-shrink-0">
                                <img
                                    src={tech.SvgSource}
                                    alt={tech.name}
                                    className="h-14 w-14 object-contain"
                                />
                            </div>
                        ))
                    }
                    
                </motion.div>
            </div>
        </motion.div>
    );
}

export default TechStack;