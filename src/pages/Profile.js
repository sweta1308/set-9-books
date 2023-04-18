import { useBooksList } from "../context/BooksContext"

export const Profile = () => {
    const {profileData} = useBooksList();
    const {name, bio, img} = profileData
    return (
        <>
            <h1>Profile</h1>
            <div className="profile-card">
                <img className="profile-img" src={img} alt={name} />
                <h2>Name: {name}</h2>
                <i><strong>Bio: </strong>{bio}</i>
            </div>
        </>
    )
}