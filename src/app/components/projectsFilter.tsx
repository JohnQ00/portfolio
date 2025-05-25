// components/ProjectFilter.js
"use client";

import React, { useState, useMemo } from "react";
import { projects } from "./projects"; // Removed .js extension

const ProjectFilter = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Opções de filtro que você quer exibir
  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "Backend", value: "backend" },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (project.show === false) {
        return false;
      }
      return activeFilter === "all" || project.category === activeFilter;
    });
  }, [activeFilter]);

  return (
    <div className="container mx-auto p-4">
      {/* Botões de Filtro */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {" "}
        {/* flex-wrap para responsividade */}
        {filterOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setActiveFilter(option.value)}
            className={`
              inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-300 transition-all duration-300
              ${
                activeFilter === option.value
                  ? "bg-black-600 text-white shadow-lg"
                  : "bg-black-200 text-gray-800 hover:bg-gray-800"
              }
              focus:bg-white focus:ring-1 focus:text-black focus:ring-offset-1
            `}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div
              key={index} // Idealmente, use um ID único para a key, não o index
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mb-4">
                  Categoria:{" "}
                  <span className="font-medium capitalize">
                    {project.category}
                  </span>
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150 ease-in-out text-sm"
                  >
                    Ver Projeto
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 text-lg">
            Nenhum projeto encontrado para esta categoria.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectFilter;
