import Navbar from "../components/Navbar";
import Image from "next/image";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaLaptopCode,
  FaTools,
  FaUsers,
  FaLaptop,
} from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

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
                <h2 className="text-2xl font-semibold text-white mb-6">
                  John Pires
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  I am currently pursuing a Master's degree in Computer Systems
                  Engineering at the Federal University of Alagoas (UFAL). I
                  have a Bachelor's degree in Computer Engineering from the
                  Federal University of Alagoas (UFAL).
                </p>
                <p className="text-gray-300 text-lg mb-6">
                  Currently, I'm working at AB InBev, specifically at BEES
                  Brasil, and I am also part of the EASY laboratory, working as
                  a Machine Learning researcher on projects in partnership with
                  the Federation of Industries of the State of Alagoas (FIEA).
                </p>
                <p className="text-gray-300 text-lg">
                  Previously, I was an IEL researcher in partnership with Ford
                  Motor Company. I was also a member of the EDGE/UFAL Innovation
                  Center and collaborated with HUAWEI on the "Smart Cities"
                  project, focusing on computer vision, specifically with
                  TensorFlow/Keras. Previously, I worked as an instructor in the
                  "Big Data Training - HUAWEI" project, obtaining the HCIA
                  certification in Big Data and the Academy Instructor
                  certification, with a theoretical focus on FusionInsightHD
                  architecture. Simultaneously, I volunteered for the TATU
                  Project, which develops a mobile solution to assist people
                  with disabilities in museums and tourist attractions, managing
                  the mobile front-end using the Ionic framework and the web
                  front-end, working with frameworks like Bootstrap.
                  Additionally, I was a member of the TifloTex extension group
                  from 2019 to 2020.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <FaCode className="text-3xl text-primary" />
                <h2 className="text-2xl font-semibold text-white">
                  Technical Skills
                </h2>
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
                    <h3 className="text-lg font-medium text-white">
                      Tools & Others
                    </h3>
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
                    <h3 className="text-lg font-medium text-white">
                      Soft Skills
                    </h3>
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
                <h2 className="text-2xl font-semibold text-white">
                  Work Experience
                </h2>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-800 p-8 rounded-lg mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">Machine Learning Engineer</h3>
                      <h4 className="text-lg text-gray-400">AB InBev</h4>
                    </div>
                    <div className="flex gap-2 mt-2 md:mt-0 flex-wrap">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">Data Science</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">Python</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">Statistical Modeling</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">Azure</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">Cloud</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">Full-time | Oct 2024 - Present · 9 mos | Campinas, São Paulo, Brazil · Remote</p>
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    <li>Worked using Microsoft Cloud technologies, Azure Cloud</li>
                    <li>Developed and refactored modules that handle large volumes of data</li>
                    <li>Implemented DAGs and pipelines for model training and inference</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-8 rounded-lg mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">Master Developer (Engineering and System Group)</h3>
                      <h4 className="text-lg text-gray-400">Centro de Pesquisa em Engenharia e Sistemas - EASY</h4>
                    </div>
                    <div className="flex gap-2 mt-2 md:mt-0 flex-wrap">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">Pose Estimation</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">YOLO</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">Neural Networks</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">FastAPI</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">Health</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary/20 pl-4">
                      <h5 className="text-white font-medium mb-2">Master Developer (Mar 2024 - Present · 1 yr 4 mos | Maceió, Alagoas, Brazil)</h5>
                      <p className="text-gray-300 mb-3">Working on a project focused on musculoskeletal analysis to enhance postural health in the work environment. Utilizing YOLO for people detection, BlazePose GHUM for kinematic pose analysis, and FastAPI to integrate these models.</p>
                    </div>
                    <div className="border-l-2 border-primary/20 pl-4">
                      <h5 className="text-white font-medium mb-2">Master Developer (May 2022 - Present · 3 yrs 2 mos | Maceió, Alagoas, Brazil)</h5>
                      <p className="text-gray-300 mb-3">Worked on a facial detection and recognition project for automating school attendance using machine learning models. Utilized Dlib for facial detection and implemented ResNet and CNN neural network models for recognition. Integrated APScheduler, Django, and OpenCV for the full solution. Managed extensive data from an entire school, ensuring compliance with the Brazilian General Data Protection Law (LGPD).</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-8 rounded-lg mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">
                        Data Scientist & AI Researcher
                      </h3>
                      <h4 className="text-lg text-gray-400">
                        Ford Motor Company
                      </h4>
                    </div>
                    <div className="flex gap-2 mt-2 md:mt-0 flex-wrap">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                        Data Science
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                        AI/ML
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                        NLP
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                        Remote
                      </span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary/20 pl-4">
                      <h5 className="text-white font-medium mb-2">
                        Data Scientist
                      </h5>
                      <p className="text-gray-400 mb-2">
                        Full-time | Sep 2024 - Oct 2024 · 2 mos | Camaçari,
                        Bahia, Brazil · Remote
                      </p>
                      <ul className="text-gray-300 list-disc list-inside space-y-2">
                        <li>
                          Worked collecting and structuring data using Google
                          BigQuery and Looker Studio
                        </li>
                        <li>Studied Terraform by attending a course</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-primary/20 pl-4">
                      <h5 className="text-white font-medium mb-2">
                        Artificial Intelligence Researcher CV&S
                      </h5>
                      <p className="text-gray-400 mb-2">
                        Contract | Oct 2023 - Sep 2024 · 1 yr | Camaçari, Bahia,
                        Brazil · Remote
                      </p>
                      <ul className="text-gray-300 list-disc list-inside space-y-2">
                        <li>
                          Developed an NLP-based model for identifying text
                          similarities
                        </li>
                        <li>
                          Utilized LLMs, specifically the BAAI model, NLTK, and
                          FastAPI
                        </li>
                        <li>
                          Deployed the application to production on GCP, using
                          Artifact Registry and Cloud Run, with infrastructure
                          managed through Terraform
                        </li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-primary/20 pl-4">
                      <h5 className="text-white font-medium mb-2">
                        Artificial Intelligence Researcher CV&S
                      </h5>
                      <p className="text-gray-400 mb-2">
                        Contract | Sep 2022 - Oct 2023 · 1 yr 2 mos | Camaçari,
                        Bahia, Brazil · Remote
                      </p>
                      <ul className="text-gray-300 list-disc list-inside space-y-2">
                        <li>
                          Developed an API and recommendation system focused on
                          integrating with GitHub to provide recommendations for
                          internal company actions related to code
                        </li>
                        <li>
                          Utilized FastAPI, KNN, Scikit Learn, Pandas, Python,
                          and GitHub API for development
                        </li>
                        <li>
                          Deployed the application to production using GCP
                          services, including Artifact Registry and Cloud Run
                        </li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-primary/20 pl-4">
                      <h5 className="text-white font-medium mb-2">
                        Artificial Intelligence Researcher CV&S
                      </h5>
                      <p className="text-gray-400 mb-2">
                        Part-time | Sep 2021 - Sep 2022 · 1 yr 1 mo | Camaçari,
                        Bahia, Brazil
                      </p>
                      <ul className="text-gray-300 list-disc list-inside space-y-2">
                        <li>
                          Worked on creating AI applications for Ford, initially
                          focusing on reinforcement learning to elevate team
                          capabilities
                        </li>
                        <li>
                          Contributed to a project involving style translation
                          using Conditional Adversarial Generative Networks by
                          fine-tuning the model using PyTorch, Tensorboard, and
                          HPC
                        </li>
                        <li>
                          Supported Ford's Greenfield Labs in Palo Alto, CA with
                          advanced AI solutions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-1">
                    Scientific Initiation Scholar
                  </h3>
                  <h4 className="text-lg text-gray-400">
                    Universidade Federal de Alagoas
                  </h4>
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                    Research
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                    AI/ML
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                    PyTorch
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Oct 2021 - Mar 2023 | Maceió, AL, Brazil (Remote)
              </p>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-4">
                  <h5 className="text-white font-medium mb-2">
                    Medical Image Translation Research
                  </h5>
                  <p className="text-gray-300 mb-3">
                    Part-time research position focused on medical image
                    translation and GAN models.
                  </p>
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    <li>
                      Volunteered in a research project focused on enhancing the
                      MMI-GAN model for intermodal and extramodal medical image
                      translation
                    </li>
                    <li>
                      Developed solutions to address challenges in medical
                      imaging with limited resources
                    </li>
                    <li>
                      Implemented model improvements using PyTorch for CT to MRI
                      (extramodal) and T1 to T2 MRI (intramodal) image
                      translation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-1">
                    Scholar
                  </h3>
                  <h4 className="text-lg text-gray-400">
                    Centro de Inovação EDGE
                  </h4>
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                    AI/ML
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                    Research
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                    Computer Vision
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                    Big Data
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                    Instructor
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Sep 2020 - Jan 2022 | Maceió, AL, Brazil (Remote)
              </p>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-4">
                  <h5 className="text-white font-medium mb-2">
                    Lenovo Fault Detection Project
                  </h5>
                  <p className="text-gray-300 mb-3">
                    Short-term engagement as a Scholar in the AI team.
                  </p>
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    <li>
                      Assisted the AI team in the Lenovo Fault Detection project
                    </li>
                    <li>
                      Worked as a note taker to reduce the workload of the core
                      team
                    </li>
                    <li>
                      Utilized CVAT for data annotation during the project
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/20 pl-4">
                  <h5 className="text-white font-medium mb-2">
                    HUAWEI Smart Cities Project
                  </h5>
                  <p className="text-gray-300 mb-3">
                    Scholar role in the Artificial Intelligence team for the
                    "Smart Cities" project in partnership with HUAWEI.
                  </p>
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    <li>
                      Developed a web application dashboard for HUAWEI cameras,
                      integrating our model to detect extreme situations of
                      violence and crowding
                    </li>
                    <li>
                      Worked with annotation tools like CVAT, machine learning
                      frameworks such as TensorFlow, and front-end development
                      using Vue.js, Vuetify and Axios
                    </li>
                    <li>
                      Collaborated with cross-functional teams to implement and
                      deploy AI solutions
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/20 pl-4">
                  <h5 className="text-white font-medium mb-2">
                    HUAWEI Big Data Training
                  </h5>
                  <p className="text-gray-300 mb-3">
                    Scholar role as a Big Data instructor in the HUAWEI Academy
                    program.
                  </p>
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    <li>
                      Taught 4 different classes on handling FusionInsightHD 2.0
                      and its tools (HDFS, MapReduce, Flink, Spark, and Hive)
                    </li>
                    <li>
                      Obtained the HUAWEI Big Data course certification to meet
                      HUAWEI's teaching standards
                    </li>
                    <li>
                      Earned the HUAWEI Instructor Certification to officially
                      instruct at the HUAWEI level
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-1">
                    Mobile and Web Developer
                  </h3>
                  <h4 className="text-lg text-gray-400">
                    Federal University of Alagoas (UFAL)
                  </h4>
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                    Mobile
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                    Web
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                    Full-stack
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Feb 2020 - Jul 2021 | Maceió, AL, Brazil (Remote)
              </p>
              <p className="text-gray-300 mb-4">
                Worked on the TATU Project (Tecnologia Assistiva no Turismo)
                under the guidance of Prof. Dr. Fábio Coutinho.
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li>
                  Contributed as a mobile developer for the TATU app using
                  Ionic, Angular, and TypeScript
                </li>
                <li>
                  Developed the project's website as a web developer, leveraging
                  React, Bootstrap, and PostgreSQL for a comprehensive
                  full-stack solution
                </li>
                <li>
                  Implemented responsive design principles ensuring
                  accessibility for users with disabilities
                </li>
              </ul>
              <div className="mt-4 text-gray-400 text-sm">
                <p>
                  Project website:{" "}
                  <a
                    href="https://projetotatu.com.br"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://projetotatu.com.br
                  </a>
                </p>
                <p>
                  Published article:{" "}
                  <a
                    href="https://doi.org/10.5753/semish.2021.15808"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://doi.org/10.5753/semish.2021.15808
                  </a>
                </p>
              </div>
            </div>

            <div className="mb-16 mt-10">
              <div className="flex items-center gap-3 mb-8">
                <FaGraduationCap className="text-3xl text-primary" />
                <h2 className="text-2xl font-semibold text-white">Education</h2>
              </div>
              <div className="space-y-8 mb-4">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Computer Engineering Degree
                  </h3>
                  <p className="text-gray-400 mb-4">2018 - 2023</p>
                  <p className="text-gray-300">
                    I studied Computer Engineering with a focus on data science
                    and software engineering. I actively participated in
                    research projects and gained experience in industry-related
                    environments.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Master's Degree in Computer Systems Engineering
                  </h3>
                  <p className="text-gray-400 mb-4">2024 - Current</p>
                  <p className="text-gray-300">
                    Currently pursuing a Master's degree in Computer Systems
                    Engineering at the Federal University of Alagoas (UFAL). My
                    research focuses on Machine Learning and Deep Learning
                    applied into the education field, by performing automatic
                    attendance and attention analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <FaAward className="text-3xl text-primary" />
                <h2 className="text-2xl font-semibold text-white">
                  Certifications
                </h2>
              </div>
              <div className="space-y-8 mb-4">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Huawei Certified Academy Instructor
                  </h3>
                  <p className="text-gray-400 mb-4">2020</p>
                  <p className="text-gray-300">
                    Successfully completed the Huawei Certified Academy
                    Instructor certification, mastering the conceptualization
                    and structure of Huawei's ICTs.
                  </p>
                </div>
              </div>
              <div className="space-y-8 mb-4">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-medium text-white mb-3">
                    HCIA - Big Data Course
                  </h3>
                  <p className="text-gray-400 mb-4">2020</p>
                  <p className="text-gray-300">
                    My HCIA-Big Data certification demonstrates my grasp of
                    essential big data principles and equips me with the
                    knowledge to work with cutting-edge platforms like Huawei's
                    FusionInsight HD.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-medium text-white mb-3">
                    EFSET English Certificate (C2 Proficient)
                  </h3>
                  <p className="text-gray-400 mb-4">2023</p>
                  <p className="text-gray-300">
                    I hold the EFSET English Certificate at C2 Proficient level,
                    demonstrating my command of English, ability that I
                    developed during my experiences working with multinational
                    companies.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <FaUsers className="text-3xl text-primary" />
                <h2 className="text-2xl font-semibold text-white">
                  Personal Interests
                </h2>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <p className="text-gray-300 text-lg mb-6">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through technical writing. I'm also passionate
                  about photography and enjoy capturing moments through my lens.
                </p>
                <p className="text-gray-300 text-lg">
                  I believe in giving back to the community and often
                  participate in local tech meetups and workshops. My goal is
                  not only to grow as a developer but also to help others in
                  their journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
