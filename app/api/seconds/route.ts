import { NextResponse } from "next/server";

export async function GET() {
  // Safe to use server-side secrets
  const seconds = process.env.seconds; 
  
  return NextResponse.json({ seconds:seconds });
}