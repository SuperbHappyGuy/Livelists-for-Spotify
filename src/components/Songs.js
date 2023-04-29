import Song from "./Song";

const Songs = ({titles}) => {
    return (
        <div className="playlists">
            <input/>
            {
                titles.map((title) => (
                    <Song key={title} title={title}/>
                ))
            }
        </div>
    )
}
export default Songs;