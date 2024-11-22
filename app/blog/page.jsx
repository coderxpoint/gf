/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Fetch posts initially when the component mounts
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Fetch posts on component mount
    fetchPosts();

    // Set up polling to re-fetch posts every 10 seconds (10000ms)
    const interval = setInterval(fetchPosts, 10000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  // Extract unique categories from posts for filtering
  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  // Filter posts based on the selected category
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-green-600">
          Blog Posts
        </h1>

        {/* Category Filter (Row Layout) */}
        <div className="flex justify-center max-w-3xl mx-auto gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border-2 font-semibold text-gray-700 transition duration-300 hover:bg-green-600 hover:text-white ${
                selectedCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto justify-center max-w-3xl">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                className="p-6 bg-green-200 lg:h-[70vh] rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 w-full flex flex-col justify-between"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  {/* Display Post Image */}
                  {post.image_url && (
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                    <Link
                      href={`/blog/${post.id}`}
                      className="hover:text-green-700"
                    >
                      {post.meta_title || post.title}
                      {/* Using meta_title if available */}
                    </Link>
                  </h2>
                  <p className="text-gray-500 text-sm mb-2">
                    Category: {post.category}
                  </p>

                  {/* Show content preview */}
                  <p
                    className="text-gray-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html:
                        post.content.length > 100
                          ? `${post.content.substring(0, 100)}...`
                          : post.content,
                    }}
                  ></p>
                </div>

                {/* Card button - Show More */}
                <div className="flex justify-between items-center mt-4 space-x-4">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Show More
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-full text-center text-gray-600"
            >
              No posts found in this category.
            </motion.p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
