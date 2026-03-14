import React, { useState, useEffect } from "react";

const ContactsPage = () => {
  // Sample simulated contacts from DB
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      number: "+1234567890",
      images: [
        "https://via.placeholder.com/50?text=Img1",
        "https://via.placeholder.com/50?text=Img2",
      ],
      created_at: "2025-08-01 12:10:00",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      number: "+9876543210",
      images: [],
      created_at: "2025-08-02 09:30:00",
    },
  ]);

  // If images is stored as JSON string in DB, use JSON.parse(images)

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-6">Contacts</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="py-2 px-4 border-r border-gray-300">ID</th>
              <th className="py-2 px-4 border-r border-gray-300">Name</th>
              <th className="py-2 px-4 border-r border-gray-300">Email</th>
              <th className="py-2 px-4 border-r border-gray-300">Number</th>
              <th className="py-2 px-4 border-r border-gray-300">Images</th>
              <th className="py-2 px-4">Created At</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No contacts found.
                </td>
              </tr>
            )}
            {contacts.map((contact) => (
              <tr
                key={contact.id}
                className="hover:bg-gray-50 border-b border-gray-200"
              >
                <td className="py-2 px-4 border-r border-gray-300 text-center">
                  {contact.id}
                </td>
                <td className="py-2 px-4 border-r border-gray-300">
                  {contact.name}
                </td>
                <td className="py-2 px-4 border-r border-gray-300">
                  {contact.email}
                </td>
                <td className="py-2 px-4 border-r border-gray-300">
                  {contact.number}
                </td>
                <td className="py-2 px-4 border-r border-gray-300 flex gap-2">
                  {contact.images && contact.images.length > 0 ? (
                    contact.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Contact ${contact.id} Img ${i + 1}`}
                        className="h-10 w-10 object-cover rounded border"
                      />
                    ))
                  ) : (
                    <span className="text-gray-500">No images</span>
                  )}
                </td>
                <td className="py-2 px-4 text-center">{contact.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactsPage;
