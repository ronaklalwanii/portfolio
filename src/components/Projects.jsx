import React from "react";
import { projects } from "../data/constants";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span>🚀</span>
        <span>Projects</span>
      </h2>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-muted-foreground transition-colors duration-150">
              {project.title}
            </h3>
            <p className="text-sm mb-3 leading-relaxed">
              {project.description}
            </p>
            {project.projectLinks ? (
              <ul className="mb-4">
                {project?.projectLinks?.map((proj) => (
                  <li className="my-1 flex gap-2.5 items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 415 404"
                      fill="none"
                    >
                      <path
                        d="M1.11401 210.795C170.76 191.777 183.072 136.278 204.942 1.60303C211.273 158.18 252.418 183.536 413.202 201.92C251.152 210.795 223.3 263.41 204.942 401.603C183.736 268.743 159.999 221.571 1.11401 210.795Z"
                        stroke="#4f6dc2"
                        strokeWidth="20"
                      />
                    </svg>

                    <a target="_blank" href={proj.url} className="underline">
                      {proj.title}
                    </a>
                    <ExternalLink className="h-3 w-3 mt-1 -ml-1" />
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
