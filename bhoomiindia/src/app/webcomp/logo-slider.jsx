"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const logos = [
   { id: 1, name: "Revent Precision", url: "/clientslogo/revent.png" },
   { id: 2, name: "UFI Filters", url: "/clientslogo/ufi.svg" },
   { id: 3, name: "GROZ Engineering", url: "/clientslogo/groz.png" },
   { id: 4, name: "UCAL", url: "/clientslogo/Ucal.png" },
   { id: 5, name: "Sadhu Forgin", url: "/clientslogo/sadhuforging.png" },
   { id: 6, name: "Craftsman Automation", url: "/clientslogo/craftsman.png" },
   { id: 7, name: "Singla Forging", url: "/clientslogo/singla.png" },
   { id: 8, name: "Bhawani Industries", url: "/clientslogo/Bhawani.png" },
   { id: 9, name: "Deepak Fastners", url: "/clientslogo/deepak.png" },
   { id: 10, name: "Voestalpine VAE VKN", url: "/clientslogo/voestalpine.png" },
   { id: 11, name: "Micro Turner", url: "/clientslogo/microturner.png" },
   { id: 12, name: "Satellite Forging", url: "/clientslogo/satellite.png" },
   { id: 13, name: "Vikas Forging", url: "/clientslogo/vikas.png" },
   { id: 14, name: "Indrani Automation", url: "/clientslogo/indrani.png" },
   { id: 15, name: "Kalpana Forging", url: "/clientslogo/kalpana.png" },
   { id: 16, name: "Good Luck India", url: "/clientslogo/goodluckindia.png" },
   { id: 17, name: "P.Dass Forging", url: "/clientslogo/pdass.png" },
   { id: 18, name: "Kh-Vatec", url: "/clientslogo/khvatec.png" },
]

export function LogoSlider() {
   const sliderRef = useRef(null)
   const [scrollProgress, setScrollProgress] = useState(0)
   const [isAutoScroll, setIsAutoScroll] = useState(true)
   const [isDragging, setIsDragging] = useState(false)
   const [dragStart, setDragStart] = useState(0)

   useEffect(() => {
      const slider = sliderRef.current
      if (!slider) return

      const handleScroll = () => {
         const scrollLeft = slider.scrollLeft
         const scrollWidth = slider.scrollWidth - slider.clientWidth
         setScrollProgress(scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0)
      }

      slider.addEventListener("scroll", handleScroll)
      return () => slider.removeEventListener("scroll", handleScroll)
   }, [])

   useEffect(() => {
      if (sliderRef.current) {
         sliderRef.current.scrollLeft = 0
      }
   }, [])

   useEffect(() => {
      const slider = sliderRef.current
      if (!slider) return

      const handleTouchStart = (e) => {
         setIsDragging(true)
         setDragStart(e.touches[0].clientX)
         setIsAutoScroll(false)
      }

      const handleTouchMove = (e) => {
         if (!isDragging) return
         const currentX = e.touches[0].clientX
         const diff = dragStart - currentX
         slider.scrollLeft += diff
         setDragStart(currentX)
      }

      const handleTouchEnd = () => {
         setIsDragging(false)
         // resume auto scroll after a delay
         setTimeout(() => {
            if (slider.scrollLeft >= slider.scrollWidth / 2) {
               slider.scrollLeft = 0
            }
            setIsAutoScroll(true)
         }, 500)
      }

      slider.addEventListener("touchstart", handleTouchStart)
      slider.addEventListener("touchmove", handleTouchMove)
      slider.addEventListener("touchend", handleTouchEnd)

      return () => {
         slider.removeEventListener("touchstart", handleTouchStart)
         slider.removeEventListener("touchmove", handleTouchMove)
         slider.removeEventListener("touchend", handleTouchEnd)
      }
   }, [isDragging, dragStart])

   useEffect(() => {
      if (!isAutoScroll || !sliderRef.current) return

      const slider = sliderRef.current
      let animationId

      const autoScroll = () => {
         slider.scrollLeft += 0.6 // smooth speed

         // reset at halfway point (KEY PART)
         if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0
         }

         animationId = requestAnimationFrame(autoScroll)
      }

      animationId = requestAnimationFrame(autoScroll)

      return () => cancelAnimationFrame(animationId)
   }, [isAutoScroll])

   const scroll = (direction) => {
      const slider = sliderRef.current
      if (!slider) return

      setIsAutoScroll(false)

      const scrollAmount = 300
      slider.scrollBy({
         left: direction === "left" ? -scrollAmount : scrollAmount,
         behavior: "smooth",
      })

      // fix edge case after manual scroll
      setTimeout(() => {
         if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0
         }
         setIsAutoScroll(true)
      }, 800)
   }

   return (
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-8">
         {/* Background Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
         </div>

         {/* Content */}
         <div className="relative z-10 w-full max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-20">
               <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-4">
                  TRUSTED BY INDUSTRY LEADERS
               </h2>
               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 text-pretty">Serving Leaders Across Industries</h1>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                  Join thousands of innovative companies that trust our platform to drive their growth
               </p>
            </div>

            {/* Slider Container */}
            <div className="relative group">
               {/* Left Arrow */}
               <button
                  onClick={() => scroll("left")}
                  className="absolute left-5 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex items-center justify-center"
                  aria-label="Scroll left"
               >
                  <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-lg border border-slate-200/50 flex items-center justify-center hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1">
                     <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                     </svg>
                  </div>
               </button>

               {/* Slider */}
               <div
                  ref={sliderRef}
                  className="flex gap-8 overflow-x-auto scroll-smooth pb-8 hide-scrollbar"
                  style={{ cursor: isDragging ? "grabbing" : "grab" }}
               >
                  {[...logos, ...logos].map((logo, index) => (
                     <div key={`${logo.id}-${index}`} className="flex-shrink-0 group/card">
                        <div className="relative w-64 h-32 bg-blue-200 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:translate-y-2 hover:bg-blue-300 p-6 flex items-center justify-center overflow-hidden">
                           <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                           <div className="relative z-10 flex flex-col items-center gap-3">
                              <div className="relative w-20 h-16 flex items-center justify-center">
                                 <Image
                                    src={logo.url || "/placeholder.svg"}
                                    alt={logo.name}
                                    width={100}
                                    height={90}
                                    className={`object-contain max-w-full max-h-full text-slate-900 transition-all duration-300 ${logo.name === "Kh-Vatec" ? "filter invert" : ""}`}
                                 />
                              </div>
                              <p className="text-sm font-semibold text-slate-900 transition-colors duration-300">{logo.name}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Right Arrow */}
               <button
                  onClick={() => scroll("right")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex items-center justify-center"
                  aria-label="Scroll right"
               >
                  <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-lg border border-slate-200/50 flex items-center justify-center hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-x-1">
                     <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                     </svg>
                  </div>
               </button>
            </div>

            {/* Progress Bar */}
            {/* <div className="mt-16 flex items-center gap-4">
               <div className="flex-1 h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-full overflow-hidden">
                  <div
                     className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full transition-all duration-300"
                     style={{ width: `${scrollProgress}%` }}
                  />
               </div>
               <div className="text-sm font-medium text-slate-500">{Math.round(scrollProgress)}%</div>
            </div> */}
         </div>

         <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </section>
   )
}
