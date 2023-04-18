import { NavLink } from "react-router-dom"
import { useBooksList } from "../context/BooksContext"
import { useFavList } from "../context/FavContext";

export const Header = () => {
    const {filteredReadList} = useBooksList();
    const {favData} = useFavList();
    const activeState = ({isActive}) => ({
        color: isActive ? 'rgb(140, 173, 202)' : 'green',
        textDecoration : isActive ? '' : 'none',
        padding: '20px',
        fontSize: '16px'
    })
    return (
        <nav>
            <NavLink style={activeState} to='/'>All Books</NavLink> 
            <NavLink style={activeState} to='/favourites'>Favourites ({favData.length})</NavLink>   
            <NavLink style={activeState} to='/read'>Read ({filteredReadList.length})</NavLink>   
            <NavLink style={activeState} to='/profile'>Profile</NavLink>
        </nav>
    )
}