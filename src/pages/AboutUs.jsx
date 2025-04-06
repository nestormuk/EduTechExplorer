import React from 'react';


const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4  py-10 space-y-12">
      {/* About Us Section */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <img
          src="/About us page-cuate.png"
          alt="About Us"
          className="w-full h-auto"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            <strong>EduTech Explorer</strong> is your go-to platform for discovering top universities,
            courses, and trending tech topics. We help learners find the best academic paths aligned
            with their career dreams—whether you're exploring higher education or the latest in tech.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            We curate insightful content to guide you through choosing the right university or course
            to boost your future in technology and beyond.
          </p>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="items-center text-center bg-gradient-to-r from-blue-300 rounded-full  py-10 text-black">
        <div>
          <h2 className="text-3xl font-bold mb-4">How We Can Help</h2>
          <p className="text-lg w-full md:w-3/4 mx-auto mb-4">
            Looking for the perfect course or university? We spotlight educational institutions and
            tech trends to support your journey, helping you make informed decisions with confidence.
          </p>
        </div>
       
      </section>

      {/* Contact Us Section */}
      <section className="grid md:grid-cols-2 gap-6 items-center">

        <div>
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Are you a university or course provider? Want to feature your programs on our platform?
        </p>
        <div className=" rounded-xl p-4 space-y-4 max-w-md">
          <div className="flex items-center gap-3">
            <span className="text-blue-500">📧</span>
            <span className="text-gray-800">nestor.musanzivwa@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-500">📞</span>
            <span className="text-gray-800">+250 791 091 816</span>
          </div>
        </div>
        </div>

        <img
          src="/Mention-bro.png"
          alt="How We Help"
          className="w-full h-auto"
        />
    </section>

    </div>
  );
};

export default AboutPage;
