import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong audioRef={audioRef} songs={songs} setSongs={setSongs} song={song} setCurrentSong={setCurrentSong} id={song.id} key={song.id} isPlaying={isPlaying} />
                ))}
            </div>
        </div>
    )
}

export default Library;