import "./globals.css";

export const metadata = {
  title: "Saad Shaikh | Portfolio",
  description: "Software Developer specializing in full-stack web applications, systems, and developer tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className="antialiased leading-relaxed overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
