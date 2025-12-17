"use client"
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
   return (
      <footer className="bg-[#1e3a8a] text-white">
         {/* Main footer content */}
         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
               {/* Company Info */}
               <div className="lg:col-span-1">
                  <div className="mb-6">
                     <h3 className="text-2xl font-bold mb-2">BHOOMI INDIA</h3>
                     <p className="text-blue-200 text-sm"></p>
                  </div>
                  <p className="text-blue-100 leading-relaxed text-sm mb-6">
                     Pioneering industrial solutions with cutting-edge technology and unwavering commitment to quality.
                  </p>
                  <div className="flex gap-3">
                     <a
                        href="#"
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                     >
                        <Facebook className="w-4 h-4" />
                     </a>
                     <a
                        href="#"
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                     >
                        <Linkedin className="w-4 h-4" />
                     </a>
                     <a
                        href="#"
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                     >
                        <Instagram className="w-4 h-4" />
                     </a>
                     <a
                        href="#"
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                     >
                        <Youtube className="w-4 h-4" />
                     </a>
                  </div>
               </div>

               {/* Quick Links */}
               <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                  <ul className="space-y-3">
                     {["Home", "About Us", "Products", "Gallery", "Contact Us"].map((item) => (
                        <li key={item}>
                           <a href="#" className="text-blue-100 hover:text-white transition-colors">
                              {item}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Product Categories */}
               <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">Our Solutions</h4>
                  <ul className="space-y-3">
                     {["Cutting Tools", "Machine Tools", "Die Casting", "Precision Gear", "Safety Products", "Lubricants"].map(
                        (item) => (
                           <li key={item}>
                              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                                 {item}
                              </a>
                           </li>
                        ),
                     )}
                  </ul>
               </div>

               {/* Contact Info */}
               <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
                  <div className="space-y-4">
                     <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                        <div>
                           <p className="text-xs text-blue-200 mb-1">Call Us</p>
                           <a href="tel:+918348887087" className="text-white hover:text-blue-100 transition-colors">
                              +91 83488 87087
                           </a>
                        </div>
                     </div>

                     <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                        <div>
                           <p className="text-xs text-blue-200 mb-1">Email Us</p>
                           <a
                              href="mailto:info@bhoomiindia.com"
                              className="text-white hover:text-blue-100 transition-colors break-all"
                           >
                              info@bhoomiindia.com
                           </a>
                        </div>
                     </div>

                     <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                        <div>
                           <p className="text-xs text-blue-200 mb-1">Visit Us</p>
                           <p className="text-white text-sm leading-relaxed">
                              Plot No. 98/5, Sector-6
                              <br />
                              Dharuhera, Haryana
                              <br />
                              123106, India
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
               <p className="text-blue-100 text-sm">© 2026 Bhoomi India. All rights reserved.</p>
               <div className="flex gap-6 text-sm">
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                     Privacy Policy
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                     Terms of Service
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                     Cookie Policy
                  </a>
               </div>
            </div>
         </div>
      </footer>
   )
}
