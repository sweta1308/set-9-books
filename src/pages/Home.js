import { useBooksList } from "../context/BooksContext"
import { useFavList } from "../context/FavContext";

export const Home = () => {
    const {bookList, handleReadClick} = useBooksList();
    const {handleFavClick, favData} = useFavList()
    return (
        <>
            <h1>All Books</h1> 
            <ul>
                {bookList.map((item) => {
                    const {id, title, author, image, read} = item;
                    const findItem = favData.find(book => book.id === id)
                    console.log(findItem)
                    return (
                    <li className="main-list" key={id}>
                        <img src={image} alt={title} />
                        <div className="main-content">
                            <p>{id}</p>
                            <p>Title: {title}</p>
                            <p>Author: {author}</p>
                            <button onClick={() => handleReadClick(id)} disabled={read}>{read ? 'Already' : 'Mark as'} Read</button><br />
                            <button onClick={() => handleFavClick({id, title, author, image, read})}>{findItem ? 'Go' : 'Add'} to Fav</button>
                        </div>
                    </li>
                )})}
            </ul> 
        </>
    )
}