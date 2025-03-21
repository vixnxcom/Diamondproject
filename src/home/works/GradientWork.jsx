import { useState, useEffect } from "react";

export default function GradientWork({ children }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen transition-all duration-500 ease-in-out"
      style={{
        background: `linear-gradient(180deg, 
#0255c0  ${Math.min(30, scrollPercentage * 1.0)}%,  
  #01043a  ${Math.min(60, scrollPercentage * 2.0)}%, 
 
#010d1b 100%)`,
      }}
    >
      {children}
    </div>
  );
}

