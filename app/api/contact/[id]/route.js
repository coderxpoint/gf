import { query } from "@/lib/sqlDB";

export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop(); // Get ID from URL

    if (!id) {
      return new Response(
        JSON.stringify({ message: "Contact ID is required" }),
        { status: 400 }
      );
    }

    // Execute the delete query
    await query("DELETE FROM contacts WHERE id = ?", [id]);

    return new Response(
      JSON.stringify({ message: "Contact deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting contact:", error.message);
    return new Response(
      JSON.stringify({ message: "Failed to delete the contact" }),
      { status: 500 }
    );
  }
}
