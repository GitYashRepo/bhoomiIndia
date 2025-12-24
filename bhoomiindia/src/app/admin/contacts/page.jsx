"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, Building2, MessageSquare, Trash2, Loader2, Search } from "lucide-react"

export default function AdminContacts() {
   const [contacts, setContacts] = useState([])
   const [loading, setLoading] = useState(true)
   const [searchTerm, setSearchTerm] = useState("")
   const [deletingId, setDeletingId] = useState(null)

   useEffect(() => {
      fetch("/api/contact")
         .then((res) => res.json())
         .then((data) => {
            setContacts(data)
            setLoading(false)
         })
         .catch(() => setLoading(false))
   }, [])

   const filteredContacts = contacts.filter(
      (c) =>
         c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
         (c.company && c.company.toLowerCase().includes(searchTerm.toLowerCase())),
   )

   const handleDelete = async (id) => {
      if (!confirm("Are you sure you want to delete this message?")) return

      setDeletingId(id)
      try {
         await fetch(`/api/contact/${id}`, { method: "DELETE" })
         setContacts(contacts.filter((c) => c._id !== id))
      } catch (error) {
         console.error("Failed to delete contact:", error)
      } finally {
         setDeletingId(null)
      }
   }

   return (
      <div className="min-h-screen bg-background">
         <div className="sticky top-0 z-10 bg-card border-b border-border backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-6">
               <div className="flex items-center justify-between mb-6">
                  <div>
                     <h1 className="text-3xl font-bold text-foreground">Contact Messages</h1>
                     <p className="text-muted-foreground mt-1">Manage and respond to customer inquiries</p>
                  </div>
                  <div className="text-right">
                     <p className="text-2xl font-bold text-primary">{contacts.length}</p>
                     <p className="text-sm text-muted-foreground">Total Messages</p>
                  </div>
               </div>

               {/* Search Bar */}
               <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                     type="text"
                     placeholder="Search by name, email, or company..."
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
               </div>
            </div>
         </div>

         {/* Content Section */}
         <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Loading State */}
            {loading && (
               <div className="flex items-center justify-center py-16">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                  <span className="ml-3 text-muted-foreground">Loading messages...</span>
               </div>
            )}

            {/* Empty State */}
            {!loading && filteredContacts.length === 0 && (
               <div className="text-center py-16">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                     {contacts.length === 0 ? "No messages yet" : "No messages match your search"}
                  </h3>
                  <p className="text-muted-foreground">
                     {contacts.length === 0
                        ? "Contact messages will appear here when customers reach out"
                        : "Try adjusting your search filters"}
                  </p>
               </div>
            )}

            {/* Contacts Grid */}
            {!loading && filteredContacts.length > 0 && (
               <div className="space-y-4">
                  {filteredContacts.map((contact) => (
                     <div
                        key={contact._id}
                        className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-md"
                     >
                        {/* Card Header */}
                        <div className="px-6 py-4 bg-gradient-to-r from-primary/5 to-transparent border-b border-border">
                           <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                 <h2 className="text-xl font-semibold text-foreground">{contact.name}</h2>
                                 <p className="text-sm text-muted-foreground mt-1">
                                    {new Date(contact.createdAt).toLocaleString("en-US", {
                                       month: "short",
                                       day: "numeric",
                                       year: "numeric",
                                       hour: "2-digit",
                                       minute: "2-digit",
                                    })}
                                 </p>
                              </div>
                              <button
                                 onClick={() => handleDelete(contact._id)}
                                 disabled={deletingId === contact._id}
                                 className="opacity-0 group-hover:opacity-100 p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-all disabled:opacity-50"
                                 title="Delete message"
                              >
                                 {deletingId === contact._id ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                 ) : (
                                    <Trash2 className="w-5 h-5" />
                                 )}
                              </button>
                           </div>
                        </div>

                        {/* Card Body */}
                        <div className="px-6 py-4 space-y-3">
                           {/* Contact Details Grid */}
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="flex items-center gap-3">
                                 <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                                 <div className="min-w-0">
                                    <p className="text-xs text-muted-foreground">Email</p>
                                    <p className="text-sm font-medium text-foreground truncate">{contact.email}</p>
                                 </div>
                              </div>

                              {contact.phone && (
                                 <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                    <div className="min-w-0">
                                       <p className="text-xs text-muted-foreground">Phone</p>
                                       <p className="text-sm font-medium text-foreground truncate">{contact.phone}</p>
                                    </div>
                                 </div>
                              )}

                              {contact.company && (
                                 <div className="flex items-center gap-3">
                                    <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                                    <div className="min-w-0">
                                       <p className="text-xs text-muted-foreground">Company</p>
                                       <p className="text-sm font-medium text-foreground truncate">{contact.company}</p>
                                    </div>
                                 </div>
                              )}
                           </div>

                           {/* Subject */}
                           {contact.subject && (
                              <div className="pt-2 border-t border-border">
                                 <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Subject</p>
                                 <p className="text-sm text-foreground mt-1 font-medium">{contact.subject}</p>
                              </div>
                           )}

                           {/* Message */}
                           <div className="pt-2 border-t border-border">
                              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Message</p>
                              <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{contact.message}</p>
                           </div>
                        </div>
                     </div>
                  ))}

                  {/* Results Counter */}
                  <div className="text-center pt-4 text-sm text-muted-foreground">
                     Showing {filteredContacts.length} of {contacts.length} message{contacts.length !== 1 ? "s" : ""}
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}
