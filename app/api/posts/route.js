// app/api/posts/route.js
import { query } from "@/lib/sqlDB";

// Handle GET request to fetch all posts
export async function GET() {
  try {
    // Fetch all posts from the database
    const posts = await query("SELECT * FROM posts");
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch posts" }), {
      status: 500,
    });
  }
}

// Handle POST request to create a new post without image upload
export async function POST(req) {
  try {
    // Parse incoming JSON body
    const { title, content, category, image_url } = await req.json();

    // Validate required fields
    if (!title || !content || !category || !image_url) {
      return new Response(
        JSON.stringify({ error: "Title, content, and category are required." }),
        { status: 400 }
      );
    }

    const result = await query(
      "INSERT INTO posts (title, content, category,image_url) VALUES (?, ?, ?,?)",
      [title, content, category, image_url]
    );

    // Return the created post details
    return new Response(
      JSON.stringify({
        id: result.insertId,
        title,
        content,
        category,
        image_url,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to create post" }), {
      status: 500,
    });
  }
}
