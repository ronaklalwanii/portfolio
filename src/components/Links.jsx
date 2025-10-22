import React from "react";
import { personalInfo } from "../data/constants";

const Links = () => {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span>🔗</span>
        <span>Links</span>
      </h2>

      <div className="space-y-3 text-sm">
        <div className="flex items-baseline gap-2">
          <span className="text-muted-foreground w-24">Email</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-muted-foreground transition-colors duration-150 underline underline-offset-2"
          >
            {personalInfo.email}
          </a>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-muted-foreground w-24">LinkedIn</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted-foreground transition-colors duration-150 underline underline-offset-2"
          >
            linkedin.com/in/ronak-lalwani
          </a>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-muted-foreground w-24">Location</span>
          <span>{personalInfo.location}</span>
        </div>
      </div>
    </section>
  );
};

export default Links;
