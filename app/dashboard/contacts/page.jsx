"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const { isAuthenticated } = useAuth(); // Get the authentication state
  const router = useRouter();

  // Redirect to login if not authenticated after the component mounts
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    // Only fetch contacts if authenticated
    if (isAuthenticated) {
      async function fetchContacts() {
        setLoading(true); // Start loading
        try {
          const res = await fetch("/api/contact");
          if (!res.ok) {
            throw new Error("Failed to fetch contacts");
          }

          const data = await res.json();
          setContacts(data.data || []); // Ensure `data.data` or an empty array
        } catch (error) {
          console.error("Error fetching contacts:", error);
          alert("Could not load contacts. Please try again.");
        } finally {
          setLoading(false); // End loading
        }
      }
      fetchContacts();
    }
  }, [isAuthenticated]);

  const handleDeleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
        if (res.ok) {
          setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
        } else {
          alert("Failed to delete contact");
        }
      } catch (error) {
        console.error("Error deleting contact:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  // Show loading state while checking authentication or fetching data
  if (loading) {
    return <div>Loading...</div>; // Display a loading message
  }

  if (!isAuthenticated) {
    return <div>Redirecting to login...</div>; // Show a redirect message
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/dashboard" className="text-blue-600 underline">
        Back to Dashboard
      </Link>
      <h2 className="text-2xl font-bold mb-4 text-green-500">Contact Submissions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Message</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact.id} className="border-b border-gray-200">
                  <td className="py-3 px-6">{contact.name}</td>
                  <td className="py-3 px-6">{contact.email}</td>
                  <td className="py-3 px-6">{contact.phone_number}</td>
                  <td className="py-3 px-6">{contact.message}</td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => handleDeleteContact(contact.id)}
                      className="text-red-600 underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No contacts available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactsPage;
