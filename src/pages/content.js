import { useState } from "react";
import Playlists from "../components/Playlists";
import Controls from "@/components/Controls";
import Controler from "@/components/Controler";

const Content = () => {
    let playlists = [
        {
            name: "Cool",
            tracks: [
                {
                    song: "Going Downtown",
                    artist: "Jeff Claddy",
                    genre: "Rock",
                    bpm: 102,
                    key: "A"
                },
                {
                    song: "City Jazz Ensemble",
                    artist: "Steve Parry & the Slicks",
                    genre: "Jazz",
                    bpm: 112,
                    key: "E"
                }
            ] 
        },
        {
            name: "Rock Out",
            tracks: [
                {
                    song: "Just Another Punk",
                    artist: "The Troubles",
                    genre: "Punk",
                    bpm: 144,
                    key: "G"
                },
                {
                    song: "Attack the Press",
                    artist: "Meltings",
                    genre: "Heavy-Metal",
                    bpm: 108,
                    key: "D"
                }
            ]
        },
        {
            name: "Just for Sundays",
            tracks: [
                {
                    song: "Summer Breeze",
                    artist: "Gillian Withers",
                    genre: "Country",
                    bpm: 86,
                    key: "C"
                }
            ]
        }
    ]
    const playlistNames = playlists.map(playlist => playlist.name);
    const [selectedPlaylistTitle, setSelectedPlaylistTitle] = useState("");

    const handlePlaylistClick = (title) => {
          setSelectedPlaylistTitle(title);
          console.log(selectedPlaylistTitle);
      };
    return (
      <>
        <p>Content</p>
        <Playlists titles={playlistNames} onPlaylistClick={handlePlaylistClick}/>
        <Controls title={selectedPlaylistTitle}/>
        <Controler/>
      </>
    )
  }
  export default Content;