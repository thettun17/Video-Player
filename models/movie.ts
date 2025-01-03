import { dir } from 'console';
import {Schema, model, models} from 'mongoose';
const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: [true, 'Title already exists'],
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
    },
    minutes: {
        type: Number,
        required: [true, 'Minutes is required'],
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required'],
    },
    genres: {
        type: [String],
        required: [true, 'Genre is required'],
    },
    actors: {
        type: [String],
        required: [true, 'Actors is required'],
    },
    cast: {
        type: [String],
        required: [true, 'Cast is required'],
    },
    directors: {
        type: [String],
        required: [true, 'Directors is required'],
    },
    image: {
        type: String,
    },
    poster: {
        type: String,
    }
});

const Movie = models.Movie || model("Movie", movieSchema);
export default Movie