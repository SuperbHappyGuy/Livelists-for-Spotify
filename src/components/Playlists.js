import Playlist from "./Playlist";
import Search from "./Search";

const Playlists = ({titles, onPlayListClick}) => {
    return (
        <div className="playlists">
            <p>Playlists</p>
            <Search/>
            {
                titles.map((title) => (
                    <Playlist key={title} title={title} onClick={() => onPlayListClick(title)}/>
                ))
            }
        </div>
    )
}
export default Playlists;