import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

interface TitleSectionProps {
    devMode?: boolean;
}
const TitleSection = ({devMode}: TitleSectionProps) => {

  const textGenDuration = devMode ? 0 : 1;
  const textGenDelay1 = devMode ? 0 : 2;
  const textGenDelay2 = devMode ? 0 : 3;
  const titleline1 = "Hi!";
  const titleline2 = "I'm Nithilan!";

return(
                <div id="textgeneffectclass" className="text-5xl md:text-7xl font-extrabold m-0 p-0">
                  <TextGenerateEffect
                    duration={textGenDuration}
                    delay={textGenDelay1}
                    filter={false}
                    words={titleline1}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 inline-block"
                  />
                  <br></br>
                  <TextGenerateEffect
                    duration={textGenDuration}
                    delay={textGenDelay2}
                    filter={false}
                    words={titleline2}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-lime-300 inline-block  m-0 p-0"
                  />
                </div>
);
}

export default TitleSection;