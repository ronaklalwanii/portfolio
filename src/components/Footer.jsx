import React from "react";
import { personalInfo } from "../data/constants";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-8 border-t">
      <p className="text-xs text-muted-foreground">
        ©{year} {personalInfo.name}
      </p>
    </footer>
  );
};

export default Footer;
