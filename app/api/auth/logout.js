import { serialize } from "cookie";

export async function POST(req) {
  // Clear the JWT token cookie
  const cookie = serialize("auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    expires: new Date(0), // Set the expiration date to the past
    path: "/",
  });

  return new Response(
    JSON.stringify({ message: "Logged out successfully" }),
    {
      status: 200,
      headers: {
        "Set-Cookie": cookie, // Attach the cleared cookie
      },
    }
  );
}
