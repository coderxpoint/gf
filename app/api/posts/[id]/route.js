import { query } from "@/lib/sqlDB";

export async function GET(req, { params }) {
  try {
    // Fetch post data including category, meta_title, and meta_description
    const post = await query("SELECT * FROM posts WHERE id = ?", [params.id]);
    return new Response(JSON.stringify(post[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch post" }), {
      status: 500,
    });
  }
}

export async function PUT(req, { params }) {
  const { title, content, category, meta_title, meta_description } =
    await req.json(); // Added meta_title and meta_description

  try {
    // Update post data including title, content, category, meta_title, and meta_description
    await query(
      "UPDATE posts SET title = ?, content = ?, category = ?, meta_title = ?, meta_description = ? WHERE id = ?",
      [title, content, category, meta_title, meta_description, params.id]
    );
    return new Response(JSON.stringify({ message: "Post updated" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to update post" }), {
      status: 500,
    });
  }
}

export async function DELETE(req, { params }) {
  try {
    // Delete post by ID
    await query("DELETE FROM posts WHERE id = ?", [params.id]);
    return new Response(JSON.stringify({ message: "Post deleted" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete post" }), {
      status: 500,
    });
  }
}
