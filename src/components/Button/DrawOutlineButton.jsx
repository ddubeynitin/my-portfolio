
const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative animate-bounce px-4 py-2 mt-5 font-medium font-barlow text-yellow-100 transition-colors duration-400 border border-gray-400 hover:border-0 hover:text-indigo-300"
    >
      <span className="flex justify-center items-center gap-3">{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-0.5 w-0 bg-yellow-500 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-0.5 bg-yellow-500 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-yellow-500 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-0.5 bg-yellow-500 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default DrawOutlineButton;