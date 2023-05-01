const Playlist = ({title, onClick}) => {
    return (
        <>
            <button className="playlist-button" onClick={onClick}>{title}</button>
        </>
    )
}
export default Playlist;