import imageDaniel from "./assets/image-daniel.jpg";
import imageJonathan from "./assets/image-jonathan.jpg";
import imageKira from "./assets/image-kira.jpg";
import imageJeanette from "./assets/image-jeanette.jpg";
import imagePatrick from "./assets/image-patrick.jpg";

const App = () => {
  return (
    <div className="grid grid-cols-4 gap-7 max-w-6xl p-4">
      <div className="lg:col-span-2 col-span-full bg-[#7541c8] p-7 rounded-[10px] shadow-xl">
        <div className="flex items-center mb-4">
          <img
            src={imageDaniel}
            alt="Daniel"
            className="h-8 rounded-full mr-3"
          />
          <div className="flex flex-col">
            <h3 className="text-xs text-white">Daniel Clifford</h3>
            <span className="text-[11px] text-gray-300 opacity-70">
              Verified Graduate
            </span>
          </div>
        </div>
        <h2 className="text-lg text-white font-semibold leading-6 mb-6">
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny’s worth.
        </h2>
        <p className="text-gray-300 text-xs opacity-70 leading-normal">
          “ I was an EMT for many years before I joined the bootcamp. I’ve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I’ve successfully switched careers, working as
          a Software Engineer at a VR startup. ”
        </p>
      </div>
      <div className="lg:col-start-3 lg:row-start-1 lg:col-span-1 md:col-span-2 col-span-full bg-slate-600 p-7 rounded-[10px] shadow-xl">
        <div className="flex items-center mb-4">
          <img
            src={imageJonathan}
            alt="Jonathan"
            className="h-8 rounded-full mr-3"
          />
          <div className="flex flex-col">
            <h3 className="text-xs text-white"> Jonathan Walters</h3>
            <span className="text-[11px] text-gray-300 opacity-70">
              Verified Graduate
            </span>
          </div>
        </div>
        <h2 className="text-lg text-white font-semibold leading-6 mb-6">
          The team was very supportive and kept me motivated
        </h2>
        <p className="text-gray-200 text-xs opacity-70 leading-normal">
          “ I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I’ve made in myself. ”
        </p>
      </div>

      <div className="lg:col-start-1 lg:row-start-2 lg:col-span-1 md:col-span-2 col-span-full bg-white p-7 rounded-[10px] shadow-xl">
        <div className="flex items-center mb-4">
          <img
            src={imageJeanette}
            alt="Jonathan"
            className="h-8 rounded-full mr-3"
          />
          <div className="flex flex-col">
            <h3 className="text-xs text-gray-600"> Jeanette Harmon</h3>
            <span className="text-[11px] text-gray-500 opacity-70">
              Verified Graduate
            </span>
          </div>
        </div>
        <h2 className="text-lg text-gray-600 font-semibold leading-6 mb-6">
          An overall wonderful and rewarding experience
        </h2>
        <p className="text-gray-800 text-xs opacity-80 leading-normal">
          “ Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love. ”
        </p>
      </div>

      <div className="lg:col-span-2 col-span-full bg-slate-900 p-7 rounded-[10px] shadow-xl">
        <div className="flex items-center mb-4">
          <img
            src={imagePatrick}
            alt="Patrick"
            className="h-8 rounded-full mr-3"
          />
          <div className="flex flex-col">
            <h3 className="text-xs text-white"> Patrick Abrams</h3>
            <span className="text-[11px] text-gray-400">Verified Graduate</span>
          </div>
        </div>
        <h2 className="text-lg text-white font-semibold leading-6 mb-6">
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy.
        </h2>
        <p className="text-gray-300 text-xs leading-normal">
          “ The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of smart and amazing
          people. ”
        </p>
      </div>
      <div className="lg:row-span-2 lg:col-start-4 lg:row-start-1 col-span-full bg-white p-7 rounded-[10px] shadow-xl">
        <div className="flex items-center mb-4">
          <img src={imageKira} alt="Kira" className="h-8 rounded-full mr-3" />
          <div className="flex flex-col">
            <h3 className="text-xs text-gray-600"> Kira Whittle</h3>
            <span className="text-[11px] text-gray-500 opacity-70">
              Verified Graduate
            </span>
          </div>
        </div>
        <h2 className="text-lg text-gray-600 font-semibold leading-6 mb-6">
          Such a life-changing experience. Highly recommended!
        </h2>
        <p className="text-gray-600/80 text-xs leading-normal">
          “ Before joining the bootcamp, I’ve never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I’ve
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend! ”
        </p>
      </div>
    </div>
  );
};

export default App;
