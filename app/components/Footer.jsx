import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, XIcon, MailIcon } from "@/components/icons";

const Footer = () => {
  const { name, socials } = portfolioData.personalInfo;
  const year = new Date().getFullYear();

  return (
    <footer className="-mt-8 sm:-mt-16 border-t border-border/80 pt-8 pb-12 flex items-center justify-center text-sm text-muted font-sans">
      <ul className="flex items-center gap-6">
        <li>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coral transition-colors flex items-center gap-1.5"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coral transition-colors flex items-center gap-1.5"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coral transition-colors flex items-center gap-1.5"
            aria-label="Twitter/X"
          >
            <XIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Twitter</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
