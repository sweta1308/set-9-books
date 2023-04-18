import { createContext, useContext, useState } from "react";

const FavContext = createContext();

export const FavProvider = ({children}) => {
    const [favData, setFavData] = useState([]);

    const handleFavClick = ({id, title, author, image, read}) => {
        const isBookPresent = favData.findIndex((item) => item.id === id);
        if (isBookPresent === -1) {
            setFavData([...favData, {id, title, author, image, read}])
        } else {
            setFavData([...favData])
        }
    }

    const handleRemoveFav = (id) => setFavData(currData => currData.filter(book => book.id !== id))

    return (
        <FavContext.Provider value={{handleFavClick, favData, handleRemoveFav}}>
            {children}
        </FavContext.Provider>
    )
}

export const useFavList = () => useContext(FavContext)