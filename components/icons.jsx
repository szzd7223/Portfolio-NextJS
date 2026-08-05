import React from "react";

// Standard props mapping to support easy className injections and configurations
const defaultProps = {
  className: "h-5 w-5",
  strokeWidth: 1.8,
  fill: "none",
  stroke: "currentColor",
};

export const LinkedInIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const XIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "h-5 w-5"}
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const GitHubIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a4.4 4.4 0 0 0-1.2-3.1 4.1 4.1 0 0 0-.09-3.1s-.96-.3-3 1.3a12.3 12.3 0 0 0-6 0C6.27 2.65 5.31 3 5.31 3a4.1 4.1 0 0 0-.09 3.1A4.4 4.4 0 0 0 4 9.2c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const MailIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const ExternalLinkIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DownloadIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" x2="12" y1="15" y2="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronIcon = ({ className, direction = "right", ...props }) => {
  const rotation = {
    right: "rotate-0",
    left: "rotate-180",
    up: "-rotate-90",
    down: "rotate-90",
  }[direction];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...defaultProps}
      className={`${className || defaultProps.className} transition-transform ${rotation}`}
      {...props}
    >
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const GlobeIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export const AwardIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

export const GraduationCapIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

export const CodeIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LaptopIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
    <line x1="2" x2="22" y1="20" y2="20" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="5" x2="19" y1="16" y2="16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DumbbellIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <path d="M6.5 6.5h11M6.5 17.5h11M12 6.5v11M3 10h3v4H3zM18 10h3v4h-3zM5.5 8h2v8h-2zM16.5 8h2v8h-2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CursorClickIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <path d="m12 12 3-1 9 9-2 2-9-9-1 3V12z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 8V5h3M3 12H1M12 3V1M19 8V5h-3M5 16v3h3M12 21v2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChartBarIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="6" y1="20" x2="6" y2="14" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="2" y1="20" x2="22" y2="20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ShieldActivityIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...defaultProps}
    className={className || defaultProps.className}
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 12h2.5l1.5-2.5 1.5 5 1-2.5h2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
