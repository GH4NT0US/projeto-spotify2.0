import { artistArray } from "../../front-end/src/assets/database/artists.js"
import { songsArray } from "../../front-end/src/assets/database/songs.js"
import { db } from "./connect.js";

const seedDatabase = async () => {
const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = { ...currentArtistObj };
    delete newArtistObj.id;
    return newArtistObj;
});


const newSongsArray = songsArray.map((currentSongObj) => {
    const newSongObj = { ...currentSongObj };
    delete newSongObj.id;
    return newSongObj;
});

    try {
    const responseSongs = await db.collection('songs').insertMany(newSongsArray);
    const responseArtists = await db.collection('artists').insertMany(newArtistArray);

    console.log('Songs inserted:', responseSongs.insertedCount);
    console.log('Artists inserted:', responseArtists.insertedCount);
    }catch (error) {
    console.error('Error inserting data:', error);
}
};

seedDatabase();
