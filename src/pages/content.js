import { useState } from "react";
import Playlists from "../components/Playlists";
import Songs from "@/components/Songs";
import Controls from "@/components/Controls";

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
    const [selectedPlaylistTitle, setSelectedPlaylistTitle] = useState("Select a playlist");

    const selectedPlaylist = playlists.find(playlist => playlist.name === selectedPlaylistTitle);
    const songNames = selectedPlaylist ? selectedPlaylist.tracks.map(track => track.song) : [];

    const[searchedItem, setSearchedItem] = useState("");

    const handlePlaylistClick = (title) => {
          setSelectedPlaylistTitle(title);
          console.log("clicked");
      };

      const handleSearch = () => {
        setSearchedItem();
      }
    return (
      <>
        <Playlists titles={playlistNames} onPlayListClick={handlePlaylistClick}/>
        <Songs playlist={selectedPlaylistTitle} titles={songNames}/>
        <Controls title={selectedPlaylistTitle}/>
      </>
    )
  }
  export default Content;