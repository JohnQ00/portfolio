"use client";

import Navbar from "../components/Navbar";
import ProjectFilter from "../components/projectsFilter";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <section className="min-h-screen bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto py-8 px-6 md:px-8">
          <div className="prose prose-invert max-w-none">
            <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-white mb-12">
                  Projects
                </h1>
                <p className="text-gray-300 text-lg mb-1">
                  I'm a frontend developer passionate about creating beautiful
                  and performant web applications. With a strong foundation in
                  modern web technologies, I focus on delivering exceptional
                  user experiences through clean code and intuitive design.
                </p>
              </div>
            </div>

            <ProjectFilter></ProjectFilter>
          </div>
        </div>
      </section>
    </main>
  );
}
