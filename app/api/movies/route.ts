import {NextResponse } from "next/server";
import Movie from "@/models/movie";
import { ConnectToDB } from "@/utils/database";

export async function GET(request: Request) {
    await ConnectToDB();
    const movies = await Movie.find({ poster: { $exists: true, $ne: null } }).limit(50);
    return NextResponse.json({ data: movies }, { status: 201 });
}