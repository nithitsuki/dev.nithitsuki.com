import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'; // Import Typist CSS
import MyBr from '@/components/MyBr';

interface TypistThingyProps {
    handleTypingDone: () => void;
    devMode?: boolean;
}

const TypistThingy = ({handleTypingDone,devMode}: TypistThingyProps) => {
  const typingDelay = devMode ? 0 : 50;
  const typingStartDelay = devMode ? 0 : 4000;
    return(
        <Typist
                  key="typing"
                  cursor={{
                    show: true,
                    blink: true,
                    element: '|',
                    hideWhenDone: true,
                    hideWhenDoneDelay: devMode ? 0 : 1000,
                  }}
                  className="text-gray-200"
                  avgTypingDelay={typingDelay}
                  startDelay={typingStartDelay}
                  onTypingDone={handleTypingDone}
                >
                  <span>Sophomore CS Student </span>
                  <Typist.Delay ms={devMode ? 0 : 900} />
                  <span> |<MyBr /> </span>
                  <div id="magic-text" className="inline-block">
                    <span> Full Stack Developer </span>
                    <Typist.Backspace count={21} delay={devMode ? 0 : 1000} />
                    <span> Software Engineer </span>
                  </div>
                  <Typist.Delay ms={devMode ? 0 : 900} />
                  <span> |<MyBr /> Made with Mistkaes</span>
                  <Typist.Backspace count={4} delay={devMode ? 0 : 700} />
                  <span>akes</span>
                  <Typist.Backspace count={8} delay={devMode ? 0 : 700} />
                  <span>Next.js</span>
                  <Typist.Delay ms={devMode ? 0 : 900} />
                </Typist>
    );
}

export default TypistThingy;