import React from "react";
import { experiences } from "../data/constants";

const Experience = () => {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span>👨🏻‍💻</span>
        <span>Work</span>
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 mb-3">
              <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors duration-150">
                {exp.role}
              </h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <div className="text-base mb-3">{exp.company}</div>

            <p className="text-sm mb-3 leading-relaxed">
              {exp.description}
            </p>

            {exp.highlights && (
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed pl-4 relative before:content-['−'] before:absolute before:left-0 before:text-muted-foreground"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => (
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

export default Experience;
