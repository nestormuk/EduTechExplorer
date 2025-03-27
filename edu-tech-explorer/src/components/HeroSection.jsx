export default function HeroSection() {
    return (
      <section className="bg-white text-black py-20 px-6 text-center">
        {/* Hero Text */}
        <h1 className="text-3xl md:text-5xl font-bold">
          Discover the Perfect Path for Your <span className="text-blue-500">Tech</span> 
          <br />
          <span className="text-blue-500">Education</span>
        </h1>
        
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Find universities, training programs, and stay updated with the latest tech trends to shape your future in the technology industry.
        </p>
  
        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
            Explore Universities
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition">
            View More Tech Trends
          </button>
        </div>
  
        {/* Stats Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-10">
          <div className="text-center">
            <p className="text-3xl font-bold">500+</p>
            <p className="text-gray-500">Universities</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">999+</p>
            <p className="text-gray-500">Courses</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">102+</p>
            <p className="text-gray-500">Tech Topics</p>
          </div>
        </div>
      </section>
    );
  }
  