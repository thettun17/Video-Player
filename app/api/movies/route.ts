import { NextResponse } from "next/server";
import Movie from "@/models/movie";
import { ConnectToDB } from "@/utils/database";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get("search");

    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("limit") || "20");
    await ConnectToDB();
    const query: Record<string, any> = {
        poster: { $exists: true, $ne: null },
    };

    if (searchQuery) {
        query["title"] = { $regex: searchQuery, $options: "i" };
    }

    const skip = (page - 1) * pageSize;
    const movies = await Movie.find(query)
        .skip(skip)
        .limit(pageSize);

    const totalMovies = await Movie.countDocuments(query);

    return NextResponse.json({
        movies: movies,
        pagination: {
            page,
            pageSize,
            totalMovies,
            totalPages: Math.ceil(totalMovies / pageSize),
        },
    }, { status: 200 });
}