import { useEffect, useState } from "react";
import Playlist from "./Playlist";
import Search from "./Search";

const Playlists = ({titles, onPlayListClick}) => {
    const [searchValue, setSearchValue] = useState();

    useEffect(() => {console.log(searchValue)});

    return (
        <div className="playlists">
            <p>Playlists</p>
            <Search updateSearchValue={setSearchValue}/>
            {
                titles.map((title) => (
                    <Playlist key={title} title={title} onClick={() => onPlayListClick(title)}/>
                ))
            }
        </div>
    )
}
export default Playlists;