import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white text-center py-16 px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Open-source, free to use, and easy to access
        </h1>
        <p className="text-lg text-gray-600 mb-8">
            Just ask, and ChatSphere can assist with AI-powered research, coding, and more.
        </p>
        <div className="flex justify-center gap-4">
            <a
            href="#get-started"
            className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition"
            >
            Try Now
            </a>
            <a
            href="#contribute"
            className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition"
            >
            Contribute To ChatSphere
            </a>
        </div>
        <div className="mt-12">
            <img
                src="/images/img1.png"
                alt="ChatSphere Illustration"
                className="mx-auto shadow-lg rounded-lg"
                style={{ boxShadow: "0px 0px 10px 15px rgba(239, 68, 68, 0.3)" }}
            />
        </div>
    </div>
  );
};

export default HeroSection;
