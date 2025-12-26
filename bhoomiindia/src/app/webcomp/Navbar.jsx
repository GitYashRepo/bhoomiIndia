"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { signOut, useSession } from "next-auth/react"


export function Navbar() {
   const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
   const [productsOpen, setProductsOpen] = React.useState(false)
   const [activeSubmenu, setActiveSubmenu] = React.useState(null)
   const closeTimeoutRef = React.useRef(null)
   const { data: session, status } = useSession()

   const [open, setOpen] = React.useState(false)
   const dropdownRef = React.useRef(null)
   const adminCloseTimeoutRef = React.useRef(null)

   const isTouchDevice =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none)").matches

   const [openSubmenu, setOpenSubmenu] = React.useState(null)



   React.useEffect(() => {
      function handleClickOutside(e) {
         if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false)
         }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
   }, [])


   // Example admin check
   // adjust based on how you store role in NextAuth
   const isAdmin = session?.user?.role === "admin"

   const openProducts = () => {
      if (closeTimeoutRef.current) {
         clearTimeout(closeTimeoutRef.current)
         closeTimeoutRef.current = null
      }
      setProductsOpen(true)
   }

   const closeProductsWithDelay = () => {
      closeTimeoutRef.current = setTimeout(() => {
         setProductsOpen(false)
      }, 300)
   }

   const openAdmin = () => {
      if (adminCloseTimeoutRef.current) {
         clearTimeout(adminCloseTimeoutRef.current)
         adminCloseTimeoutRef.current = null
      }
      setOpen(true)
   }

   const closeAdminWithDelay = () => {
      adminCloseTimeoutRef.current = setTimeout(() => {
         setOpen(false)
      }, 300)
   }



   return (
      <header className="w-full">
         {/* Top bar with contact info and social media */}
         <div className="bg-[#0d4f8b] text-white">
            <div className="container mx-auto px-8">
               <div className="flex h-10 items-center justify-between text-xs">
                  <div className="flex items-center gap-6">
                     <div className="flex items-center gap-2">
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                           />
                        </svg>
                        <a href="tel:+918348887087">
                           <span>PH: +91 83488 87087</span>
                        </a>
                     </div>
                     <div className="flex items-center gap-2">
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                           />
                        </svg>
                        <a href="mailto:info@bhoomiindia.co.in">
                           <span>info@bhoomiindia.co.in</span>
                        </a>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <Link href="#" className="hover:text-gray-300 transition-colors">
                        <span className="sr-only">Facebook</span>
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                     </Link>
                     <Link href="#" className="hover:text-gray-300 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                     </Link>
                     <Link href="#" className="hover:text-gray-300 transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M12 2.2c3.2 0 3.6.01 4.85.07 1.17.05 1.8.24 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.36 1.05.41 2.22.06 1.25.07 1.65.07 4.85s-.01 3.6-.07 4.85c-.05 1.17-.24 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.05.36-2.22.41-1.25.06-1.65.07-4.85.07s-3.6-.01-4.85-.07c-1.17-.05-1.8-.24-2.22-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.17-.42-.36-1.05-.41-2.22C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.85c.05-1.17.24-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.05-.36 2.22-.41C8.4 2.21 8.8 2.2 12 2.2zm0-2.2C8.74 0 8.33.02 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.02 8.33 0 8.74 0 12s.02 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.98 8.74 24 12 24s3.67-.02 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.05-1.28.07-1.69.07-4.95s-.02-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13-.67-.67-1.34-1.08-2.13-1.38-.76-.3-1.64-.5-2.91-.56C15.67.02 15.26 0 12 0z" />
                           <path d="M12 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8z" />
                           <circle cx="18.4" cy="5.6" r="1.44" />
                        </svg>
                     </Link>
                     <Link href="#" className="hover:text-gray-300 transition-colors">
                        <span className="sr-only">X (Twitter)</span>
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                     </Link>
                     <Link href="#" className="hover:text-gray-300 transition-colors">
                        <span className="sr-only">YouTube</span>
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         {/* Main navigation bar */}
         <div className="bg-white border-b border-gray-200">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
               <div className="container flex flex-row items-center justify-between">
                  <div className="w-full flex flex-row h-20 items-center justify-between">
                     <Link href="/" className="text-xl font-bold text-[#0d4f8b]">
                        <div className="flex flex-col items-center">
                           <img className="h-14" src="/logo.jpg" alt="Bhoomi India Logo" />
                        </div>
                     </Link>

                     {/* Desktop Navigation */}
                     <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-gray-700 hover:text-[#0d4f8b] text-sm font-medium transition-colors">
                           Home
                        </Link>
                        <Link
                           href="/about"
                           className="text-gray-700 hover:text-[#0d4f8b] text-sm font-medium transition-colors"
                        >
                           About Us
                        </Link>

                        {/* Products (Desktop Hover Dropdown) */}

                        {/* Dropdown */}
                        {/* Products (Desktop + Tablet) */}
                        {/* Products */}
                        <div
                           className="relative"
                           onMouseEnter={!isTouchDevice ? openProducts : undefined}
                           onMouseLeave={!isTouchDevice ? closeProductsWithDelay : undefined}
                        >
                           {/* Trigger */}
                           <button
                              type="button"
                              onClick={() => {
                                 if (isTouchDevice) {
                                    setProductsOpen(prev => !prev)
                                    setOpenSubmenu(null)
                                 }
                              }}
                              className="flex items-center gap-1 text-gray-700 hover:text-[#0d4f8b] text-sm font-medium transition-colors"
                           >
                              Products
                              <ChevronDown
                                 className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""
                                    }`}
                              />
                           </button>

                           {/* Dropdown */}
                           <div
                              className={`absolute left-0 top-full z-50 mt-3 w-56 rounded-md border border-gray-200 bg-white shadow-lg transition-all ${productsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                 }`}
                           >
                              <div className="px-3 py-2 text-xs font-semibold text-[#0d4f8b]">
                                 Product Categories
                              </div>

                              <div className="border-t border-gray-100" />

                              <Link href="/products" className="block px-4 py-2 text-sm hover:bg-gray-50">
                                 All Products
                              </Link>

                              {/* Hot Forging */}
                              <div
                                 className="relative"
                                 onMouseEnter={!isTouchDevice ? () => setOpenSubmenu("hot") : undefined}
                                 onMouseLeave={!isTouchDevice ? () => setOpenSubmenu(null) : undefined}
                              >
                                 <button
                                    type="button"
                                    onClick={() => {
                                       if (isTouchDevice) {
                                          setOpenSubmenu(openSubmenu === "hot" ? null : "hot")
                                       }
                                    }}
                                    className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-gray-50"
                                 >
                                    Hot Forging Lubricants
                                    <ChevronDown className="h-4 w-4 -rotate-90" />
                                 </button>

                                 {openSubmenu === "hot" && (
                                    <div className="absolute right-full top-0 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
                                       <Link href="/products/aqua-graphite" className="block px-4 py-2 text-sm hover:bg-gray-50">
                                          Water Based Graphite
                                       </Link>
                                       <Link href="/products/aqua-graphite-free" className="block px-4 py-2 text-sm hover:bg-gray-50">
                                          Graphite Free
                                       </Link>
                                       <Link href="/products/oil-based-graphite" className="block px-4 py-2 text-sm hover:bg-gray-50">
                                          Oil Based Graphite
                                       </Link>
                                    </div>
                                 )}
                              </div>

                              {/* Die Casting */}
                              <div
                                 className="relative"
                                 onMouseEnter={!isTouchDevice ? () => setOpenSubmenu("die") : undefined}
                                 onMouseLeave={!isTouchDevice ? () => setOpenSubmenu(null) : undefined}
                              >
                                 <button
                                    type="button"
                                    onClick={() => {
                                       if (isTouchDevice) {
                                          setOpenSubmenu(openSubmenu === "die" ? null : "die")
                                       }
                                    }}
                                    className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-gray-50"
                                 >
                                    Die Casting Lubricants
                                    <ChevronDown className="h-4 w-4 -rotate-90" />
                                 </button>

                                 {openSubmenu === "die" && (
                                    <div className="absolute right-full top-0 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
                                       <Link href="/products/die-casting/water-soluble" className="block px-4 py-2 text-sm hover:bg-gray-50">
                                          Water Soluble
                                       </Link>
                                       <Link href="/products/die-casting/synthetic" className="block px-4 py-2 text-sm hover:bg-gray-50">
                                          Synthetic
                                       </Link>
                                       <Link href="/products/die-casting/semi-synthetic" className="block px-4 py-2 text-sm hover:bg-gray-50">
                                          Semi-Synthetic
                                       </Link>
                                    </div>
                                 )}
                              </div>

                              <div className="border-t border-gray-100" />

                              <Link href="/products/accessories" className="block px-4 py-2 text-sm hover:bg-gray-50">
                                 Tools & Accessories
                              </Link>
                           </div>
                        </div>



                        <Link
                           href="/gallery"
                           className="text-gray-700 hover:text-[#0d4f8b] text-sm font-medium transition-colors"
                        >
                           Gallery
                        </Link>
                        <Link
                           href="/contact"
                           className="text-gray-700 hover:text-[#0d4f8b] text-sm font-medium transition-colors"
                        >
                           Contact Us
                        </Link>
                     </nav>
                     {isAdmin && (
                        <div
                           ref={dropdownRef}
                           className="relative z-50"
                           onMouseEnter={openAdmin}
                           onMouseLeave={closeAdminWithDelay}
                        >
                           {/* Trigger */}
                           <button
                              type="button"
                              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#0d4f8b]"
                           >
                              <div className="w-7 h-7 rounded-full bg-[#0d4f8b] text-white flex items-center justify-center text-xs font-semibold">
                                 A
                              </div>
                              Admin
                              <span className="text-xs">▾</span>
                           </button>

                           {/* Dropdown */}
                           {open && (
                              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                 <div className="px-4 py-3 border-b">
                                    <p className="text-xs text-gray-500">Signed in as</p>
                                    <p className="text-sm font-medium text-gray-800 truncate">
                                       {session.user.email}
                                    </p>
                                 </div>

                                 <Link
                                    href="/admin/dashboard"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                 >
                                    Create Services
                                 </Link>
                                 <Link
                                    href="/admin/create-products"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                 >
                                    Create Products
                                 </Link>
                                 <Link
                                    href="/admin/view-services"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                 >
                                    View Services
                                 </Link>
                                 <Link
                                    href="/admin/view-products"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                 >
                                    View Products
                                 </Link>
                                 <Link
                                    href="/admin/contacts"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                 >
                                    Admin Contacts
                                 </Link>

                                 <div className="border-t">
                                    <button
                                       onClick={() => signOut({ callbackUrl: "/admin/login" })}
                                       className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                    >
                                       Logout
                                    </button>
                                 </div>
                              </div>
                           )}
                        </div>
                     )}

                  </div>

                  {/* Mobile menu button */}
                  <button
                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                     className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                     <div className="w-6 h-5 flex flex-col justify-between">
                        <span
                           className={`h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                        ></span>
                        <span className={`h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                        <span
                           className={`h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                        ></span>
                     </div>
                  </button>
               </div>

               {/* Mobile Navigation */}
               {mobileMenuOpen && (
                  <div className="md:hidden py-4 border-t border-gray-200">
                     <nav className="flex flex-col gap-4">
                        <Link href="/" className="text-gray-700 hover:text-[#0d4f8b] text-sm font-medium transition-colors">
                           Home
                        </Link>
                        <Link
                           href="/about"
                           className="text-gray-700 hover:text-[#0d4f8b] text-sm font-medium transition-colors"
                        >
                           About Us
                        </Link>
                        <div>
                           <button
                              onClick={() => setProductsOpen(!productsOpen)}
                              className="flex items-center gap-1 text-gray-700 hover:text-[#0d4f8b] text-sm font-medium transition-colors"
                           >
                              Products
                              <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                           </button>
                           {productsOpen && (
                              <div className="ml-4 mt-2 flex flex-col gap-2">
                                 <div>
                                    <button
                                       onClick={() => setActiveSubmenu(activeSubmenu === "hot-forging" ? null : "hot-forging")}
                                       className="flex items-center gap-1 text-gray-600 hover:text-[#0d4f8b] text-sm font-medium transition-colors"
                                    >
                                       Hot Forging Lubricants
                                       <ChevronDown
                                          className={`h-3 w-3 transition-transform ${activeSubmenu === "hot-forging" ? "rotate-180" : ""}`}
                                       />
                                    </button>
                                    {activeSubmenu === "hot-forging" && (
                                       <div className="ml-4 mt-2 flex flex-col gap-1">
                                          <Link
                                             href="/products/hot-forging/standard"
                                             className="text-gray-500 hover:text-[#0d4f8b] text-xs"
                                          >
                                             Standard Grade
                                          </Link>
                                          <Link
                                             href="/products/hot-forging/premium"
                                             className="text-gray-500 hover:text-[#0d4f8b] text-xs"
                                          >
                                             Premium Grade
                                          </Link>
                                          <Link
                                             href="/products/hot-forging/industrial"
                                             className="text-gray-500 hover:text-[#0d4f8b] text-xs"
                                          >
                                             Industrial Grade
                                          </Link>
                                       </div>
                                    )}
                                 </div>
                                 <div>
                                    <button
                                       onClick={() => setActiveSubmenu(activeSubmenu === "graphite" ? null : "graphite")}
                                       className="flex items-center gap-1 text-gray-600 hover:text-[#0d4f8b] text-sm font-medium transition-colors"
                                    >
                                       Graphite Lubricants
                                       <ChevronDown
                                          className={`h-3 w-3 transition-transform ${activeSubmenu === "graphite" ? "rotate-180" : ""}`}
                                       />
                                    </button>
                                    {activeSubmenu === "graphite" && (
                                       <div className="ml-4 mt-2 flex flex-col gap-1">
                                          <Link
                                             href="/products/graphite/aqueous"
                                             className="text-gray-500 hover:text-[#0d4f8b] text-xs"
                                          >
                                             Aqueous Graphite
                                          </Link>
                                          <Link href="/products/graphite/free" className="text-gray-500 hover:text-[#0d4f8b] text-xs">
                                             Graphite Free
                                          </Link>
                                          <Link
                                             href="/products/graphite/oil-based"
                                             className="text-gray-500 hover:text-[#0d4f8b] text-xs"
                                          >
                                             Oil Based Graphite
                                          </Link>
                                       </div>
                                    )}
                                 </div>
                                 <div>
                                    <button
                                       onClick={() => setActiveSubmenu(activeSubmenu === "die-casting" ? null : "die-casting")}
                                       className="flex items-center gap-1 text-gray-600 hover:text-[#0d4f8b] text-sm font-medium transition-colors"
                                    >
                                       Die Casting Lubricants
                                       <ChevronDown
                                          className={`h-3 w-3 transition-transform ${activeSubmenu === "die-casting" ? "rotate-180" : ""}`}
                                       />
                                    </button>
                                    {activeSubmenu === "die-casting" && (
                                       <div className="ml-4 mt-2 flex flex-col gap-1">
                                          <Link
                                             href="/products/die-casting/water-soluble"
                                             className="text-gray-500 hover:text-[#0d4f8b] text-xs"
                                          >
                                             Water Soluble
                                          </Link>
                                          <Link
                                             href="/products/die-casting/synthetic"
                                             className="text-gray-500 hover:text-[#0d4f8b] text-xs"
                                          >
                                             Synthetic
                                          </Link>
                                          <Link
                                             href="/products/die-casting/semi-synthetic"
                                             className="text-gray-500 hover:text-[#0d4f8b] text-xs"
                                          >
                                             Semi-Synthetic
                                          </Link>
                                       </div>
                                    )}
                                 </div>
                                 <Link href="/products/accessories" className="text-gray-600 hover:text-[#0d4f8b] text-sm">
                                    Tools & Accessories
                                 </Link>
                              </div>
                           )}
                        </div>
                        <Link
                           href="/become-partner"
                           className="text-gray-700 hover:text-[#0d4f8b] text-sm font-medium transition-colors"
                        >
                           Become a Partner
                        </Link>
                        <Link
                           href="/contacts"
                           className="text-gray-700 hover:text-[#0d4f8b] text-sm font-medium transition-colors"
                        >
                           Contacts
                        </Link>
                     </nav>
                     {isAdmin && (
                        <div className="border-t pt-3">
                           <p className="text-xs text-gray-500 px-1 mb-2">
                              Admin
                           </p>

                           <Link
                              href="/admin/dashboard"
                              className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                           >
                              Admin Dashboard
                           </Link>

                           <Link
                              href="/admin/contacts"
                              className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                           >
                              Admin Contacts
                           </Link>

                           <button
                              onClick={() => signOut({ callbackUrl: "/admin/login" })}
                              className="w-full text-left px-2 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
                           >
                              Logout
                           </button>
                        </div>
                     )}

                  </div>
               )}
            </div>
         </div >
      </header >
   )
}
