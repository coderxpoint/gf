/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { Home, Users, LogOut, FileText } from "lucide-react"; // Importing icons from lucide-react

const Dashboard = () => {
  const { isAuthenticated, logout } = useAuth(); // Get auth state and logout function
  const router = useRouter();
  const [totalContacts, setTotalContacts] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      const fetchData = async () => {
        try {
          const responseContacts = await fetch("/api/contact/count");
          const dataContacts = await responseContacts.json();
          setTotalContacts(dataContacts.total);

          const responsePosts = await fetch("/api/posts/count");
          const dataPosts = await responsePosts.json();
          setTotalPosts(dataPosts.total);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    setLoading(true);
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen mx-auto flex-col space-y-10">
        <img src="/GF-logo.png" alt="" className="h-20 w-auto" />
        <p className="text-2xl font-bold">Your Dashboard is Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-800 max-w-4xl justify-center mx-auto shadow-lg rounded-lg">
      {/* Sidebar */}
      <aside className="w-64 text-white flex flex-col p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <Link
            href="/dashboard/posts"
            className="flex items-center justify-center space-x-2"
          >
            <span className="block w-full bg-green-600 text-white py-4 px-4 rounded text-center cursor-pointer">
              <div className="flex flex-row gap-2">
                <Home size={20} />
                Manage Posts
              </div>
            </span>
          </Link>
          <Link
            href="/dashboard/contacts"
            className="flex items-center justify-center space-x-2"
          >
            <span className="block w-full bg-green-600 text-white py-4 px-4 rounded text-center cursor-pointer">
              <div className="flex flex-row gap-2">
                <Users size={20} />
                Manage Contacts
              </div>
            </span>
          </Link>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 text-white py-2 px-4 rounded flex items-center space-x-2"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 border">
        <h2 className="text-2xl font-bold mb-4 text-green-500">
          Welcome to Your Dashboard
        </h2>
        <p>Here you can manage your posts and contacts.</p>

        {/* Statistics Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Contacts Card */}
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <Users size={30} className="text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Total Contacts
              </h3>
              <p className="mt-2 text-gray-600">{totalContacts}</p>
            </div>
          </div>

          {/* Posts Card */}
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <FileText size={30} className="text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Total Posts
              </h3>
              <p className="mt-2 text-gray-600">{totalPosts}</p>
            </div>
          </div>
        </div>

        {/* Additional dashboard content can go here */}
      </main>
    </div>
  );
};

export default Dashboard;
