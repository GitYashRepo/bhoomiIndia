"use client"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react";

export default function ContactPage() {
   const [form, setForm] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      company: "",
      message: "",
   });

   const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const res = await fetch("/api/contact", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(form),
      });

      if (res.ok) {
         alert("Message sent successfully!");
         setForm({
            name: "",
            email: "",
            phone: "",
            subject: "",
            company: "",
            message: "",
         });
      } else {
         alert("Something went wrong");
      }
   };


   return (
      <div className="min-h-screen flex flex-col">
         {/* Hero Section */}
         <section className="bg-gradient-to-br from-[#0d4f8b] to-[#1e5a9e] text-white py-20 min-h-[60vh] flex items-center">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
                  <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                     We're here to help with all your metal forming and industrial equipment needs. Reach out to our expert
                     team today.
                  </p>
               </div>
            </div>
         </section>

         {/* Contact Information */}
         <section className="bg-white py-20">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  {/* Bhoomi India Contact */}
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl">
                     <h2 className="text-3xl font-bold text-gray-900 mb-6">Bhoomi India</h2>
                     <div className="space-y-6">
                        <div className="flex items-start gap-4">
                           <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-6 h-6 text-indigo-600" />
                           </div>
                           <div>
                              <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                              <p className="text-gray-700 leading-relaxed">
                                 Plot No. 89 SP, Sector-6
                                 <br />
                                 Dharuhera, Haryana
                                 <br />
                                 123106, India
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Mail className="w-6 h-6 text-indigo-600" />
                           </div>
                           <div>
                              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                              <a href="mailto:infobhoomiindia@gmail.com" className="text-indigo-600 hover:underline">
                                 infobhoomiindia@gmail.com
                              </a>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Phone className="w-6 h-6 text-indigo-600" />
                           </div>
                           <div>
                              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                              <div className="space-y-1">
                                 <a href="tel:+919430918956" className="text-indigo-600 hover:underline block">
                                    +91 94309 18956
                                 </a>
                                 <a href="tel:+911274313498" className="text-indigo-600 hover:underline block">
                                    +91 1274 313498
                                 </a>
                              </div>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-6 h-6 text-indigo-600" />
                           </div>
                           <div>
                              <h3 className="font-semibold text-gray-900 mb-1">GSTN</h3>
                              <p className="text-gray-700">06IKJPK6038R1ZA</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Contact Form */}
                  <section className="bg-white py-20">
                     <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-2xl">
                           <h2 className="text-3xl font-bold text-center mb-8">
                              Send Us a Message
                           </h2>

                           <form className="space-y-6" onSubmit={handleSubmit}>
                              <div className="grid md:grid-cols-2 gap-6">
                                 <input
                                    name="name"
                                    required
                                    placeholder="Your full name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4f8b]"
                                 />
                                 <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="your.email@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4f8b]"
                                 />
                              </div>

                              <div className="grid md:grid-cols-2 gap-6">
                                 <input
                                    name="phone"
                                    placeholder="+91 XXXXX XXXXX"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4f8b]"
                                 />
                                 <input
                                    name="subject"
                                    required
                                    placeholder="What is this regarding?"
                                    value={form.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4f8b]"
                                 />
                              </div>

                              <input
                                 name="company"
                                 placeholder="Your company name"
                                 value={form.company}
                                 onChange={handleChange}
                                 className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4f8b]"
                              />

                              <textarea
                                 name="message"
                                 required
                                 rows={6}
                                 placeholder="Tell us about your requirements..."
                                 value={form.message}
                                 onChange={handleChange}
                                 className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4f8b] resize-none"
                              />

                              <button
                                 type="submit"
                                 className="w-full bg-[#0d4f8b] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#0d4f8b]/90"
                              >
                                 Send Message
                              </button>
                           </form>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
         </section>


         <div id="location" className="mx-8">
            <h2 className="text-4xl text-center font-serif font-light mb-8">Our Location</h2>
            <div className="w-full flex flex-col md:flex-row items-center justify-evenly">
               <div className="rounded-lg overflow-hidden border h-96 w-100 md:w-80">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.9632051221695!2d76.79604187366655!3d28.21178388521409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d49007fe078db%3A0x12fb5ac7e15a5b78!2sBHOOMI%20INDA!5e0!3m2!1sen!2sin!4v1767191006593!5m2!1sen!2sin"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen
                     loading="lazy"
                  ></iframe>
               </div>
               <div className="rounded-lg overflow-hidden border h-50 w-100 md:w-80">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1767190650060!5m2!1sen!2sin!6m8!1m7!1sstY-hgS3pIytMVbmt7BavA!2m2!1d28.21178388521409!2d76.79604187366655!3f198.8266560302823!4f-0.5076083844065948!5f0.7820865974627469"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen
                     loading="lazy"
                  ></iframe>
               </div>
            </div>
         </div>

         {/* Business Hours */}
         <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm">
                     <Clock className="w-6 h-6 text-[#0d4f8b]" />
                     <div className="text-left">
                        <div className="font-semibold text-gray-900">Business Hours</div>
                        <div className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM IST</div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
