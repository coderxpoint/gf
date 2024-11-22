import { writeFile, mkdir } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");
  const userId = data.get("userId"); // Assuming `userId` is passed in formData

  if (!file) {
    return NextResponse.json({ message: "File not found", success: false });
  }
  if (!userId) {
    return NextResponse.json({ message: "User ID not provided", success: false });
  }

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);

  // Define the directory path with user ID
  const userDirectory = path.join(process.cwd(), `./public/uploads/${userId}`);
  
  try {
    // Ensure the user directory exists or create it
    await mkdir(userDirectory, { recursive: true });
    
    // Define the file path
    const filePath = path.join(userDirectory, file.name);
    
    // Write the file to the specified path
    await writeFile(filePath, buffer);

    return NextResponse.json({ message: "Upload successful", success: true });
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json({ message: "File upload failed", success: false });
  }
}
