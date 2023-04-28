import Playlist from "./Playlist";

const Playlists = ({titles, onPlaylistClick}) => {
    return (
        <div className="playlists">
            <input></input>
            {titles.map((title) => (
                <Playlist key={title} title={title} onClick={() => onPlaylistClick(title)} />
            ))}
        </div>
    )
}
export default Playlists;