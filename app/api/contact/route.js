import { query } from "@/lib/sqlDB"; // Ensure this path is correct

// Fetch all contact submissions
export async function GET(req) {
  try {
    const results = await query("SELECT * FROM contacts");
    return new Response(JSON.stringify({ data: results }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching contact form data:", error.message);
    return new Response(
      JSON.stringify({ message: "Failed to fetch the form data" }),
      { status: 500 }
    );
  }
}

// Create a new contact submission
export async function POST(req) {
  try {
    const { name, email, phone_number, message } = await req.json();
    if (!name || !email || !phone_number || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    await query(
      "INSERT INTO contacts (name, email, phone_number, message) VALUES (?, ?, ?, ?)",
      [name, email, phone_number, message]
    );

    return new Response(
      JSON.stringify({ message: "Form submitted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving contact form data:", error.message);
    return new Response(
      JSON.stringify({ message: "Failed to save the form data" }),
      { status: 500 }
    );
  }
}
