/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Head from "next/head";

const SingleBlogPage = ({ params }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("Error loading post. Redirecting to the blog page...");
        setTimeout(() => router.push("/blog"), 3000);
      }
    }
    if (id) fetchPost();
  }, [id, router]);

  if (error) {
    return (
      <motion.div
        className="text-center mt-12 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {error}
      </motion.div>
    );
  }

  if (!post) {
    return (
      <motion.div
        className="text-center mt-12 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading post...
      </motion.div>
    );
  }

  const metaTitle = post.meta_title || post.title;
  const metaDescription =
    post.meta_description || post.content.substring(0, 150);

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <div className="max-w-3xl mx-auto p-6 md:px-8">
        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Display the post image */}
          {post.image_url && (
            <div className="mb-6">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          )}

          <h1 className="text-4xl font-bold mb-4 text-gray-800 break-words">
            {post.title}
          </h1>
          <p className="text-gray-500 mb-4 text-sm">
            Category: {post.category}
          </p>
          {/* Render Quill content */}
          <div
            className="text-gray-700 leading-relaxed mb-6 break-words prose lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: post.content }} // HTML content rendering
          />
          <div className="text-center">
            <Link href="/blog">
              <motion.button
                className="mt-6 inline-block text-green-600 hover:text-green-700 font-semibold border-b-2 border-transparent hover:border-green-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                ← Back to Blog Posts
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SingleBlogPage;
