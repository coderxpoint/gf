"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import dynamic from "next/dynamic";

// Dynamically import Quill.js to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const { isAuthenticated } = useAuth();
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "",
    image_url: "",
  });
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }
  }, [isAuthenticated, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleEditorChange = (value) => {
    setNewPost((prevPost) => ({
      ...prevPost,
      content: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setCreating(true);
    setError(null);

    try {
      // Step 1: Upload the file
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) throw new Error("File upload failed");

        const uploadResult = await uploadResponse.json();
        newPost.image_url = `/uploads/${file.name}`;
      }

      // Step 2: Create the post
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) throw new Error("Failed to create post");
      router.push("/dashboard/posts");
    } catch (error) {
      console.error("Error creating post:", error);
      setError("Failed to create post.");
    } finally {
      setCreating(false);
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "font",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "align",
    "link",
    "image",
  ];

  if (!isAuthenticated) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Post</h2>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      <form onSubmit={handleCreatePost} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-semibold text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            required
            className="w-full p-3 border rounded-lg mt-2"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-lg font-semibold text-gray-700"
          >
            Content
          </label>
          <ReactQuill
            value={newPost.content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            required
            className="w-full border rounded-lg mt-2"
            theme="snow"
            placeholder="Write your content here..."
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-lg font-semibold text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={newPost.category}
            onChange={handleInputChange}
            required
            className="w-full p-3 border rounded-lg mt-2"
          />
        </div>

        <div>
          <label
            htmlFor="image_url"
            className="block text-lg font-semibold text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="image_url"
            name="image_url"
            onChange={handleFileChange}
            className="w-full p-3 border rounded-lg mt-2"
          />
        </div>

        <button
          type="submit"
          disabled={creating}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg mt-4"
        >
          {creating ? "Creating..." : "Create Post"}
        </button>
      </form>

      <div className="mt-6">
        <a href="/dashboard/posts" className="text-blue-600 hover:underline">
          Go back to Manage Posts
        </a>
      </div>
    </div>
  );
};

export default CreatePost;
