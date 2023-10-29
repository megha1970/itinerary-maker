import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get["category"];
  const radius = searchParams.get("radius");
  const loc = searchParams.get("location");
  const type = searchParams.get("type");
  const res = await fetch(
    BASE_URL +
      "/nearbysearch/json?location=" +
      loc +
      "&radius=" +
      radius +
      "&type=" +
      type +
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
