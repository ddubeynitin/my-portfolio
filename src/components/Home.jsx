import React, { useState, useEffect, useRef } from "react";

const roles = [
  "Full-Stack Web Developer",
  "Creative Coder",
  "React Specialist",
  "Node.js Enthusiast",
  "Problem Solver",
  "Tech Learner",
];

const Home = () => {
  const [role, setRole] = useState(roles[0]);

  const indexRef = useRef(0);
  const timeoutRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      
      setVisible(false);

      timeoutRef.current = setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % roles.length;
        setRole(roles[indexRef.current]);
        setVisible(true);
      }, 500);
    }, 2000);

    return () => {
      clearInterval(id);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center px-4 py-10 @[480px]:px-10 text-center"
          data-alt="Abstract purple and blue gradient waves"
          style={{
            backgroundImage:
              'linear-gradient(rgba(22, 16, 34, 0.8) 0%, rgba(22, 16, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjGcgbumXzyi_fJ-9Wg-eArVGEjbvdoivQzQu2w8X7qPDKSbnNm4zo_f1Wdm4ejnTuOMotbX6MS5slRJi8R-NzbvbUuWoj9KBrPi4ql6L-HrTd6OTEeKkb0fkhbSba-K5AojfIxACOCphsC-XYjUZhGl4RGZq4lWJiknv6sl8bdF8yzxbmpoDH0jyK-ls7Egwz-O1EKo4j8B-7N-bcO0BqW8rtd7bCfPHfod-4LChymJgUy_jGo0TcURZjO8_ygSur972sagio2L0V")',
          }}
        >
          <div className="flex flex-col gap-4 text-center max-w-3xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Nitin Dubey <br />
              <span
                aria-live="polite"
                className={`inline-block duration-500 ease-in-out text-orange-600 text-shadow-2xs text-shadow-white ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                {role}
              </span>
            </h1>
            <h2 className="text-white/80 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">
              A passionate developer creating modern and responsive web
              applications with a focus on user experience and performance.
            </h2>
          </div>
          <a
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-colors"
            href="#projects"
          >
            <span className="truncate">View My Work</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
