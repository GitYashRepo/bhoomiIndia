"use client";

import { useEffect, useState } from "react";

export default function AdminContacts() {
   const [contacts, setContacts] = useState([]);

   useEffect(() => {
      fetch("/api/contact")
         .then((res) => res.json())
         .then(setContacts);
   }, []);

   return (
      <div className="p-8">
         <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>

         <div className="space-y-6">
            {contacts.map((c) => (
               <div key={c._id} className="bg-white border rounded-lg p-6">
                  <div className="flex justify-between mb-2">
                     <h2 className="font-semibold text-lg">{c.name}</h2>
                     <span className="text-sm text-gray-500">
                        {new Date(c.createdAt).toLocaleString()}
                     </span>
                  </div>

                  <p><strong>Email:</strong> {c.email}</p>
                  <p><strong>Phone:</strong> {c.phone || "—"}</p>
                  <p><strong>Company:</strong> {c.company || "—"}</p>
                  <p><strong>Subject:</strong> {c.subject}</p>

                  <p className="mt-3 text-gray-700">{c.message}</p>
               </div>
            ))}
         </div>
      </div>
   );
}
