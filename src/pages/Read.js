import { useBooksList } from "../context/BooksContext"

export const Read = () => {
    const {filteredReadList, handleReadClick} = useBooksList();
    return (
        <>
            <h1>Read Books</h1>
            <h4>Read Books Count: {filteredReadList.length}</h4>
            <h1>{filteredReadList.length===0 && 'START READING SOME BOOKS'}</h1>
            <ul className="read-list">
                {filteredReadList.map(({id, title, author, image}) => (
                    <li className="main-list" key={id}>
                        <img src={image} alt={title} />
                        <div className="main-content">
                            <p>{id}</p>
                            <p>Title: {title}</p>
                            <p>Author: {author}</p>
                            <button onClick={() => handleReadClick(id)}>Mark As Unread</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}