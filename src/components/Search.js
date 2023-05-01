 const Search = ({updateSearchValue}) => {
    //Client inputs string
    //loop through songs
    //for each song if no match move on
    //keep matched songs

    //remove from array
    //compare letters from string to songs/playlist strings to eliminate names
    //
    return (
        <>
            <input type="text" placeholder="Search..." onChange={e => updateSearchValue(e.target.value)}/>
        </>
    )
}
export default Search;