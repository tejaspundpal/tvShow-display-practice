export function filterData(searchInput,allShows){
    const filterData =allShows.filter((show)=>
        searchInput && show?.show?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    ); 
    //console.log(filterData);
    return filterData;
}
