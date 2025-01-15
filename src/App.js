import React, {useState, useRef} from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data"
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const audioRef = useRef(null)
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
  })
  const [libraryStatus, setLibraryStatus] = useState(false)
  const timeUpdateHandler = (e) => {
        const current = e.target.currentTime
        const duration = e.target.duration
        //Calculate Percentage
        const roundedCurrent = Math.round(current)
        const roundedDuration = Math.round(duration)
        const animation = Math.round((roundedCurrent / roundedDuration) * 100)
        
        setSongInfo({...songInfo, currentTime: current, duration: duration, animationPercentage: animation})
        
  }
  
  const songEndHandler = async () => {
    if (!songs || songs.length === 0) return; // Guard against empty songs array

    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;

    setCurrentSong(songs[nextIndex]); // Update the current song

    if (audioRef?.current) {
      audioRef.current.load(); // Reload the audio source
      if (isPlaying) {
        audioRef.current.oncanplay = () => audioRef.current.play(); // Wait until the audio is ready to play
      }
    }
  }
  return (
    <div className={`App ${libraryStatus ? 'library-active' : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player audioRef={audioRef} songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong} setSongInfo={setSongInfo} songInfo={songInfo} />
      <Library audioRef={audioRef} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} libraryStatus={libraryStatus} />
      <audio  onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onEnded={songEndHandler}></audio>
    </div>
  );
}

export default App;
