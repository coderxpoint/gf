import { query } from "@/lib/sqlDB"; // Ensure this path is correct

export async function GET(req) {
  try {
    // Query to count all rows in the contacts table
    const results = await query("SELECT COUNT(*) AS total FROM contacts");

    // Check if results are returned properly
    if (!results || results.length === 0) {
      console.error("No results returned from database.");
      return new Response(
        JSON.stringify({ message: "No data found in contacts table" }),
        { status: 404 }
      );
    }

    // Extract total count from the query results
    const totalContacts = results[0].total;
    
    // Check if the totalContacts is valid
    if (totalContacts === undefined || totalContacts === null) {
      console.error("Total contacts is undefined or null.");
      return new Response(
        JSON.stringify({ message: "Invalid data received from database" }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ total: totalContacts }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Log the detailed error message
    console.error("Error fetching contact count:", error.message);
    return new Response(
      JSON.stringify({ message: "Failed to fetch the contact count", error: error.message }),
      { status: 500 }
    );
  }
}
