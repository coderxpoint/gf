"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

const ManagePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [isAuthenticated, router]);

  // Delete post handler
  const deletePost = async (id) => {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== id)); // Remove deleted post from the list
      } else {
        console.error("Error deleting post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (loading) {
    return (
      <div className="text-center text-lg font-bold text-gray-600">
        Loading posts...
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto justify-center">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Manage Posts
      </h2>

      {/* Information Section */}
      <div className="mb-6 text-gray-700">
        <p className="text-lg mb-2">
          Welcome to the post management dashboard! From here, you can:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-1">Create new blog posts.</li>
          <li className="mb-1">
            Edit existing posts by clicking the `Edit` button.
          </li>
          <li className="mb-1">Delete posts when no longer needed.</li>
        </ul>
      </div>

      {/* Create New Post Link */}
      <Link
        href="/dashboard/posts/create"
        className="bg-blue-600 text-white py-2 px-4 rounded-lg mb-4 inline-block"
      >
        Create New Post
      </Link>

      {/* Display All Posts */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">All Posts</h3>
        {posts.length === 0 ? (
          <p className="text-center text-gray-600">
            No posts available. Start by creating a new post!
          </p>
        ) : (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">Title</th>
                <th className="border px-4 py-2 text-left">Category</th>
                <th className="border px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="border px-4 py-2 text-gray-800">
                    {post.title}
                  </td>
                  <td className="border px-4 py-2 text-gray-600">
                    {post.category}
                  </td>
                  <td className="border px-4 py-2">
                    <Link
                      href={`/dashboard/posts/${post.id}`}
                      className="text-blue-600 mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManagePosts;
