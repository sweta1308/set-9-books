import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch";

const BookContext = createContext();

export const BooksProvider = ({children}) => {
    const [bookList, setBookList] = useState([]);
    const [profileData, setProfileData] = useState({});

    const getBookData = async () => {
        try {
            const response = await fakeFetch('https://example.com/api/books');
            if (response.status === 200) {
                setBookList(response.data.books);
                setProfileData(response.data.user);  
            };
            
        } catch (response) {
            console.error(response.message)
        }
    }

    useEffect(() => {
        getBookData()
    }, [])

    const filteredReadList = bookList.filter(({read}) => read)

    const handleReadClick = (id) => 
        setBookList(curr => curr.map(book => book.id===id ? {...book, read: !book.read} : book))
        
    return (
        <BookContext.Provider value={{bookList, profileData, filteredReadList, handleReadClick}}>
            {children}
        </BookContext.Provider>
    )
}

export const useBooksList = () => useContext(BookContext)