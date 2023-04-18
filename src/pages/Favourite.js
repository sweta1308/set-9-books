import { useFavList } from "../context/FavContext"

export const Favourite = () => {
    const {favData, handleRemoveFav} = useFavList();
    return (
        <>
            <h1>Favourite Books</h1>
            <h4>Favourite Books Count: {favData.length}</h4>
            <h1>{favData.length===0 && 'START READING SOME BOOKS'}</h1>
            <ul className="read-list">
                {favData.map(({id, title, author, image, read}) => (
                    <li className="main-list" key={id}>
                        <img src={image} alt={title} />
                        <div className="main-content">
                            <p>{id}</p>
                            <p>Title: {title}</p>
                            <p>Author: {author}</p>
                            <button onClick={() => handleRemoveFav(id)}>Remove from Fav</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}