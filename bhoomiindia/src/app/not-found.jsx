"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const NotFound = () => {
   const navigate = useNavigate();
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

   useEffect(() => {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
   }, [location.pathname]);

   useEffect(() => {
      const handleMouseMove = (e) => {
         setMousePosition({
            x: (e.clientX / window.innerWidth - 0.5) * 20,
            y: (e.clientY / window.innerHeight - 0.5) * 20,
         });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
   }, []);

   return (
      <main className="min-h-screen bg-background overflow-hidden relative flex items-center justify-center">
         {/* Animated grain overlay */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise animate-grain" />

         {/* Floating orbs */}
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-secondary/20 rounded-full blur-[100px] animate-float-delayed" />

         {/* Grid lines */}
         <div className="absolute inset-0 grid-pattern opacity-[0.02]" />

         <div className="relative z-10 text-center px-6">
            {/* Glitch 404 */}
            <div
               className="relative mb-8"
               style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  transition: "transform 0.1s ease-out",
               }}
            >
               <h1 className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter text-foreground select-none glitch-text" data-text="404">
                  404
               </h1>

               {/* Glitch layers */}
               <span className="absolute inset-0 text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter text-primary/50 select-none animate-glitch-1 clip-glitch-1">
                  404
               </span>
               <span className="absolute inset-0 text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter text-accent-secondary/50 select-none animate-glitch-2 clip-glitch-2">
                  404
               </span>
            </div>

            {/* Message */}
            <div className="space-y-6 max-w-lg mx-auto">
               <p className="text-2xl md:text-3xl font-light text-foreground/80 tracking-wide">
                  Lost in the <span className="text-primary font-medium">void</span>
               </p>
               <p className="text-muted-foreground text-lg leading-relaxed">
                  The page you're looking for has drifted into another dimension.
                  Let's get you back to reality.
               </p>
            </div>

            {/* Back button */}
            <Link href="/">
               <button
                  className="group mt-12 relative inline-flex items-center gap-3 px-10 py-5 bg-transparent border border-foreground/20 text-foreground rounded-full font-medium text-lg tracking-wide overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-glow"
               >
                  {/* Hover fill effect */}
                  <span className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                  {/* Arrow */}
                  <span className="relative flex items-center justify-center w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1">
                     <svg
                        className="w-5 h-5 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                     </svg>
                  </span>

                  <span className="relative transition-colors duration-300 group-hover:text-primary-foreground">
                     Return Home
                  </span>
               </button>
            </Link>

            {/* Decorative elements */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-2 opacity-30">
               {[...Array(5)].map((_, i) => (
                  <div
                     key={i}
                     className="w-1 bg-foreground/40 rounded-full animate-pulse-bar"
                     style={{
                        height: `${20 + Math.random() * 40}px`,
                        animationDelay: `${i * 0.1}s`,
                     }}
                  />
               ))}
            </div>
         </div>

         {/* Corner decoration */}
         <div className="absolute top-8 left-8 text-muted-foreground/40 font-mono text-sm tracking-widest">
            ERROR
         </div>
         <div className="absolute top-8 right-8 text-muted-foreground/40 font-mono text-sm tracking-widest">
            PAGE_NOT_FOUND
         </div>
         <div className="absolute bottom-8 left-8 text-muted-foreground/40 font-mono text-xs">
            © {new Date().getFullYear()}
         </div>
         <div className="absolute bottom-8 right-8 text-muted-foreground/40 font-mono text-xs">
            STATUS: 404
         </div>
      </main>
   );
};

export default NotFound;
