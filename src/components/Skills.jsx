import {
  FaCalculator,
  FaCircleNotch,
  FaCss3,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaNode,
  FaReact,
  FaTable,
} from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
        {"<"}My Skills{" />"}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl aspect-square transition-all hover:bg-white/10 hover:scale-105">
          <FaHtml5 className="h-12 w-12 text-orange-500" />
          <p className="text-white mt-3 text-sm font-medium">HTML</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl aspect-square transition-all hover:bg-white/10 hover:scale-105">
          <FaCss3 className="h-12 w-12 text-blue-500" />
          <p className="text-white mt-3 text-sm font-medium">CSS</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl aspect-square transition-all hover:bg-white/10 hover:scale-105">
          <FaJava className="h-12 w-12 text-yellow-500" />
          <p className="text-white mt-3 text-sm font-medium">JavaScript</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl aspect-square transition-all hover:bg-white/10 hover:scale-105">
          <FaCss3Alt className="h-12 w-12 text-pink-500" />
          <p className="text-white mt-3 text-sm font-medium">Tailwind CSS</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl aspect-square transition-all hover:bg-white/10 hover:scale-105">
          <FaReact className="h-12 w-12 text-sky-500" />
          <p className="text-white mt-3 text-sm font-medium">React js</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl aspect-square transition-all hover:bg-white/10 hover:scale-105">
          <FaNode className="h-12 w-12 text-green-500" />
          <p className="text-white mt-3 text-sm font-medium">Node js</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl aspect-square transition-all hover:bg-white/10 hover:scale-105">
          <FaCircleNotch className="h-12 w-12 text-amber-500" />
          <p className="text-white mt-3 text-sm font-medium">Express</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl aspect-square transition-all hover:bg-white/10 hover:scale-105">
          <FaDatabase className="h-12 w-12 text-green-600" />
          <p className="text-white mt-3 text-sm font-medium">MongoDB</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
