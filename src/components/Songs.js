import Search from "./Search";
import Song from "./Song";

const Songs = ({playlist, titles, handleSearch}) => {
    return (
        <div className="songs">
            <p>{playlist}</p>
            <Search/>
            {
                titles.map((title) => (
                    <Song key={title} title={title}/>
                ))
            }
        </div>
    )
}
export default Songs;