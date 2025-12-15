import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
        {"<"}Contact{" />"}
      </h2>
      <div className="flex flex-col items-center justify-center">
        <p className="text-white/70 text-sm mb-4">
          Feel free to reach out to me via email at{" "}
          <a
            href="mailto:ddubeynitin30@gmail.com"
            className="text-blue-400 hover:underline"
          > Contact Me </a>
          or connect with me on LinkedIn.
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:https://www.linkedin.com/in/nitin-dubey-1a862a282" 
            className="text-white hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
        

  )
}

export default Contact