import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 p-6">
      <div className="max-w-2xl text-center">
        {/* Logo / Title */}
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
          MeetMate
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your smart companion for effortless meetings. <br />
          Schedule, connect, and collaborate — all in one place.
        </p>

        {/* Call-to-actions */}
        <div className="flex gap-4 justify-center">
          <a
            href="/signup"
            className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="px-6 py-3 rounded-2xl bg-white text-blue-600 border border-blue-300 font-semibold shadow-sm hover:bg-blue-50 transition"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-500">
        © {new Date().getFullYear()} MeetMate — All Rights Reserved
      </footer>
    </main>
  );
}
