import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place/autocomplete";
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const input = searchParams.get("input");
  const res = await fetch(
    BASE_URL +
      "/json?input=" +
      input +
      "&language=en" +
      "&types=geocode" +
      "&key=" +
      GOOGLE_API_KEY,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const product = await res.json();
  return NextResponse.json({ product });
}
