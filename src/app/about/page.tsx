import Navbar from '../components/Navbar';
import Image from "next/image";
import { FaCode, FaGraduationCap, FaBriefcase, FaAward, FaLaptopCode, FaTools, FaUsers, FaLaptop } from 'react-icons/fa';
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiGit } from 'react-icons/si';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto py-8 px-6 md:px-8">
          <h1 className="text-4xl font-bold text-white mb-12">About Me</h1>
          <div className="prose prose-invert max-w-none">
            <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/10 flex-shrink-0">
                <Image
                  src="/eles.jpg"
                  alt="John Pires"
                  fill
                  sizes="(max-width: 768px) 192px, 256px"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white mb-6">John Pires</h2>
                <p className="text-gray-300 text-lg mb-6">
                  I'm a frontend developer passionate about creating beautiful and performant web applications.
                  With a strong foundation in modern web technologies, I focus on delivering exceptional user experiences
                  through clean code and intuitive design.
                </p>
                <p className="text-gray-300 text-lg">
                  My journey in web development started with a curiosity about how things work on the internet,
                  which led me to dive deep into the world of frontend development. I believe in continuous learning
                  and staying up-to-date with the latest technologies and best practices.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <FaCode className="text-3xl text-primary" />
                <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <FaLaptopCode className="text-xl text-primary" />
                    <h3 className="text-lg font-medium text-white">Frontend</h3>
                  </div>
                  <ul className="text-gray-300 space-y-4">
                    <li className="flex items-center gap-3">
                      <SiReact className="text-xl" />
                      <span>React / Next.js</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <SiTypescript className="text-xl" />
                      <span>TypeScript</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <SiTailwindcss className="text-xl" />
                      <span>Tailwind CSS</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCode className="text-xl" />
                      <span>HTML5 / CSS3</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <FaTools className="text-xl text-primary" />
                    <h3 className="text-lg font-medium text-white">Tools & Others</h3>
                  </div>
                  <ul className="text-gray-300 space-y-4">
                    <li className="flex items-center gap-3">
                      <SiGit className="text-xl" />
                      <span>Git / GitHub</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaLaptop className="text-xl" />
                      <span>VS Code</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCode className="text-xl" />
                      <span>Responsive Design</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCode className="text-xl" />
                      <span>UI/UX Principles</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <FaUsers className="text-xl text-primary" />
                    <h3 className="text-lg font-medium text-white">Soft Skills</h3>
                  </div>
                  <ul className="text-gray-300 space-y-4">
                    <li className="flex items-center gap-3">
                      <FaCode className="text-xl" />
                      <span>Problem Solving</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaUsers className="text-xl" />
                      <span>Team Collaboration</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaUsers className="text-xl" />
                      <span>Communication</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCode className="text-xl" />
                      <span>Time Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <FaBriefcase className="text-3xl text-primary" />
                <h2 className="text-2xl font-semibold text-white">Work Experience</h2>
              </div>
              <div className="space-y-8">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-medium text-white mb-3">Frontend Developer</h3>
                  <p className="text-gray-400 mb-4">2022 - Present</p>
                  <p className="text-gray-300">
                    Working on various web applications using modern technologies like React, Next.js, and TypeScript.
                    Focused on creating responsive and accessible user interfaces while maintaining high performance standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <FaGraduationCap className="text-3xl text-primary" />
                <h2 className="text-2xl font-semibold text-white">Education</h2>
              </div>
              <div className="space-y-8">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-medium text-white mb-3">Computer Science Degree</h3>
                  <p className="text-gray-400 mb-4">2018 - 2022</p>
                  <p className="text-gray-300">
                    Studied computer science with a focus on web development and software engineering.
                    Participated in various hackathons and coding competitions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <FaAward className="text-3xl text-primary" />
                <h2 className="text-2xl font-semibold text-white">Certifications</h2>
              </div>
              <div className="space-y-8">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-medium text-white mb-3">Web Development Certification</h3>
                  <p className="text-gray-400 mb-4">2022</p>
                  <p className="text-gray-300">
                    Completed comprehensive web development certification covering modern frontend technologies
                    and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <FaUsers className="text-3xl text-primary" />
                <h2 className="text-2xl font-semibold text-white">Personal Interests</h2>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <p className="text-gray-300 text-lg mb-6">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge through technical writing. I'm also passionate about photography and enjoy
                  capturing moments through my lens.
                </p>
                <p className="text-gray-300 text-lg">
                  I believe in giving back to the community and often participate in local tech meetups and workshops.
                  My goal is not only to grow as a developer but also to help others in their journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
