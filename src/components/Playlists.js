import Playlist from "./Playlist";

const Playlists = ({titles, onPlayListClick}) => {
    return (
        <div className="playlists">
            <p>Playlists</p>
            <input/>
            {
                titles.map((title) => (
                    <Playlist key={title} title={title} onClick={() => onPlayListClick(title)}/>
                ))
            }
        </div>
    )
}
export default Playlists;