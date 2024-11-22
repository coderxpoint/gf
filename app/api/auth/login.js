import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { query } from "@/lib/sqlDB";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Email and password are required" }),
      { status: 400 }
    );
  }

  try {
    // Check if user exists
    const users = await query("SELECT * FROM users WHERE email = ?", [email]);

    if (users.length === 0) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
      });
    }

    const user = users[0];

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Check if the user is an admin
    if (!user.isAdmin) {
      return new Response(
        JSON.stringify({
          message: "You do not have permission to access this resource",
        }),
        { status: 403 }
      );
    }

    // Create a JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, isAdmin: user.isAdmin },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    const cookie = serialize("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use `true` for production
      sameSite: "Strict",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    return new Response(JSON.stringify({ message: "Login successful" }), {
      status: 200,
      headers: {
        "Set-Cookie": cookie, // Set the cookie in response header
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({ message: "Failed to authenticate" }), {
      status: 500,
    });
  }
}
