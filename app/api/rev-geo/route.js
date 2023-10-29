import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/geocode";
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const loc = searchParams.get("location");
  const res = await fetch(
    BASE_URL + "/json?latlng=" + loc + "&key=" + GOOGLE_API_KEY,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const product = await res.json();
  return NextResponse.json({ product });
}
