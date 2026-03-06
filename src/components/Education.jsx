const educationData = [
  {
    level: "Graduation",
    school: "Bachlor of Computer Applications",
    college: "Bhagwan Mahavir University",
    detail: "2023 - 2026",
    // percentage:"8.37 / 10",
    color: "from-emerald-400 to-cyan-400",
  },
  {
    level: "Diploma",
    school: "Advance Diploma in Computer Applications",
    college: "ERA Institute of Information Technology",
    detail: "2022 - 2023",
    percentage: "78%",
    color: "from-violet-400 to-indigo-400",
  },
  {
    level: "HSC",
    school: "Senior Secondary",
    college: "RDM Intermediate College",
    detail: "2022",
    percentage: "62%",
    color: "from-amber-400 to-orange-500",
  },
  {
    level: "SSC",
    school: "Secondary School",
    college: "RDM Intermediate College",
    detail: "2022",
    percentage: "79.67%",
    color: "from-pink-500 to-rose-500",
  },
];

const Education = () => {
  return (
    <div>
      <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
        {"<"}Education{" />"}
      </h2>

      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-md">
        {educationData.map((item, index) => {
          const isLast = index === educationData.length - 1;
          return (
            <div key={item.level} className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div
                  className={`h-5 w-5 rounded-full bg-linear-to-r ${item.color} ring-4 ring-white/10 shadow-lg shadow-black/30`}
                />
                {!isLast && (
                  <div className="mt-2 h-24 w-0.5 bg-linear-to-b from-white/60 to-white/10 sm:h-28" />
                )}
              </div>

              <div className={`${!isLast ? "pb-10 sm:pb-12" : ""} w-full`}>
                <div className="flex justify-between items-center rounded-xl border border-white/10 bg-black/20 px-4 py-3 sm:px-5 sm:py-4">
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {item.level}
                    </p>
                    <p className="text-sm text-white/80">{item.school}</p>
                    <p className="text-sm text-white/80">{item.college}</p>
                    <p className="pt-1 text-xs font-medium tracking-wide text-white/60">
                      {item.detail}
                    </p>
                  </div>
                  <div className="text-3xl text-white/80 font-bold font-barlow">
                    {item.percentage ? (
                      item.percentage
                    ) : (
                      <div className="text-sm text-white/80 flex flex-col justify-center items-center">CGPA <span className="text-3xl">8.37</span> </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
