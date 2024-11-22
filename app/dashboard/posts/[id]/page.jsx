/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import dynamic from "next/dynamic";

// Dynamically import Quill.js to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const EditPost = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
    image_url: "",
  });
  const [file, setFile] = useState(null); // State for new file upload
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        if (!response.ok) throw new Error("Failed to fetch post data");
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError("Failed to fetch post data");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, isAuthenticated, router]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDeleteImage = () => {
    setPost((prevPost) => ({ ...prevPost, image_url: "" }));
    setFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let imageUrl = post.image_url;

      // If a new file is selected, upload it first
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) throw new Error("Failed to upload image");
        const uploadData = await uploadResponse.json();
        imageUrl = `/uploads/${uploadData.fileName}`; // Update image URL with uploaded file path
      }

      // Update post data with the new or existing image URL
      const updatedPost = { ...post, image_url: imageUrl };
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      });

      if (!response.ok) throw new Error("Failed to update post");
      const data = await response.json();
      alert(data.message);
      router.push("/dashboard/posts");
    } catch (error) {
      setError("Failed to update post");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated || loading) return <div>Loading post...</div>;

  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"], // Clear formatting
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

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Post</h2>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Content</label>
          <ReactQuill
            value={post.content}
            onChange={(value) => setPost({ ...post, content: value })}
            className="w-full border rounded-lg mt-2"
            theme="snow"
            placeholder="Write your content here..."
            required
            modules={quillModules}
            formats={quillFormats}
          />
        </div>

        <div>
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            value={post.category}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Image</label>
          {post.image_url ? (
            <div className="flex items-center gap-4 mt-2">
              <img
                src={post.image_url}
                alt="Current Image"
                className="max-h-32"
              />
              <button
                type="button"
                onClick={handleDeleteImage}
                className="bg-red-500 text-white py-1 px-3 rounded-lg"
              >
                Delete Image
              </button>
            </div>
          ) : (
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              required
            />
          )}
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
