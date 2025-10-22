import React from "react";
import { personalInfo } from "../data/constants";

const Header = () => {
  return (
    <header className="mb-16">
      <div className="flex items-center gap-5 mb-6">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
          RL
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-1">
            {personalInfo.name}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            {personalInfo.title}
          </p>
        </div>
      </div>
      <p className="text-base leading-relaxed">
        {personalInfo.bio}
      </p>
    </header>
  );
};

export default Header;
